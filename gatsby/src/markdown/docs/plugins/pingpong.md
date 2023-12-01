---
order: 10
featured: false
category: "plugins"
slug: "/plugins/pingpong"
parentSlug: "/plugins"
title: "Pingpong"
description: "A perfect view of your users"
keywords: "plugins, pingpong, tings, product, Firebase"
icon: "doc"
image: "/png/goldlabel.png"
---
> Pingpong combines analytics with messaging allowing website owners to talk directly to their users in real time

## PingDialog.tsx

Takes fbId: string | null

When the value of `pingFbId` is null, the Ping Dialog is closed, unmounted and not subscribed to the firebase document matching `fbId`. 

When the fbId is a correctly formatted string and exists in the collection we subscribe to the document with the uid in firestore in cleaned up React effect hook

#### Firestore Database

Firebase's Firestore Database is a cloud-hosted NoSQL database provided by Google. Developers can build event based applications by synchronizing data between clients and database with no server layer requirement

### Here's how it's done

1. **Initialize Firebase SDK:** Begin by setting up your Firebase project and initializing the Firebase SDK in your messaging application. This includes adding the necessary Firebase configuration to your app and initializing the Realtime Database.

2. **User Authentication:** Implement user authentication to identify each user and manage their access to the messaging system. Firebase provides authentication methods like email/password, Google, Facebook, etc., which you can use to authenticate users.

3. **Database Structure:** Design the database structure to handle messages and conversations. A common approach is to have a root node, let's say "messages," and under that, you can have child nodes for each conversation. Each conversation node would then have child nodes for individual messages, including their content, timestamp, sender, etc.

   Example Database Structure:
   ```
   messages
     └── conversation1
          ├── message1
          ├── message2
          └── ...
     └── conversation2
          ├── message1
          ├── message2
          └── ...
     └── ...
   ```

4. **Sending Messages:** When a user sends a message, you will need to write the message data to the appropriate conversation node in the Realtime Database. This data will then be automatically synchronized in real-time with all users who are part of that conversation.

5. **Receiving Messages:** As messages are written to the database, other users who are part of the conversation will receive real-time updates from Firebase. You can set up listeners in your application to listen for changes to the conversation node and update the user interface accordingly.

6. **Handling Notifications:** To provide real-time notifications to users about new messages, you can use Firebase Cloud Messaging (FCM) to send push notifications to their devices whenever a new message arrives. This way, users don't have to keep the app open to receive messages.

7. **Handling Read Receipts:** To show if a message has been read or not, you can update the message node in the database with a "read" status when a user reads the message. This update will again be automatically synchronized with all users.

8. **Additional Features:** Depending on your requirements, you can add features like multimedia support (images, videos), message status (delivered, sent), message reactions, etc.

#### TingShape

```javascript
const ting: TingShape: {
  {
    "host": "localhost:8000",
    "fingerprint": "a34d12ce04049f496442ab851c00fe49",
    "ip": "88.203.1.125",
    "continent_code": "EU",
    "continent_name": "Europe",
    "country_code2": "MT",
    "country_code3": "MLT",
    "country_name": "Malta",
    "country_capital": "Valletta",
    "state_prov": "Southern Region",
    "state_code": "BH-14",
    "district": "",
    "city": "Birkirkara",
    "zipcode": "BKR",
    "latitude": "35.89132",
    "longitude": "14.45794",
    "is_eu": true,
    "calling_code": "+356",
    "country_tld": ".mt",
    "languages": "mt,en-MT",
    "country_flag": "https://ipgeolocation.io/static/flags/mt_64.png",
    "geoname_id": "2562699",
    "isp": "Melita Limited",
    "connection_type": "",
    "organization": "Melita Limited",
    "currency": {
        "code": "EUR",
        "name": "Euro",
        "symbol": "€"
    },
    "time_zone": {
        "name": "Europe/Malta",
        "offset": 1,
        "offset_with_dst": 2,
        "current_time": "2023-09-09 12:53:50.493+0200",
        "current_time_unix": 1694256830.493,
        "is_dst": true,
        "dst_savings": 1
    },
    "browser": {
        "name": "Chrome",
        "version": "116.0.0.0",
        "major": "116"
    },
    "engine": {
        "name": "Blink",
        "version": "116.0.0.0"
    },
    "os": {
        "name": "Mac OS",
        "version": "10.15.7"
    },
    "device": {
        "vendor": "Apple",
        "model": "Macintosh"
    },
    "cpu": {}
}
```