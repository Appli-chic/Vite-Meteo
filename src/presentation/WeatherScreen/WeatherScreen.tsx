import './WeatherScreen.css'
import useWeatherScreenState, {type FilledUiState, type LoadingUiState} from "./useWeatherScreenState.ts";

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
      return renderFilledScreen(uiState);
  }
}

function renderLoadingScreen() {
  return <div>Loading</div>;
}

function renderFilledScreen(uiState: FilledUiState) {
  return (
    <div>
      Latitude: {uiState.weather.latitude}
      Longitude: {uiState.weather.longitude}
    </div>
  );
}

export default WeatherScreen
