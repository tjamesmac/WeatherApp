import './style.scss';

import { weatherCall } from './api';
import { weatherHeader, weatherData } from './weather';
import { weatherMiddle } from './weather';
import { weatherIcon } from './weather';

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
            main: string;
        }
    }
}


// need to add error checking to the api call 

// I want to bundle my dom elements together and build them at once

// I want one function that accepts many smaller functions to compile the dom
// elements together in one thing

//  description
//  numbers
//  icons and stuff

let data = weatherCall(apiURL);
data.then(res => console.log(res));
data.then(res => {

    // adding interface to my returned json object;
    let response: responseData = res;
    console.log(response);

    let name: string = response.name;
    let country: string = response.sys.country;
    let nameAndCountry: string = `${name}, ${country}`;
    let description: string = response.weather[0].description;
    let icon: string = response.weather[0].icon;
    let miniDesc: string = response.weather[0].main;
    let main: object = response.main;
    


    weatherComponent(weatherHeader(nameAndCountry, "title"));
    weatherComponent(weatherHeader(description, "description"));
    weatherComponent(weatherIcon(icon, miniDesc, "weatherIcon"));
    weatherComponent(weatherData(main, "weatherIcon"));





});

// this can be my generic function to add things to the dom
const weatherComponent = (weather: any) => {

    const element = document.getElementsByClassName('col')[0];
    element.appendChild(weather);

}

const innerComponent = (property: any) => {

    const element: HTMLElement = document.createElement('p');
    let prop: any = property;
    element.innerHTML = prop;

    return element;

}


const app = () => {

    const body: HTMLDivElement = document.createElement('div');
    const row: HTMLDivElement = document.createElement('div');
    const col: HTMLDivElement = document.createElement('div');

    body.classList.add("container");
    row.classList.add('row');
    col.classList.add('col');
    document.body.appendChild(body);
    body.appendChild(row);
    row.appendChild(col);

}

app();