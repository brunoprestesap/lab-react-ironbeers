import Header from "../components/Header";
import { useState, useEffect } from 'react';
import axios from "axios";

function PageDetails(){

    const [beerRandom, setBeerRandom] = useState({});

    useEffect(() => {
        async function fetchBeerRandom() {
          const response = await axios.get(
            "https://ih-beers-api2.herokuapp.com/beers/random"
          );
          setBeerRandom(response.data);
        }
    
        fetchBeerRandom();
      }, []);

    return (
        <div className="div-detail">
            <Header/>

            <div key={beerRandom._id} className="container-detail">
                <div className="container-img">
                    <img src={beerRandom.image_url} alt={beerRandom.name}/>
                </div>
                <div className="title">
                    <h1>{beerRandom.name}</h1>
                    <h2>{beerRandom.attenuation_level}</h2>
                </div>
                <div className="subtitle">
                    <h3>{beerRandom.tagline}</h3>
                    <h3>{beerRandom.first_brewed}</h3>
                </div>
                <div className="detail">
                    <p className="description">{beerRandom.description}</p>
                    <p className="contributed">{beerRandom.contributed_by}</p>
                </div>
            </div>
        </div>
    )
}

export default PageDetails;