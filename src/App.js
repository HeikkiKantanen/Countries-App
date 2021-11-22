import React, { Component } from "react";
import axios from 'axios';


class App extends Component {
  state = {
    data: [],
  };

  componentDidMount () {
    axios
    .get("https://restcountries.com/v3.1/all").then((res) => {
      this.setState({ data: res.data });
      console.log(this.state.data);
    });
  }


  render () {
    return (
        <div className="countries">
          {this.state.data.map((country) => (
          <div className="country" key={country.name.common}>
            <h2>{country.name.common}</h2> capital is <p>{country.capital}</p>
            <img src={country.flags.png} />
            {/* <p className="borders">Borders with: { country.borders }</p> */}
          </div>
          ))}
        </div>
      );
    };
};

export default App;
