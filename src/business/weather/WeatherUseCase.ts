import Weather from "../model/Weather.ts";

export default async function getCurrentWeather(): Promise<Weather> {
  const weatherApiResponse = await getCurrentWeather()
  return Weather.fromApi(weatherApiResponse)
}
