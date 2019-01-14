import './style.scss';
import { weatherCall } from './api';
import { Weather } from './weather';

const API_KEY: string = '2c0fd3dc783f393963e1175852aa9392';
const baseURL: string = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Blackwood,uk&appid=';
const apiURL: string = baseURL + API_KEY;

let data = weatherCall(apiURL);

interface WeatherForecast {

    clouds: object
    name: string,

    // main
    temperature: number,
    tempMax: number,
    tempMin: number,
    precipitation: number,
    humidity: number,

    // sys
    country: string,
    sunrise: number,
    sunset: number,

    // weather
    description: string,
    icon: string,
    id: number,

    // wind
    wind: object

}

data.then(res => console.log(res));
data.then(res => {
    // create new object here and then call weatherComponent build function
    let weather: WeatherForecast = new Weather(res.weather[0].description, res.name);
    console.log(weather);
    document.body.appendChild(weatherComponent(weather));
});

/* I think I need to use an interface here */

// function will accept a weather object and then build accordingly
const weatherComponent = (weather: WeatherForecast) => {


    const element: HTMLElement = document.createElement('div');
    let weatherDesc: HTMLElement = innerComponent(weather.description);
    let weatherLocation: HTMLElement = innerComponent(weather.name);

    // element.innerHTML = weatherLocation;

    element.appendChild(weatherDesc);
    element.appendChild(weatherLocation);

    return element;
}
// using to test results
// Don't think this is the right way to do this, but if I continued to do so, make it loop so I don't have to call it 1,000,000 times
const innerComponent = (property: any) => {

    const element: HTMLElement = document.createElement('p');
    let prop: any = property;
    element.innerHTML = prop;

    return element;

}
