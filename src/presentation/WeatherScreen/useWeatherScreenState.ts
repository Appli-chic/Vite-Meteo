import {useEffect, useState} from "react";
import getCurrentWeather from "../../data/api/WeatherApi.ts";
import Weather from "../../business/model/Weather.ts";

export type LoadingUiState = {
  type: 'loading';
}

export type FilledUiState = {
  type: 'filled';
  weather: Weather;
}

export default function useWeatherScreenState() {
  const [uiState, setUiState] = useState<LoadingUiState | FilledUiState>({type: 'loading'});

  useEffect(() => {
    const weatherApi = async () => {
      const weather = await getCurrentWeather();
      setUiState({type: 'filled', weather: weather});
    }

    weatherApi()
  }, [])

  return uiState
}
