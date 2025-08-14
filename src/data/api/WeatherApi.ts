import type WeatherApiResponse from "./model/WeatherApiResponse.ts";

const openMeteoURL = "https://api.open-meteo.com"

export default class WeatherApi {
  async getCurrentWeather(): Promise<WeatherApiResponse> {
    const response = await fetch(openMeteoURL + "/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m")
    return await response.json()
  }
}
