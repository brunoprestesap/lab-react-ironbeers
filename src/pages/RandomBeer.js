import Header from "../components/Header";
import { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Container } from "react-bootstrap";

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
        <Container>
            <Header/>

            <Card key={beerRandom._id}>
                <Container className="text-center">
                    <Card.Img
                        style={{ margin: "20px 10px", width: "8rem", height: '20rem' }}
                        rounded
                        variant="top"
                        src={beerRandom.image_url}
                        alt={beerRandom.name}
                    />
                </Container>
                <Card.Body>
                    <Container className="title">
                        <h1>{beerRandom.name}</h1>
                        <h2>{beerRandom.attenuation_level}</h2>
                    </Container>
                    <Container className="subtitle">
                        <h3>{beerRandom.tagline}</h3>
                        <h3>{beerRandom.first_brewed}</h3>
                    </Container>
                    <Container>
                        <p className="description">{beerRandom.description}</p>
                        <p className="contributed">{beerRandom.contributed_by}</p>
                    </Container>
                </Card.Body>
            </Card>

        </Container>
    )
}

export default PageDetails;