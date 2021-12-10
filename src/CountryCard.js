import React from "react";
import number from "easy-number-formatter";
import { Link } from "react-router-dom";

const CountryCard = ({
    name, 
    capital, 
    languages, 
    currencies, 
    population, 
    flags,
    }) => {
    return (
        <Link to={capital}>
            <div className="country" key={name}>
                <h2 className="name">{name}</h2> 
                <h3 className="capital">{capital}</h3>
                <img className="flag" src={flags.png} alt={name}/>
                    <div className="card-content">
                        <p className="language">
                            Language(s): {" "}
                            {languages.map((lang, i) => (
                                <span key={i}> {lang.name} </span>
                        ))}
                        </p>
                        <p>
                            Currencies:
                            {currencies.map((mon, i) => (
                                <span key={i}> {mon.name} - {mon.symbol} </span>
                            ))}
                        </p>
                        <p className="population">
                            Population: {" "}
                            {number.formatNumber(population)}
                        </p>
                        <p className="more-info">
                            Click for more info
                        </p>
                    </div>
            </div>
        </Link>
    )
}

  export default CountryCard;