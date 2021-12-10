import React, { Component } from "react";
import axios from 'axios';

import "./loader.css";
import CountryCard from "./CountryCard";



class CountriesList extends Component {
    state = {
      data: [],
      searchInput: "",
      isLoading: true,
    }; 
  
    componentDidMount () {
      axios
      .get(
        "https://restcountries.com/v2/all?fields=name,currencies,capital,flags,languages,population"
        )
        .then((res) => {
        this.setState({ data: res.data, isLoading: false });
        console.log(this.state.data);
      });
    } 
  
    searchHandler = (e) => {
      this.setState({
        searchInput: e.target.value,
      });
      console.log(this.state.searchInput)
    }; 

    render () {
        if (this.state.isLoading) {
          return (
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
          );
        }
    
        if (!this.state.isLoading) {
        return (
            <div className="countries">
              <input 
                type="text" 
                name="search" 
                onChange={this.searchHandler.bind(this)} 
              />
              {this.state.data
              .filter((country) => {
                return country.name
                  .toLowerCase()
                    .includes(this.state.searchInput.toLowerCase());
              })
              .map((country) => (
              <CountryCard {...country} key={country.name} />
              ))}
            </div>
            );
        };
    };
};

export default CountriesList;