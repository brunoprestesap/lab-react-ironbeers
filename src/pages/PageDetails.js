import { Card, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Header from "../components/Header";

function PageDetails({ beers }){

    const { beerId } = useParams();

    const beerDetail = beers.find((beer) => {
        return beer._id === beerId;
    });

    return (
        <div className="div-detail">
            <Header/>

            <Container key={beerDetail._id}>
                <Row>
                    <Card>
                        <Container className="text-center">
                            <Card.Img
                                style={{ marginTop: "10px", width: "10rem", height: '20rem' }}
                                rounded
                                variant="top"
                                src={beerDetail.image_url}
                            />
                        </Container>
                        <Card.Body>
                            <Container className="title">
                                <h1>{beerDetail.name}</h1>
                                <h2>{beerDetail.attenuation_level}</h2>
                            </Container>
                            <Container className="subtitle">
                                <h3>{beerDetail.tagline}</h3>
                                <h3>{beerDetail.first_brewed}</h3>
                            </Container>
                            <Container>
                                <p className="description">{beerDetail.description}</p>
                                <p className="contributed">{beerDetail.contributed_by}</p>
                            </Container>
                        </Card.Body>
                    </Card>
                </Row>
            </Container>
        </div>
    )
}

export default PageDetails;