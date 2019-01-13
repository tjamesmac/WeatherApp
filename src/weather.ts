export class Weather {
    weather: string;
    place: string;
    constructor(forecast: string, location: string) {
        this.weather = forecast;
        this.place = location;
    }
    forecast() {
        return this.weather;
    }
    location() {
        return this.place;
    }
}