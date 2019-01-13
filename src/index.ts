import './style.scss';
import { weatherCall } from './api';
import { Weather } from './weather';

const API_KEY: string = '2c0fd3dc783f393963e1175852aa9392';
const baseURL: string = 'https://api.openweathermap.org/data/2.5/weather?q=Blackwood,uk&appid=';
const apiURL: string = baseURL + API_KEY;

let data = weatherCall(apiURL);

data.then(res => console.log(res));
data.then(res => {
    let weather = new Weather(res.weather[0].description, res.name);
    console.log(weather);
    document.body.appendChild(weatherComponent(weather.forecast(), weather.location()));
});

/* I think I need to use an interface here */

const weatherComponent = (forecast: string, location: string) => {

    
    const element: HTMLElement = document.createElement('div');
    let weatherDesc: string = forecast
    let weatherLocation: string = location;

    element.innerHTML = weatherLocation;

    return element;
}
const component = () => {

    const element: HTMLElement = document.createElement('div');
    let elementText: string = "Welcome to TypeScript";

    element.innerHTML = elementText;

    return element;
}
const innerComponent = () => {

    const element: HTMLElement = document.createElement('p');
    let elementText: string = `I'm inside the div`;
    element.innerHTML = elementText;

    return element;
}

let test: string = "Hello";

console.log(test);

document.body.appendChild(component());
const target = document.getElementsByTagName('div')[0];
target.appendChild(innerComponent());