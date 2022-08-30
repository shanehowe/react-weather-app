export const WeatherData = ({ weather }) => {
    const transparentDivStyle = {
        background: 'rgba(0, 0, 0, 0.5)',
        width: '50vw',
        marginTop: '4rem',
        borderRadius: '5%',
        height: '50vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection: 'column'
    };

    const outDivStyle = {
        display: 'flex',
        justifyContent: 'center'
    };

    const pStyle = {
        color: '#fff',
        fontSize: '18px'
    };

    const h3Style = {
        color: '#fff',
        fontSize: '25px',
        fontWeight: 'bold',
    };

    return (
        weather.main ? 
            <div style={outDivStyle}>
                <div style={transparentDivStyle}>
                <p style={h3Style}>Weather in { weather.name }</p>
                <img alt="weather icon" 
                src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}/>
                <p style={pStyle}>{ weather.main.temp } Celcius, {weather.weather[0].description}</p>
                <p style={pStyle}>Feels like { weather.main.feels_like } Celcius</p>
                <p style={pStyle}>Wind speed: { weather.wind.speed } m/s</p>
                </div>
            </div> 
            
            : 

            <div>
                <p>Search for a city..</p>
            </div>
    )
}