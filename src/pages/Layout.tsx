import { Outlet, useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Fragment } from 'react/jsx-runtime';
import { Link } from 'react-router-dom';

export const Layout = () => {
    let location = useLocation();
    let { pathname } = location
    return (
        <Fragment>
            <Navbar expand="lg" variant="light" className="bg-body-tertiary">
                <Container>
                    <Nav className="me-auto">
                        {pathname === "/" ? <Link to="list">List</Link> :
                            <Link to="/">Back</Link>
                        }
                    </Nav>
                </Container>
            </Navbar>
            <Container fluid="lg"><Outlet /></Container>
        </Fragment>
    )
}