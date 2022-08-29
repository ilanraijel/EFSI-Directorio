import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Outlet } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'

function Layout() {
    return (
        <>
            <Navbar bg="primary" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>Directorio de Personas</Navbar.Brand>
                </LinkContainer>
                <Nav className="me-auto">
                    <LinkContainer to="/home">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/persona">
                        <Nav.Link>Persona</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/estadisticas">
                        <Nav.Link>Estadisticas</Nav.Link>
                    </LinkContainer>

                    <LinkContainer to="/contacto">
                        <Nav.Link>Contacto</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar>
            <Outlet />
        </>
    )
}

export default Layout;