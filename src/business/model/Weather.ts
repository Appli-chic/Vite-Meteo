import type WeatherApiResponse from "../../data/api/model/WeatherApiResponse.ts";

export default class Weather {
  latitude: number;
  longitude: number;

  constructor(latitude: number, longitude: number) {
    this.latitude = latitude;
    this.longitude = longitude;
  }

  static fromApi(apiWeather: WeatherApiResponse): Weather {
    return new Weather(apiWeather.latitude, apiWeather.longitude)
  }
}
