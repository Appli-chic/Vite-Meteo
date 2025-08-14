export default class WeatherApiResponse {
  readonly latitude: number
  readonly longitude: number
  readonly generationtime_ms: number
  readonly utc_offset_seconds: number
  readonly timezone: string
  readonly timezone_abbreviation: string
  readonly elevation: number
  readonly hourly_units: HourlyUnitsResponse
  readonly hourly: HourlyResponse

  constructor(
    latitude: number,
    longitude: number,
    generationtime_ms: number,
    utc_offset_seconds: number,
    timezone: string,
    timezone_abbreviation: string,
    elevation: number,
    hourly_units: HourlyUnitsResponse,
    hourly: HourlyResponse,
  ) {
    this.latitude = latitude
    this.longitude = longitude
    this.generationtime_ms = generationtime_ms
    this.utc_offset_seconds = utc_offset_seconds
    this.timezone = timezone
    this.timezone_abbreviation = timezone_abbreviation
    this.elevation = elevation
    this.hourly_units = hourly_units
    this.hourly = hourly
  }
}

class HourlyResponse {
  readonly time: [string]
  readonly temperature_2m: [number]

  constructor(time: [string], temperature_2m: [number]) {
    this.time = time
    this.temperature_2m = temperature_2m
  }
}

class HourlyUnitsResponse {
  readonly time: string
  readonly temperature_2m: string

  constructor(time: string, temperature_2m: string) {
    this.time = time
    this.temperature_2m = temperature_2m
  }
}
