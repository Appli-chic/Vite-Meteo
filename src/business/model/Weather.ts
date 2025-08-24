import type WeatherApiResponse from "../../data/api/model/WeatherApiResponse.ts";

export default class Weather {
  readonly latitude: number
  readonly longitude: number
  readonly days: DayWeather[]

  constructor(latitude: number, longitude: number, days: DayWeather[]) {
    this.latitude = latitude
    this.longitude = longitude
    this.days = days
  }

  static fromApi(apiWeather: WeatherApiResponse): Weather {
    return new Weather(
      apiWeather.latitude,
      apiWeather.longitude,
      Weather.getDaysFromApi(apiWeather),
    )
  }

  private static getDaysFromApi(apiWeather: WeatherApiResponse): DayWeather[] {
    const grouped: { [date: string]: WeatherData[] } = {};
    for (let i = 0; i < apiWeather.hourly.time.length; i++) {
      const fullDate = apiWeather.hourly.time[i];
      const [date, hour] = fullDate.split('T');
      const weatherData = new WeatherData(hour, apiWeather.hourly.temperature_2m[i]);
      if (!grouped[date]) grouped[date] = [];
      grouped[date].push(weatherData);
    }
    return Object.entries(grouped).map(([date, weatherDataList]) => new DayWeather(date, weatherDataList));
  }
}

export class DayWeather {
  readonly date: string;
  readonly weatherDataList: WeatherData[];
  constructor(date: string, weatherDataList: WeatherData[]) {
    this.date = date;
    this.weatherDataList = weatherDataList;
  }
}

// TODO: Remove export
export class WeatherData {
  readonly hour: string
  readonly temperature: number

  constructor(hour: string, temperature: number) {
    this.hour = hour
    this.temperature = temperature
  }
}
