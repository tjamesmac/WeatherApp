import './style.scss';
import { weatherCall } from './api';
// import { Weather } from './weather';

const API_KEY: string = '2c0fd3dc783f393963e1175852aa9392';
const baseURL: string = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=Blackwood,uk&appid=';
const apiURL: string = baseURL + API_KEY;

interface responseData {

    name?: string;
    main: {
        temp: number;
        pressure: number;
        humidity: number;
    }
    sys: {
        country: string;
        sunrise: number
        sunset: number
    }
    weather: {
        0: {
            description: string;
            id: number;
            icon: string;
        }
    }
}


// working block with the interface WeatherData //
let data = weatherCall(apiURL);
data.then(res => console.log(res));
data.then(res => {

    let response: responseData = res;
    let name: string = response.name;
    console.log(name);
    let temperature: number = response.main.temp;

    document.body.appendChild(weatherComponent(name));

});

const weatherComponent = (weather: any) => {

    const element: HTMLElement = document.createElement('div');
    let elementData: HTMLElement = innerComponent(weather);
    element.appendChild(elementData);
    
    return element;

}

const innerComponent = (property: any) => {

    const element: HTMLElement = document.createElement('p');
    let prop: any = property;
    element.innerHTML = prop;

    return element;

}
