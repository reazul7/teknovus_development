import "./App.css";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";


import Home from "./components/Home/Home";
import Typography from "./components/Typography/Typography";




function App() {
  return (
    <BrowserRouter>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/"><img style={{width: "50px", height: "50px", borderRadius: "10px"}} src="https://media-exp1.licdn.com/dms/image/C560BAQGGBNIPiccqNg/company-logo_200_200/0/1669012653310?e=2147483647&v=beta&t=IFjP9uSweCXecQqtJHSddzLQaFyTXdm8Vj210oNYDGQ" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/typography">Typography</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/typography" element={<Typography />} />
  </Routes>
    </BrowserRouter>
  );
}

export default App;
