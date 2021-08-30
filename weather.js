
const submit = () => {
    const input = document.getElementById('input-text');
    const inputValue = input.value;
    input.value = '';

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=13d4ed7ed8b802ca0e8e7936334c4820`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => display(data)).catch(e => {
            document.getElementById('info').innerHTML = `<p>please enter city name</p>`;
        })
}
const display = data => {
    const contain = document.getElementById('info');
    const temp = parseInt(data.main.temp) - 273;
    console.log(temp);

    contain.innerHTML = `<p>City Name: ${data.name}</p><p>Current Weather Status: ${data.weather[0].description}</p><p> Temperature: ${temp} °C</p><p>Country: ${data.sys.country}</p>`;

}