import React, { Component } from 'react';
import axios from "axios";
import number from "easy-number-formatter";

function getCountry(capital) {
    return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_OPENWEATHER_KEY}` 
    );
}

class CountrySingle extends Component {
    state = {
        country: {},
        weather: {},
        isLoading: true,
    };

    componentDidMount() {
        Promise.all([
            getCountry(this.props.params.name),
            getWeather(this.props.params.name),
        ]).then((res) => {
        this.setState({
            country: res[0].data[0], 
            weather: res[1].data,
            isLoading: false,
        });
            console.log("response", res)
            console.log("state country", this.state.country);
            console.log("state weather", this.state.weather);
        });
    }

    render () {
        if (this.state.isLoading) {
            return (
            <div>
                <div className="lds-default">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
            );
          }
        if (!this.state.isLoading) {
            return (
                <div className="weather-wrapper">
                    <div className="single-content">
                        <img 
                            src={this.state.country.flags.svg} 
                            alt={this.state.country.name}>
                        </img>
                        <header>
                            {this.state.country.name}
                        </header>
                        <p>
                            Capital: {" "} {this.state.country.capital}
                        </p>
                        <p>
                            Population: {" "} {number.formatNumber(this.state.country.population)}
                        </p>
                        <p>
                            Official languages: {" "} 
                            {this.state.country.languages.map((l, i) => (<span key={i}> {l.name} </span> 
                            ))} 
                        </p>
                        <p>
                            Currency: {" "} 
                            {this.state.country.currencies[0].code}
                            {" "} - 
                            {this.state.country.currencies[0].symbol}
                        </p>
                        <p>
                            Time zone: {" "}
                            {this.state.country.timezones[0]}
                        </p>
                         <p className="weather-info">
                            Right now it is {" "}
                            {this.state.weather.main.temp} degrees in {" "}
                            {this.state.country.capital}
                                 <img 
                                    className="weather-img" 
                                    src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
                                    alt={this.state.weather.weather[0].description}
                                />
                        </p>
                    </div>
                </div>
            );
        }
    }   
};

export default CountrySingle;