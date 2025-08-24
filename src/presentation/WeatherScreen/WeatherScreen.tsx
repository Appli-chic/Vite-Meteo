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
      {weather.days.map((day) => (
        <div key={day.date} className='day-section'>
          <div className='day-title'>{day.date}</div>
          {day.weatherDataList.map((weatherElement) => (
            <div key={weatherElement.hour} className='hourly-temperature-container'>
              {weatherElement.hour} - {weatherElement.temperature}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default WeatherScreen
