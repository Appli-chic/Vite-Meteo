import {useEffect, useState} from "react";
import Weather from "../../business/model/Weather.ts";
import GetWeatherUseCase from "../../business/weather/GetWeatherUseCase.ts";
import WeatherApi from "../../data/api/WeatherApi.ts";

export default function useWeatherScreenState() {
  const getWeatherUseCase = new GetWeatherUseCase(new WeatherApi())
  const [uiState, setUiState] = useState<LoadingUiState | FilledUiState>({type: 'loading'});

  useEffect(() => {
    const weatherApi = async () => {
      const weather = await getWeatherUseCase.getCurrentWeather();
      setUiState({type: 'filled', weather: weather});
    }

    weatherApi()
  }, [])

  return uiState
}

export type LoadingUiState = {
  type: 'loading';
}

export type FilledUiState = {
  type: 'filled';
  weather: Weather;
}
