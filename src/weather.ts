export const weatherHeader = (weather: string, className: string): HTMLElement  => {

    let headData: HTMLDivElement = document.createElement('div');
    headData.classList.add(className);
    headData.innerHTML = weather;

    return headData;

}

export const weatherMiddle = (weather: string, className: string): HTMLElement  => {

    let headData: HTMLDivElement = document.createElement('div');
    headData.classList.add(className);
    headData.innerHTML = weather;

    return headData;

}

export const weatherIcon = (icon: string, desc: string, className: string): HTMLElement => {

    let headData: HTMLDivElement = document.createElement('div');
    headData.classList.add(className);
    headData.innerHTML = `<img src="http://openweathermap.org/img/w/${icon}.png"/>`

    let description: HTMLElement = document.createElement('span');
    description.innerHTML = desc;

    headData.appendChild(description);

    return headData;

}


export const weatherData = (main: any, className: string) => {

    let weatherData: HTMLDivElement = document.createElement('div');

    let max: number = main.temp_max;
    let min: number = main.temp_min;
    let pressure: number = main.pressure;
    let humidity: number = main.humidity;

    let dater: number[] = [max, min, pressure, humidity]

    for (let element of dater) {

        let weatherDataBox = document.createElement('span');
        weatherDataBox.innerHTML = `${element}, `;
        weatherData.appendChild(weatherDataBox);

    }
    
    return weatherData;
}

