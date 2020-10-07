class UI {
    constructor() {
        this.location = document.getElementById('w-location');
        this.description = document.getElementById('w-desc');
        this.temp = document.getElementById('w-temp');
        this.icon = document.getElementById('w-icon');
        this.pressure = document.getElementById('w-pressure');
        this.humidity = document.getElementById('w-humidity');
        this.windSpeed = document.getElementById('w-wind-speed');
    }

    paint(weather) {
         this.location.innerHTML = weather.name + ", " + weather.sys.country;
         this.description.textContent = weather.weather[0].description
         this.temp.textContent =   `Temp: ${weather.main.temp} ° F`  
         this.pressure.textContent = `Description: ${weather.weather[0].main}`
         this.icon.setAttribute(
             'src',
             `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
         )
         this.humidity.textContent = `Humidity: ${weather.main.humidity}%`
 
         this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed} mi/h`
    }
}
