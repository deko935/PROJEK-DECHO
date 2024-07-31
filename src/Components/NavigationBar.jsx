import { Navbar, Container, Nav, NavLink, NavbarBrand } from "react-bootstrap";
const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <NavbarBrand href="/">DechoMovies</NavbarBrand>
          <Nav>
            <NavLink href="#trending">Trending</NavLink>
            <NavLink href="#horor-movie">Horror</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavigationBar;
