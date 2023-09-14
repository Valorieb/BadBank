import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Tooltip, OverlayTrigger } from "react-bootstrap";

const tooltipHome = <Tooltip id="tooltipHome">Home Page</Tooltip>;
const tooltipDeposit = <Tooltip id="tooltipHome">Deposit money</Tooltip>;
const tooltipWithdraw = <Tooltip id="tooltipHome">Withdraw money</Tooltip>;
const tooltipCreateAccount = (
  <Tooltip id="tooltipHome">Create new account</Tooltip>
);
const tooltipAllData = <Tooltip id="tooltipHome">View all data</Tooltip>;

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
            <OverlayTrigger placement="bottom" overlay={tooltipHome}>
              <NavLink className="text-decoration-none text-white" to="/">
                Home
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipAllData}>
              <NavLink
                className="text-decoration-none text-white"
                to="/alldata"
              >
                All Data
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipDeposit}>
              <NavLink
                className="text-decoration-none text-white"
                to="/deposit"
              >
                Deposit
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipWithdraw}>
              <NavLink
                className="text-decoration-none text-white"
                to="/withdraw"
              >
                Withdraw
              </NavLink>
            </OverlayTrigger>
            <OverlayTrigger placement="bottom" overlay={tooltipCreateAccount}>
              <NavLink
                className="text-decoration-none text-white"
                to="/createaccount"
              >
                Create Account
              </NavLink>
            </OverlayTrigger>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
