
//Unit UI class
const ui = new UI();

//init Storage
const storage = new Storage();

const weatherLocation = storage.getLocationData();
// Init weather class
const weather = new Weather(weatherLocation.city, weatherLocation.country)

//Get Weather on Dom Load
document.addEventListener('DOMContentLoaded', getWeather)

//Chnge location event
document.getElementById('w-change-button').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const country = document.getElementById('country').value;

    weather.changeLocation(city, country);

    storage.setLocationData(city, country);
    
    getWeather();

    $('#locModal').modal('hide');
});



function getWeather() {
weather.getWeather()
.then(results => {
    ui.paint(results);
})
.catch(err => console.log(err))
}