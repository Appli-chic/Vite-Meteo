import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import WeatherScreen from './presentation/WeatherScreen/WeatherScreen.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <WeatherScreen/>
    </StrictMode>,
)
