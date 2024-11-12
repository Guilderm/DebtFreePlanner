import { Controller, Post, Body, HttpCode, HttpStatus } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NewsletterService } from "./newsletter.service";
import { SubscribeDto } from "./dto/subscribe.dto";

@Controller("api/newsletter_subscription")
export class NewsletterController {
  constructor(
    private readonly newsletterService: NewsletterService,
    private readonly configService: ConfigService, // Inject ConfigService
  ) {}

  @Post()
  @HttpCode(HttpStatus.OK)
  async subscribe(
    @Body() subscribeDto: SubscribeDto,
  ): Promise<{ message: string }> {
    // Example of getting a configuration value
    const appEnv = this.configService.get<string>("NODE_ENV");
    console.log(`App environment: ${appEnv}`);

    await this.newsletterService.subscribe(subscribeDto.email_address);
    return { message: "Successfully subscribed" };
  }
}
