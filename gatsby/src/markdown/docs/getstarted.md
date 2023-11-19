---
order: 10
cover: true
category: "docs"
slug: "/docs/getting-started"
parentSlug: "/docs"
title: "Getting Started"
description: "Developer? Start by cloning the repo"
keywords: "developer"
icon: "doc"
image: "/jpg/ukmap.jpg"
---
Identify where you're going to clone the repository. We'll call this `<working-repo>`. Decide on the machine readable name `<your-project>`. Clone the repo and install dependencies

```bash
cd <working-dir>
git clone https://github.com/listingslab-software/open-source <your-project>
cd <your-project>
cd gatsby
npm install
cd ../
```

Open and configure `gatsby/src/config`

```javascript
export const glConfig: ConfigShape = {
    siteDisplayname: "Display Name", 
    siteUrl: "https://yourdomain.com",
    siteEmail: "you@yourdomain.com",
    siteFacebook: "https://www.facebook.com/yourfacebook",
    siteTitle: "Your Site Name",
    siteDescription: "Tagline,
    siteKeywords: "default, keywords",
    siteImage: "/jpg/default.jpg",
    siteIcon: "/svg/iOS.svg",
    siteTwitter: "@yourtwitter",
    siteTheme: "#C5C5C5",
    theme: {
        slug: "opensource",
        primaryColor: "#C5C5C5",
        secondaryColor: "#616161",
    },
    mapbox: {
        light: "mapbox://styles/listingslab/clmrnpplw00ej01nsfv8l4q25",
        dark: "mapbox://styles/listingslab/clmrnt68o02a801qxevn0bt6u"
    }
```

Start with the command `npm start`

When Gatsby has finished starting the dev server, it's available on 
http://localhost:8000
