import { Container, Badge } from "react-bootstrap";

function Hero() {
  return (
    <Container className="text-center py-5" id="home">

      <h1 className="display-4">
        Hello, I'm Krishnaveni
      </h1>

      <p className="lead">
        Web Developer | React Learner
      </p>

      <Badge bg="success">Available for Projects</Badge>

    </Container>
  );
}

export default Hero;