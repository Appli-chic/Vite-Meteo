import Weather from "../model/Weather.ts";
import WeatherApi from "../../data/api/WeatherApi.ts";

export default class GetWeatherUseCase {
  private weatherApi: WeatherApi

  constructor(weatherApi: WeatherApi) {
    this.weatherApi = weatherApi
  }

  async getCurrentWeather(): Promise<Weather> {
    const weatherApiResponse = await this.weatherApi.getCurrentWeather()
    return Weather.fromApi(weatherApiResponse)
  }
}
