import AllBeers from "../assets/beers.png";
import RandomBeer from "../assets/random-beer.png";
import { Link } from "react-router-dom";
import { Container, Card, Button } from "react-bootstrap";

function HomePage() {
  return (
    <Container>
      <Card className="text-center">
        <Card.Header>
            <img src={AllBeers} alt="All Beers" />
        </Card.Header>
        <Card.Body>
          <Card.Title>All Beers</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus
            pellentesque cursus. Proin sed vestibulum nunc, vitae euismod
            mauris. In non fermentum arcu. Aliquam eget sodales turpis, nec
            consectetur dolor. Nunc nulla massa, faucibus sed enim ac,
            vestibulum aliquet tortor.
          </Card.Text>
          <Link to={"/beers"}>
            <Button variant="primary">All beers</Button>
          </Link>
        </Card.Body>
      </Card>

      <Card className="text-center">
        <Card.Header>
            <img src={RandomBeer} alt="Random beer" />
        </Card.Header>
        <Card.Body>
          <Card.Title>Random Beers</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tempus
            pellentesque cursus. Proin sed vestibulum nunc, vitae euismod
            mauris. In non fermentum arcu. Aliquam eget sodales turpis, nec
            consectetur dolor. Nunc nulla massa, faucibus sed enim ac,
            vestibulum aliquet tortor.
          </Card.Text>
          <Link to={"/random-beer"}>
            <Button variant="primary">Random Beers</Button>
          </Link>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default HomePage;
