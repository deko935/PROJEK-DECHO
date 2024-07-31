import Card from "react-bootstrap/Card";
import avenger from "../assets/images/superhero/Avengers_ End game New poster ❤️.jpeg";
import infinity from "../assets/images/superhero/Avengers infinity war.jpeg";
import homeComing from "../assets/images/superhero/spiderman home coming.jpeg";
import thor from "../assets/images/superhero/THOR_LOVE AND THUNDER_JULY 8.jpeg";
import nwHome from "../assets/images/superhero/spiderman no way home.jpeg";
import spiderman2 from "../assets/images/superhero/spiderman 2.jpeg";
import { Container, Row, Col, Image, CardTitle } from "react-bootstrap";
const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Trending Movie</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending">
            <Card className="bg-dark  movieimage">
              <Image variant="bottom" src={avenger} alt="Avenger" />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">
                      Avengers_End Game
                    </CardTitle>
                    <Card.Text className="text-left">
                      After the devastating events of Avengers: Infinity War
                      (2018), the universe is in ruins.
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark  movieimage">
              <Image variant="bottom" src={infinity} alt="Avenger" />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">
                      Avengers_Infinity War
                    </CardTitle>
                    <Card.Text className="text-left">
                      The Avengers and their allies must be willing to sacrifice
                      all in an attempt to defeat the powerful Thanos.
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark  movieimage">
              <Image variant="bottom" src={homeComing} alt="Avenger" />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">
                      Spiderman Home Coming
                    </CardTitle>
                    <Card.Text className="text-left">
                      Spider-Man: Homecoming is a 2017 American superhero film
                      based on the Marvel Comics character Spider-Man.
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark  movieimage">
              <Image variant="bottom" src={thor} alt="Avenger" />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">
                      Thor Love And Thunder
                    </CardTitle>
                    <Card.Text className="text-left">
                      Thor enlists the help of Valkyrie, Korg and ex-girlfriend
                      Jane Foster to fight Gorr the God Butcher.
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark  movieimage">
              <Image variant="bottom" src={nwHome} alt="Avenger" />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">
                      Spiderman No Way Home
                    </CardTitle>
                    <Card.Text className="text-left">
                      With Spider-Man's identity now revealed, Peter asks Doctor
                      Strange for help.
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="bg-dark  movieimage">
              <Image variant="bottom" src={spiderman2} alt="Avenger" />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">Spiderman 2</CardTitle>
                    <Card.Text className="text-left">
                      Peter Parker is beset with troubles in his failing
                      personal life as he battles a former brilliant scientist.
                    </Card.Text>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
