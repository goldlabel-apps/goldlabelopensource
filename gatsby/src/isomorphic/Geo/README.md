> Malta is a small island and an independent country which can be found in the Mediterranean Sea, located 50 miles south of Italy about 175 miles north of Tunisia. The total area of Malta island is close to 122 square miles. Malta island is a part of an archipelago, which includes three inhabited and plenty of small uninhabited islands

## Storm Glass API

GET https://api.stormglass.io/v1/weather/point?lat=35.917973&lng=14.409943&source=sg&params=airTemperature,pressure,cloudCover,currentDirection,currentSpeed,gust,humidity,iceCover,precipitation,snowDepth,swellDirection,swellHeight,visibility,waterTemperature,waveDirection,waveHeight,wavePeriod,windDirection,windSpeed

Header: Authorization `process.env.REACT_APP_STORMGLASS`

https://docs.stormglass.io/#/

The weather request is used to fetch weather data for a point. The Storm Glass API provides marine weather as well as global weather for land and lakes.

To get marine data you include a coordinate at sea in your request, and to get data for land and lakes - simply send in a coordinate located on land or on a lake

Point Request 

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

Response Format 

The response will be sent back in the form of a JSON object. 
The resource root contains two objects - hours and meta.

Meta

The meta object contains information about the API request. Such as requested latitude and longitude, your daily quota and how many requests you have made so far today.

Hours

The data object contains the actual weather data on an hourly basis
