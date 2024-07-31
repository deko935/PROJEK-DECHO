import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";
const IntroSection = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center">
        <Row>
          <Col>
            <div className="title">Seduh Kopimu</div>
            <div className="title">Nikmati Moviesmu</div>
            <div className="IntroButton mt-3 text-center">
              <Button
                variant="dark"
                href="https://r.search.yahoo.com/_ylt=AwrKD2S2gHpmgqIH1tXLQwx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3Ny/RV=2/RE=1719333174/RO=10/RU=https%3a%2f%2fwww.netflix.com%2f/RK=2/RS=kOoVQvENw0L8ykJMXWcrVquAeXw-"
              >
                Selengkapnya
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default IntroSection;
