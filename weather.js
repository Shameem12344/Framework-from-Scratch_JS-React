let state = reactive({selectedCity: 'London',
                      weather: {
                        temperature: 'N/A',
                        humidity: 'N/A',
                        description: ''
                      }
                     });

const mockWeatherData = {
  "New York": {
    temperature: '15°C',
    humidity: '55%',
    description: 'Cloudy'
  },
  "London": {
    temperature: '10°C',
    humidity: '75%',
    description: 'Rainy'
  },
  "Tokyo": {
    temperature: '22°C',
    humidity: '65%',
    description: 'Sunny'
  },
  "Sydney": {
    temperature: '25°C',
    humidity: '60%',
    description: 'Sunny'
  }
};

function fetchWeather(city) {
  setTimeout(() => {
    const weather = mockWeatherData[city]

    state.weather = weather
  }, 500)
}

createEffect(function(){
  fetchWeather(state.selectedCity);
})


createEffect(() => { 
  render('#container', `<select onChange="updateSelectedCity(this.value)">
    <option value="Tokyo" ${state.selectedCity === 'Tokyo' ? 'selected' : ''}>Tokyo</option>
    <option value="London" ${state.selectedCity === 'London' ? 'selected' : ''}>London</option>
    <option value="New York" ${state.selectedCity === 'New York' ? 'selected' : ''}>New York</option>
  </select>
  <div>
    <p> Temperature: ${state.weather.temperature} </p>
    <p> Humidity: ${state.weather.humidity} </p>
    <p> Description: ${state.weather.description} </p>
  </div>`);
  });


function updateSelectedCity(city) {
  state.selectedCity = city
  fetchWeather(city)
}


setTimeout(() => {
  state.message = 'Hello World'
}, 1000);

