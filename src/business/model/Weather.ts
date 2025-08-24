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
      const fullDate = apiWeather.hourly.time[i]; // e.g., "2025-08-23T01:00"
      const date = fullDate.split('T')[0]; // e.g., "2025-08-23"
      const weatherData = new WeatherData(fullDate, apiWeather.hourly.temperature_2m[i]);
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
  readonly date: string
  readonly temperature: number

  constructor(date: string, temperature: number) {
    this.date = date
    this.temperature = temperature
  }
}
