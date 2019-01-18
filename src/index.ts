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

    // adding interface to my returned json object;
    let response: responseData = res;

    let name: string = response.name;
    let country: string = response.sys.country;
    let nameAndCountry: string = `${name}, ${country}`;
    
    let description: string = response.weather[0].description;

    let temperature: number = response.main.temp;

    let overview: any[] = [nameAndCountry, description];

    for (let prop of overview) {

        weatherComponent(prop);

    }

});

const weatherComponent = (weather: any) => {

    const element = document.getElementsByClassName('container')[0];
    console.log(element);
    let elementData: HTMLElement = innerComponent(weather);
     element.appendChild(elementData);

}

const innerComponent = (property: any) => {

    const element: HTMLElement = document.createElement('p');
    let prop: any = property;
    element.innerHTML = prop;

    return element;

}


const app = () => {

    const body: HTMLDivElement = document.createElement('div');
    body.classList.add("container");

    document.body.appendChild(body);

}

app();