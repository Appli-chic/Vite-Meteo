import type WeatherApiResponse from "../../data/api/model/WeatherApiResponse.ts";

export default class Weather {
  readonly latitude: number
  readonly longitude: number
  readonly weatherDataList: WeatherData[]

  constructor(latitude: number, longitude: number, weatherDataList: WeatherData[]) {
    this.latitude = latitude
    this.longitude = longitude
    this.weatherDataList = weatherDataList
  }

  static fromApi(apiWeather: WeatherApiResponse): Weather {
    return new Weather(
      apiWeather.latitude,
      apiWeather.longitude,
      Weather.getWeatherDataFromApi(apiWeather),
    )
  }

  private static getWeatherDataFromApi(apiWeather: WeatherApiResponse): WeatherData[] {
    const weatherDataList: WeatherData[] = []

    for (let i = 0; i < apiWeather.hourly.time.length; i++) {
      const weatherData = new WeatherData(
        apiWeather.hourly.time[i],
        apiWeather.hourly.temperature_2m[i]
      )

      weatherDataList.push(weatherData)
    }

    return weatherDataList
  }
}

// TODO: Remove export
export class WeatherData {
  readonly date: string
  readonly temperature: number

  constructor(date: string, temperature: number) {
    this.date = date
    this.temperature = temperature
  }
}
