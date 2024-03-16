export const formatSky = (percentageCloud: number) => {
    let sky = "Blue Sky"
    if(percentageCloud > 5) sky = "Mostly Sunny"
    if(percentageCloud > 40) sky = "Partly Cloudy"
    if(percentageCloud > 50) sky = "Mostly Cloudy"
    if(percentageCloud > 80) sky = "Overcast"
    return sky
}
