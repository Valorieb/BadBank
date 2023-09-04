import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export const NavbarMenu = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark"
      className="p-3"
    >
      <Container>
        <Navbar.Brand className="badbank" href="#home">
          Bad Bank
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <NavLink className="text-decoration-none text-white" to="/">
              Home
            </NavLink>
            <NavLink className="text-decoration-none text-white" to="/alldata">
              All Data
            </NavLink>
            <NavLink className="text-decoration-none text-white" to="/deposit">
              Deposit
            </NavLink>
            <NavLink className="text-decoration-none text-white" to="/withdraw">
              Withdraw
            </NavLink>
            <NavLink
              className="text-decoration-none text-white"
              to="/createaccount"
            >
              Create Account
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
