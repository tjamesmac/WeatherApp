
// would like to build a weather class that accepts the data from the API

export class Weather {

    data: any;

    constructor(weatherData: any) {
        this.data = weatherData;
    }
    getData() {
        return this.data;
    }
}