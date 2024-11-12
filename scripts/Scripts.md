# Scripts

```Powershell
#TO get the Monorepo structore
Get-ChildItem -Recurse | Where-Object { $_.FullName -notlike "*node_modules*" -and $_.FullName -notlike "*.next*" -and $_.FullName -notlike "*.output*" -and $_.FullName -notlike "*.nuxt*"-and $_.FullName -notlike "*dist*"} | ForEach-Object { $_.FullName }

#To synk secrets
infisical agent --config .\agent-config-file.yaml

# TO bild docker immage for pwa-server
docker build -t pwa-server-image -f apps/pwa-server/Dockerfile .
docker build --no-cache -t your-docker-repo/pwa-server:latest -f apps/pwa-server/Dockerfile .
```