This repository about learning and practicing about AWS Lambda, Serverless framework, and Telegram bot (BotFather).

___

1. Install the Serverless framework and other modules.

```
npm install -g serverless
npm install
```
2. Configure AWS credential.
```
export AWS_ACCESS_KEY_ID=<Access key ID>
export AWS_SECRET_ACCESS_KEY=<Secret access key>
```
3. Create a new bot using Telegram BotFather.
```
/newbot
```
4. Configure Telegram bot token.
```
export TELEGRAM_TOKEN=<Telegram Token>
```
5. Deploy.
```
serverless deploy
```
6. Configure webhook.
```
curl --request POST --url https://api.telegram.org/bot<Telegram Token>/setWebhook --header 'content-type: application/json' --data '{"url": "<API Gateway Endpoint>"}'
```

