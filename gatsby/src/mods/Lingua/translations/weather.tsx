export const weather: any = {
    WEATHER_FORECAST: {
        en: "Weather forecast",
        mt: "Tbassir tat-temp",
        de: "Wettervorhersage",
        cn: "天气预报",
        it: "Previsioni del tempo",
        pi: "Ohh arr, weather be..."
    },
    CURRENT_WEATHER: {
        en: "Current Weather",
        mt: "Temp kurrenti",
        de: "Aktuelle Wetterlage",
        cn: "当前天气",
        it: "Meteo attuale",
        pi: "Ohh arr, Current weather be..."
    },
    CURRENT_TIME: {
        en: "Current local time",
        mt: "Hin lokali attwali",
        de: "Aktuelle Ortszeit",
        cn: "当前当地时间",
        it: "Ora locale attuale",
        pi: "Ohh arr, Current local time be..."
    },
    FORECAST_TIME: {
        en: "Forcast time",
        mt: "Hin imbassar",
        de: "Prognosezeit",
        cn: "预测时间",
        it: "Tempo previsto",
        pi: "Ohh arr, Current time is"
    },
}

export const paramMeta: any = {
    airTemperature: {
        visible: true,
        title: "Air Temp",
        description: "Degrees celsius",
        suffix: "°C",
        icon: "temp",
    },
    pressure: {
        title: "Pressure",
        description: "Air pressure in hPa",
        suffix: "hPa",
        icon: "pressure",
    },
    cloudCover: {
        visible: true,
        title: "Cloud Cover",
        description: "Total cloud coverage in percent",
        suffix: "%",
        icon: "cloud",
    },
    currentSpeed: {
        title: "Sea Current Speed",
        description: "Speed of current in meters per second",
        suffix: "m/s",
        icon: "water",
    },
    currentDirection: {
        title: "Sea Current Direction",
        description: "Direction of current. 0° indicates current coming from north",
        suffix: "°",
        icon: "direction",
    },
    windDirection: {
        visible: true,
        title: "Wind Direction",
        description: "Direction of combined wind and swell waves. 0° indicates waves coming from north",
        suffix: "°",
        icon: "direction",
    },
    windSpeed: {
        visible: true,
        title: "Wind Speed",
        description: "Speed of wind at 10m above sea level in meters per second.",
        suffix: "m/s",
        icon: "wind",
    },
    gust:{
        visible: true,
        title: "Gust",
        description: "Wind gust in meters per second",
        suffix: "m/s",
        icon: "wind",
    },
    humidity: {
        visible: true,
        title: "Relative Humidity",
        description: "Relative humidity in percent",
        suffix: "%",
        icon: "humidity",
    },
    iceCover: {
        title: "Ice Cover",
        description: "Proportion, 0-1",
        icon: "ice",
    },
    precipitation: {
        visible: true,
        title: "Rain",
        description: "Mean precipitation in kg/m²/h = mm/h",
        suffix: "mm/h",
        icon: "rain",
    },
    swellDirection: {
        title: "Swell Direction",
        description: "Direction of swell waves. 0° indicates swell coming from north",
        suffix: "°",
        icon: "direction",
    },
    waveDirection: {
        title: "Wave Direction",
        description: "Direction of combined wind and swell waves. 0° indicates waves coming from north",
        suffix: "°",
        icon: "direction",
    },
    waveHeight: {
        title: "Wave Height",
        description: "Significant Height of combined wind and swell waves in meters",
        suffix: "m",
        icon: "waves",
    },
    swellHeight: {
        title: "Swell Height",
        description: "Height of swell waves in meters",
        suffix: "m",
        icon: "waves",
    },
    visibility: {
        title: "Visibility",
        description: "Horizontal visibility in km",
        suffix: "km",
        icon: "spy",
    },
    waterTemperature: {
        visible: true,
        title: "Sea Temp",
        description: "Degrees celsius",
        suffix: "°C",
        icon: "temp",
    },
}
/*
    snowDepth: {
        title: "Snow Depth",
        description: "Depth of snow in meters",
        suffix: "m",
        icon: "ice",
    },
*/

export const meta: any = {
    airTemperature: {
        visible: true,
        title: "Temp",
        description: "Degrees celsius",
        suffix: "°C",
        icon: "temp",
    },
    pressure: {
        title: "Pressure",
        description: "Air pressure in hPa",
        suffix: "hPa",
        icon: "pressure",
    },
    cloudCover: {
        visible: true,
        title: "Cloud Cover",
        description: "Total cloud coverage in percent",
        suffix: "%",
        icon: "cloud",
    },
    currentSpeed: {
        title: "Sea Current Speed",
        description: "Speed of current in meters per second",
        suffix: "m/s",
        icon: "water",
    },
    currentDirection: {
        title: "Sea Current Direction",
        description: "Direction of current. 0° indicates current coming from north",
        suffix: "°",
        icon: "direction",
    },
    windDirection: {
        visible: true,
        title: "Wind Direction",
        description: "Direction of combined wind and swell waves. 0° indicates waves coming from north",
        suffix: "°",
        icon: "direction",
    },
    windSpeed: {
        visible: true,
        title: "Wind Speed",
        description: "Speed of wind at 10m above sea level in meters per second.",
        suffix: "m/s",
        icon: "wind",
    },
    gust:{
        visible: true,
        title: "Gust",
        description: "Wind gust in meters per second",
        suffix: "m/s",
        icon: "wind",
    },
    humidity: {
        visible: true,
        title: "Relative Humidity",
        description: "Relative humidity in percent",
        suffix: "%",
        icon: "humidity",
    },
    iceCover: {
        title: "Ice Cover",
        description: "Proportion, 0-1",
        icon: "ice",
    },
    precipitation: {
        visible: true,
        title: "Rain",
        description: "Mean precipitation in kg/m²/h = mm/h",
        suffix: "mm/h",
        icon: "rain",
    },
    swellDirection: {
        title: "Swell Direction",
        description: "Direction of swell waves. 0° indicates swell coming from north",
        suffix: "°",
        icon: "direction",
    },
    waveDirection: {
        title: "Wave Direction",
        description: "Direction of combined wind and swell waves. 0° indicates waves coming from north",
        suffix: "°",
        icon: "direction",
    },
    waveHeight: {
        title: "Wave Height",
        description: "Significant Height of combined wind and swell waves in meters",
        suffix: "m",
        icon: "waves",
    },
    swellHeight: {
        title: "Swell Height",
        description: "Height of swell waves in meters",
        suffix: "m",
        icon: "waves",
    },
    visibility: {
        title: "Visibility",
        description: "Horizontal visibility in km",
        suffix: "km",
        icon: "spy",
    },
    waterTemperature: {
        visible: true,
        title: "Sea Temperature",
        description: "Degrees celsius",
        suffix: "°C",
        icon: "temp",
    },
}
/*
    snowDepth: {
        title: "Snow Depth",
        description: "Depth of snow in meters",
        suffix: "m",
        icon: "ice",
    },
*/