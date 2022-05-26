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
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown> */}
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link}  to="blogs">Blogs</Nav.Link>
                            <Nav.Link as={Link}  to="myPortfolio">My Portfolio</Nav.Link>
                            <NavDropdown title="Dashboard" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="MyOrders">My Orders</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="AddAReview">Add A Review</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="MyProfile">My Profile</NavDropdown.Item>
                            </NavDropdown>
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