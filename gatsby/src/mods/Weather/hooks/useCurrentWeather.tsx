import {store} from "../../../goldlabel"
import {getTranslation} from "../../Lingua"
export type CurrentWeatherShape = {
  tweetStr?: string
}

export const useCurrentWeather = () => {
    const {weather, locale} = store.getState()
    const {hourIndex, forecast} = weather
    if (!forecast) return {
      str: "no forecast",
    } 
    const {hours} = forecast
    // console.log("hours", hours.length)
    const currentWeather: any = {
      // Current weather str
      icon: "outlook",
      str: `${getTranslation("CURRENT_WEATHER", locale)} hourIndex ${hourIndex} 
      total hours ${hours.length}`,
    }
    return currentWeather
}


/*
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor est nec magna posuere, quis placerat lorem rhoncus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec sit amet eleifend tellus. Nam lacinia dapibus libero, ac tincidunt"
*/