This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Create mongodb database

1. Sign in https://account.mongodb.com/account/login 
2. Create a new project
3. Create *tourism-agency* database  and *tours* collection
4. We Click on **Connect** -> **Drivers** and copy the connection string

In .env file we can set the next vars:
```js
    MONGODB_URI='mongodb+srv://vercel-admin-user:password@cluster0.fbaz2og.mongodb.net/tourism-agency?retryWrites=true&w=majority'
    MONGODB_DATABASE=tourism-agency
```
## Connect with Google

1. Sign in https://console.cloud.google.com
2. Create a new project
3. Click on Credentials - OAuth 2.0 project name
4. Register authorized origins

In .env file we can set the next vars:
```js
    GOOGLE_CLIENT_ID=xxxxxxxxxxxxxxx.apps.googleusercontent.com
    GOOGLE_CLIENT_SECRET= xxxxxxxxxxxxxxxxxxxx
```

## Other .env variables

```js
    BLOB_READ_WRITE_TOKEN=vercel_blob_rw_xxxxxxx
    NEXT_PUBLIC_SERVER_URL= 'http://localhost:3000' | domain.com
```