using './main.bicep'

param appName = 'pulse'
param environment = 'production'
param location = 'eastus2'
param containerImage = 'ghcr.io/conseiltek-tektons/pulse:latest'
param databaseName = 'pulse'
param databaseAdmin = 'pulse_admin'

// Secure parameters are resolved from the deployment runner environment and
// are never stored in this file or the generated deployment JSON.
param databasePassword = readEnvironmentVariable('POSTGRES_PASSWORD')
param nextAuthSecret = readEnvironmentVariable('NEXTAUTH_SECRET')
param oidcClientSecret = readEnvironmentVariable('OIDC_CLIENT_SECRET')
param openAiApiKey = readEnvironmentVariable('OPENAI_API_KEY')
