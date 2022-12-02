import '../Styles/Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavBar = () => {
    return (
        <div className="Navbar">
            <Navbar collapseOnSelect expand="sm">
            <Container>
                <Navbar.Brand href="/home" className="link-dark">Club Sportiv Municipal-Suceava</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link href="/home" className="link-dark">Acasa</Nav.Link>
                    <Nav.Link href="info" className="link-dark">Despre</Nav.Link>
                    <Nav.Link href="matches" className="link-dark">Meciuri</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
        );
}

export default NavBar;