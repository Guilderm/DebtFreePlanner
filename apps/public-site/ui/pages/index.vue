<!-- C:\Repository\DebtFreePlanner\apps\public-site\ui\pages\index.vue -->

<template>
  <section class="coming-soon-section relative">
    <!-- Main content with parallax background -->
    <div
      class="content-wrapper flex min-h-screen flex-col items-center justify-center px-4 py-12"
    >
      <!-- Launch Announcement Component -->
      <LaunchAnnouncement />

      <!-- Countdown Timer with margin-top for space -->
      <div class="mt-6">
        <CountdownTimer />
      </div>

      <!-- Email Signup Form -->
      <EmailSignupForm />

      <!-- Features Section -->
      <div class="features mt-12 w-full px-4">
        <Features />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import LaunchAnnouncement from '@/components/coming-soon/LaunchAnnouncement.vue'
import CountdownTimer from '@/components/coming-soon/CountdownTimer.vue'
import EmailSignupForm from '@/components/coming-soon/EmailSignupForm.vue'
import Features from '@/components/coming-soon/Features.vue'

definePageMeta({
  title:
    'DebtFreePlanner - Strategically Plan Your Journey to a Debt-Free Living',
  meta: [
    {
      name: 'description',
      content:
        'Strategically plan your journey to a debt-free living with DebtFreePlanner. Sign up for updates and be the first to know when we launch.',
    },
    {
      name: 'keywords',
      content:
        'DebtFreePlanner, Debt management, Financial planning, Coming soon, Launch, Sign up',
    },
  ],
})
</script>

<style scoped>
.coming-soon-section {
  background-image: url('/images/coming-soon-background.jpg');
  background-size: cover;
  background-attachment: fixed; /* Parallax effect */
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  z-index: 0;
}

.coming-soon-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Dark overlay */
  z-index: 0;
}

.content-wrapper {
  position: relative;
  z-index: 1;
}

.features > div {
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -4px rgba(0, 0, 0, 0.1); /* Keep subtle shadow */
}
</style>
