import './WeatherScreen.css'
import useWeatherScreenState, { type FilledUiState, type LoadingUiState } from "./useWeatherScreenState.ts";
import type Weather from "../../business/model/Weather.ts";

function WeatherScreen() {
  const uiState = useWeatherScreenState()

  return (
    <div>
      {renderScreen(uiState)}
    </div>
  );
}

function renderScreen(uiState: LoadingUiState | FilledUiState) {
  switch (uiState.type) {
    case 'loading':
      return renderLoadingScreen();
    case 'filled':
      return renderFilledScreen(uiState.weather);
  }
}

function renderLoadingScreen() {
  return <div>Loading</div>;
}

function renderFilledScreen(weather: Weather) {
  return (
    <div className='day-container'>
      {
        weather.weatherDataList.map((weatherElement) => (
          <div className='hourly-temperature-container'>
            {weatherElement.date} - {weatherElement.temperature}
          </div>
        ))
      }
    </div>
  );
}

export default WeatherScreen
