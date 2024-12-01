import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function Topbar() {
    let navigate = useNavigate();
  return (
    <Navbar expand="lg" className="bg-warning">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate("/")}>
              <h5>
                <b>Dashboard</b>
              </h5>
            </Nav.Link>
            
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <h5><b>EMPLOYEE DATA    :</b></h5>
             
            </Navbar.Text>
          </Navbar.Collapse>

          <Nav.Link onClick={() => navigate("/create")}>
              <h5>
              <Button variant="success">Create</Button>
              </h5>
            </Nav.Link>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;