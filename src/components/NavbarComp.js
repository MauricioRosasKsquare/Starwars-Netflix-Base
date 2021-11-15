import { Container, Nav, Form, FormControl } from "react-bootstrap"
import Navbar from 'react-bootstrap/Navbar'


function NavbarComp( {logo}) {
    return (
        <Navbar bg="dark" expand="sm" sticky="top" >
            <Container fluid>
                <Navbar.Brand href="/"><img src={ logo } alt="Star Wars Logo" className="mx-auto" id="brandLogo"/></Navbar.Brand>
                    
                <Navbar.Collapse>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp
