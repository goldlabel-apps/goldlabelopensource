## Open Source

> This software is Open Source and Free

#### Get started

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
    plugins: ["Geolocator", "Lingua", "Tings"],
```

Start with the command `npm start`

When Gatsby has finished starting the dev server, it's available on 
http://localhost:8000
