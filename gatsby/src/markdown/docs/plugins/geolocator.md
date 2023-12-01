---
order: 30
category: "plugins"
slug: "/plugins/geolocator"
parentSlug: "/plugins"
title: "Geolocator"
description: "Requires a Mapbox API key"
keywords: "weathermap, mapbox, mashup"
icon: "doc"
image: "/png/goldlabel.png"
lat: 35.919837943466604
lng: 14.493106168762859
website: "https://divemalta.app/dive-shops/abc-diving/?geolocator"
---
## An old fashioned Services Mashup

like from the mid 2000's

In the context of web apps, mashups refer to the practice of combining data or functionalities from two or more different sources to create a new, integrated application or service. The term "mashup" originated from the music industry, where it referred to a blend of two or more songs to create a new composition.

In the context of web applications, mashups involve integrating data or services from various sources, typically using public APIs (Application Programming Interfaces), to create a more useful and powerful application. These mashups allow developers to leverage existing services and data without having to build everything from scratch.

For example, a real estate website might create a mashup by integrating Google Maps API to display property locations on a map, Zillow API to retrieve property details, and Yelp API to show nearby amenities like restaurants and schools. This integration of various services enhances the user experience and provides a comprehensive solution.

Mashups gained popularity in the mid-2000s, when there was a surge in the availability of public APIs from various companies and services. It allowed developers to combine functionality from different platforms, leading to innovative and dynamic web applications. Over time, the concept of mashups has evolved, and newer technologies and practices have emerged, such as microservices and serverless architectures, but the core idea of combining services for added value remains relevant in modern web development.

> Malta is a small island and an independent country which can be found in the Mediterranean Sea, located 50 miles south of Italy about 175 miles north of Tunisia. The total area of Malta island is close to 122 square miles. Malta island is a part of an archipelago, which includes three inhabited and plenty of small uninhabited islands

#### Stormglass [Docs](https://docs.stormglass.io)

`GET https://api.stormglass.io/v1/weather/point?lat=35.917973&lng=14.409943&source=sg&params=airTemperature,pressure,cloudCover,currentDirection,currentSpeed,gust,humidity,iceCover,precipitation,snowDepth,swellDirection,swellHeight,visibility,waterTemperature,waveDirection,waveHeight,wavePeriod,windDirection,windSpeed`

`Header: Authorization `process.env.REACT_APP_STORMGLASS` (you will need one of these)

The weather request is used to fetch weather data for a point. The Storm Glass API provides marine weather as well as global weather for land and lakes.

To get marine data you include a coordinate at sea in your request, and to get data for land and lakes - simply send in a coordinate located on land or on a lake

#### Point Request 

Point Requests are used to retrieve data for a single coordinate.

`GET https://api.stormglass.io/v2/weather/point`

```javascript
const lat = 58.7984;
const lng = 17.8081;
const params = 'waveHeight,airTemperature';

fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
  headers: {
    'Authorization': 'example-api-key'
  }
}).then((response) => response.json()).then((jsonData) => {
  // Do something with response data.
});
```

#### Response Format 

The response will be sent back in the form of a JSON object. 
The resource root contains two objects - hours and meta.

#### Meta

The meta object contains information about the API request. Such as requested latitude and longitude, your daily quota and how many requests you have made so far today.

#### Hours

The data object contains the actual weather data on an hourly basis
