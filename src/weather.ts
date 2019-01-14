
// would like to build a weather class that accepts the data from the API

export class Weather {
    // weather: string;
    // place: string;
    clouds: object;
    name: string;

    // main
    temperature: number;
    tempMax: number;
    tempMin: number;
    precipitation: number;
    humidity: number;

    // sys
    country: string;
    sunrise: number;
    sunset: number;

    // weather
    description: string;
    icon: string;
    id: number;
    
    // wind
    wind: object
    constructor(forecast: string, location: string, ) {
        this.description = forecast;
        this.name = location;
    }
    forecast() {
        return this.forecast;
    }
    location() {
        return this.location;
    }
}