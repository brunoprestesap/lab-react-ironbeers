import {Container, Row, Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Cardbeer({ beers }){
    return (
        <Container>
            <Row xs={"1"} md={"2"} lg={"3"} xl={"4"}>
                {beers.map((beer) => {
                    return (
                        <Container className='card g-4'>
                            <Card 
                                key={beer._id}
                                style={{ width: "17rem", height: '25rem' }}>

                                <Container className="text-center">
                                    <Card.Img
                                        style={{ marginTop: "10px", width: "5rem", height: '12rem' }}
                                        rounded
                                        variant="top"
                                        src={beer.image_url}
                                    />
                                </Container>

                                <Card.Body>
                                    <Card.Title>{beer.name}</Card.Title>
                                    <Card.Text>
                                    {beer.tagline} Created by: {beer.contributed_by}
                                    </Card.Text>
                                </Card.Body>

                                <Card.Footer className="text-center">
                                    <Link to={`/beers/${beer._id}`}>
                                        <Button variant="warning">Ver Detalhes</Button>
                                    </Link>
                                </Card.Footer>
                            </Card>
                        </Container>
                    )
                })}
            </Row>
        </Container>
    )
}

export default Cardbeer;