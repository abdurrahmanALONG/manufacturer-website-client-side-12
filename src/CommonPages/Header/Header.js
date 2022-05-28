import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Logo from '../../images/logo.jpg'

const Header = () => {
    const [user] = useAuthState(auth);
    const handelSignOut = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <Navbar.Brand href="Home"><span><img height={30} src={Logo} alt="" /> TOOLS</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="showAllItems">All-Items</Nav.Link>
                            <Nav.Link as={Link} to="services">Services</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link}  to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link}  to="myPortfolio">My Portfolio</Nav.Link>
                            <Nav.Link as={Link}  to="Dashboard">Dashboard</Nav.Link>
                            
                            {
                                user && <>
                                     <Navbar.Brand><span>{user.displayName}</span></Navbar.Brand>
                                </>
                            }
                            {
                                user ?
                                <button onClick={handelSignOut}> Sign Out </button>
                                :<Nav.Link as={Link}  to="login">Login</Nav.Link>
                            }
                            
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;