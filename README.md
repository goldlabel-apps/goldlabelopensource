## Free Goldlabel Pro

> This software is Open Source and Free

### Get started

1. Where will you clone the repository to?  

Call this `<working-repo>`. Decide on a machine readable name `<your-project>`. Clone the repo and install dependencies

```bash
cd <working-dir>
git clone https://github.com/listingslab-software/open-source <your-project>
cd <your-project>
cd gatsby
npm install
cd ../
npm run
```

2. Environment Variables

Copy `gatsby/.env.sample` to `gatsby/.env.production` & `gatsby/.env.developer` 
and add the info you need

3. Open and configure `gatsby/src/config`

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
    plugins: ["Geolocator", "Lingua", "Tings"],
```

Start with the command `npm start`

Gatsby starts the dev server on http://localhost:8000
