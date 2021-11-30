import React, { Component } from 'react';
import axios from "axios";
// import { useParams, useHistory } from "react-router-dom";
// import number from "easy-number-formatter";

function getCountry(capital) {
    return axios.get(`'https://restcountries.com/v2/capital/${capital}'`);
}

function getWeather(capital) {
    return axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=
        ${process.env.REACT_APP_OPENWEATHER_KEY}`, {
        params: {
        acces_key: process.env.REACT_APP_API_KEY,
        query: capital,
        },
    });
}

class CountrySingle extends Component {
    state = {
        country: [],
        weather: [],
    };

    componentDidMount() {
        Promise.all([
            getCountry(this.props.params.name),
            getWeather(this.props.params.name)
        ]).then((res) => {
        this.setState({country: res[0].data, weather: res[1].data
        });
    });
    }

    render () {
        return (
            <div>
                Right now it is degrees in { this.props.params.name}
            </div>
        );
    }
};

export default CountrySingle;