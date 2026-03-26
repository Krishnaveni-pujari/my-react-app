import { Container, Row, Col, Card } from "react-bootstrap";

function Projects() {
  return (
    <Container className="py-5" id="projects">

      <h2 className="text-center mb-4">My Projects</h2>

      <Row>

        <Col lg={4} md={6} className="mb-4">
          <Card className="shadow project-card">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>
                A React based web application.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="shadow project-card">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>
                Responsive website using Bootstrap.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col lg={4} md={6} className="mb-4">
          <Card className="shadow project-card">
            <Card.Img variant="top" src="https://via.placeholder.com/300" />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>
                Portfolio website using React.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

      </Row>

    </Container>
  );
}

export default Projects;