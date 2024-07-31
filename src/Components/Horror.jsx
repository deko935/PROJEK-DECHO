import Card from "react-bootstrap/Card";
import tanahJawa from "../assets/images/horror/kisah tanah jawa.jpeg";
import kkn from "../assets/images/horror/KKN Di Desa Penari.jpeg";
import mangkujiwo from "../assets/images/horror/mangkujiwo.jpeg";
import rasuk from "../assets/images/horror/rasuk.jpeg";
import simanis from "../assets/images/horror/simanis.jpeg";
import theRitual from "../assets/images/horror/the ritual.jpeg";
import { Container, Row, Col, Image, CardTitle } from "react-bootstrap";
const Horror = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">Horror Movie</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="horor-movie">
            <Card className="bg-dark  movieimage">
              <Image
                variant="bottom"
                src={tanahJawa}
                alt="horror"
                className="horor"
              />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">
                      Kisah Tanah Jawa
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
              <Image
                variant="bottom"
                src={kkn}
                alt="horror"
                className="horor"
              />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">
                      KKN Di Desa Penari
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
              <Image
                variant="bottom"
                src={mangkujiwo}
                alt="horror"
                className="horor"
              />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">Mangkujiwo</CardTitle>
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
              <Image
                variant="bottom"
                src={rasuk}
                alt="horror"
                className="horor"
              />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">Rasuk</CardTitle>
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
              <Image
                variant="bottom"
                src={simanis}
                alt="horror"
                className="horor"
              />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">
                      Simanis Jembatan Ancol
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
              <Image
                variant="bottom"
                src={theRitual}
                alt="horror"
                className="horor"
              />
              <Card.Body>
                <div className="bg-dark ">
                  <div className="p-2 m-1 text-white">
                    <CardTitle className="text-center">The Ritual</CardTitle>
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

export default Horror;
