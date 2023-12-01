---
order: 10
cover: false
parentSlug: "/docs/api"
slug: "/docs/api/open-source-api"
title: "Overview"
description: "Firebase Cloud Functions"
category: "api"
icon: "api"
image: "/jpg/climate-change.jpg"
keywords: "api"
twitter: "@listingslab"
---
# Open Source API

## TypeScript

Shape

```javascript
export type OpenSourceShape = {
    notification?: {
        code: string
        status: string
        message: string
    }
}
```

```javascript
  "compilerOptions": {
    "esModuleInterop": true,
```

## Express

```javascript
const app = express();
app.use(cors({credentials: true}));
```

## Firebase Cloud Functions

Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by background events, HTTPS requests, the Admin SDK, or Cloud Scheduler jobs. Your JavaScript, TypeScript or Python code is stored on Google Cloud infrastructure and runs in a managed environment. There's no need to manage and scale your own servers
