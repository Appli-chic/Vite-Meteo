import Weather, { WeatherData } from "../model/Weather.ts";
import WeatherApi from "../../data/api/WeatherApi.ts";

export default class GetWeatherUseCase {
  private weatherApi: WeatherApi

  constructor(weatherApi: WeatherApi) {
    this.weatherApi = weatherApi
  }

  async getCurrentWeather(): Promise<Weather> {
    const weatherApiResponse = await this.weatherApi.getCurrentWeather()
    return Weather.fromApi(weatherApiResponse)
    // return new Weather(0, 0, [
    //   new WeatherData('2025-08-23T00:00', 14.4),
    //   new WeatherData('2025-08-23T01:00', 14),
    //   new WeatherData('2025-08-23T02:00', 13.8),
    //   new WeatherData('2025-08-23T03:00', 13.5),
    // ])
  }
}
