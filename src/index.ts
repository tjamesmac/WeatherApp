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
    console.log(response);
    console.log(response.name);
    console.log(response.main);
    console.log(response.main.temp);
    console.log(response.main.pressure);
    console.log(response.main.humidity);

    console.log(response.sys.country);
    console.log(response.sys.sunrise);
    console.log(response.sys.sunset);

    console.log(response.weather[0]);




    // document.body.appendChild(weatherComponent(weather));

});

// end working block //

/* I think I need to use an interface here */

// function will accept a weather object and then build accordingly
const weatherComponent = (weather: any) => {


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
