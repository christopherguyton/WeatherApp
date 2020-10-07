
class Weather {
    constructor(city, country) {
        this.apiKey = 'feed4b8baf64bec8a49efd0a47cea87a';
        this.city = city;
        this.country = country;
    }

    //Fetch weather from API
    async getWeather() {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&appid=${this.apiKey}`);
        const responseData = await response.json();

        return responseData

    }

    changeLocation(city, country) {
        this.city = city;
        this.country = country;
    }
}

