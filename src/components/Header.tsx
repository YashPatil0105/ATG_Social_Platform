import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button, Modal, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';

const Header: React.FC<{ userLoggedIn: string }> = ({ userLoggedIn }) => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <Navbar bg="white" expand="lg" className="py-3 shadow-sm">
        <div className="container">
          <Navbar.Brand as={Link} to="/">
            <img src="/whole.png" alt="ATG World" height="24" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Form inline className="mx-auto d-flex">
              <div className="position-relative w-100">
                <FormControl type="text" placeholder="Search for your favorite groups in ATG" className="pl-5 rounded-pill" style={{width: '360px'}} />
                <i className="bi bi-search position-absolute" style={{left: '15px', top: '10px'}}></i>
              </div>
            </Form>
            <Nav>
              {userLoggedIn === "False" ? (
                <Nav.Link href="#" onClick={() => setShowSignUp(true)}>
                  Create account. <span className="text-primary-emphasis font-weight-bold">It's free!</span>
                </Nav.Link>
              ) : (
                <div className="d-flex align-items-center justify-content-end mb-4">
                  <img
                    src="/images/img_rectangle_3_2.png"
                    alt="User"
                    className="rounded-circle"
                    width="48"
                    height="48"
                    style={{ marginRight: '10px' }}
                  />
                  <Dropdown>
                    <Dropdown.Toggle variant="link" id="dropdown-basic" className="text-dark">
                      Siddharth Goyal
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#profile">Profile</Dropdown.Item>
                      <Dropdown.Item href="#settings">Settings</Dropdown.Item>
                      <Dropdown.Item href="#logout">Logout</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

      {/* Sign In Modal */}
      <Modal show={showSignIn} onHide={() => setShowSignIn(false)} size="lg" centered>
        <Modal.Body className="p-0">
          <div className="bg-green-600 p-3">
            <p className="text-green-600 text-sm m-0">
              Let's learn, share & inspire each other with our passion for computer engineering. Sign up now ✌️
            </p>
          </div>
          
          <div className="d-flex justify-content-between align-items-start p-4">
            <h3 className="font-weight-bold">Sign In</h3>
            <p className="text-sm">
              Don't have an account yet?{' '}
              <a href="#" className="text-primary font-weight-bold" onClick={(e) => {
                e.preventDefault();
                setShowSignIn(false);
                setShowSignUp(true);
              }}>
                Create new for free!
              </a>
            </p>
          </div>

          <div className="d-flex p-4 pt-0">
            <div className="flex-grow-1 pr-4">
              <Form>
                <div className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="p-3 border rounded"
                  />
                </div>
                <div className="mb-3 position-relative">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="p-3 border rounded"
                  />
                  <Eye className="position-absolute" style={{ right: '12px', top: '12px', color: '#8A8A8A' }} />
                </div>
                <Button variant="primary" type="submit" className="w-100 rounded-pill py-2 mb-3">
                  Sign In
                </Button>
                <Button variant="outline-secondary" className="w-100 mb-2 d-flex align-items-center justify-content-center">
                  <img src="/facebook-icon.png" alt="Facebook" className="mr-2" height="20" />
                  Sign in with Facebook
                </Button>
                <Button variant="outline-secondary" className="w-100 d-flex align-items-center justify-content-center">
                  <img src="/google-icon.png" alt="Google" className="mr-2" height="20" />
                  Sign in with Google
                </Button>
              </Form>
            </div>
            <div className="flex-grow-1">
              <img src="/Group 3.png" alt="Social illustration" className="w-100" />
            </div>
          </div>
        </Modal.Body>
      </Modal>

      {/* Sign Up Modal */}
      <Modal show={showSignUp} onHide={() => setShowSignUp(false)} size="lg" centered>
        <Modal.Body className="p-0">
          <div className="bg-green-50 p-3">
            <p className="text-green-600 text-sm m-0">
              Let's learn, share & inspire each other with our passion for computer engineering. Sign up now ✌️
            </p>
          </div>
          
          <div className="d-flex justify-content-between align-items-start p-4">
            <h3 className="font-weight-bold">Create Account</h3>
            <p className="text-sm">
              Already have an account?{' '}
              <a href="#" className="text-primary font-weight-bold" onClick={(e) => {
                e.preventDefault();
                setShowSignUp(false);
                setShowSignIn(true);
              }}>
                Sign In
              </a>
            </p>
          </div>

          <div className="d-flex p-4 pt-0">
            <div className="flex-grow-1 pr-4">
              <Form>
                <div className="d-flex mb-3">
                  <Form.Control
                    type="text"
                    placeholder="First Name"
                    className="p-3 border rounded mr-2"
                  />
                  <Form.Control
                    type="text"
                    placeholder="Last Name"
                    className="p-3 border rounded"
                  />
                </div>
                <div className="mb-3">
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    className="p-3 border rounded"
                  />
                </div>
                <div className="mb-3 position-relative">
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    className="p-3 border rounded"
                  />
                  <Eye className="position-absolute" style={{ right: '12px', top: '12px', color: '#8A8A8A' }} />
                </div>
                <div className="mb-3 position-relative">
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                    className="p-3 border rounded"
                  />
                  <Eye className="position-absolute" style={{ right: '12px', top: '12px', color: '#8A8A8A' }} />
                </div>
                <Button variant="primary" type="submit" className="w-100 rounded-pill py-2 mb-3">
                  Create Account
                </Button>
                <Button variant="outline-secondary" className="w-100 mb-2 d-flex align-items-center justify-content-center">
                  <img src="/facebook-icon.png" alt="Facebook" className="mr-2" height="20" />
                  Sign up with Facebook
                </Button>
                <Button variant="outline-secondary" className="w-100 d-flex align-items-center justify-content-center">
                  <img src="/google-icon.png" alt="Google" className="mr-2" height="20" />
                  Sign up with Google
                </Button>
              </Form>
              <p className="text-muted text-center mt-3 small">
                By signing up, you agree to our Terms & conditions, Privacy policy
              </p>
            </div>
            <div className="flex-grow-1">
              <img src="/Group 3.png" alt="Social illustration" className="w-100" />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Header;