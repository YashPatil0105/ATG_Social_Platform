import React,{useEffect} from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup } from 'react-bootstrap';
import Header from '../components/Header';

const Home:React.FC<{ userLoggedIn: string }> = ({ userLoggedIn,setUserLoggedIn }) =>{
  useEffect(() => {
    // Set userLoggedIn to "True" when this component is rendered
    setUserLoggedIn("False");
  }, [setUserLoggedIn]);
  return (
    <>
      <Header userLoggedIn={userLoggedIn}/>
      <Container className="mt-5">
        <Row className="justify-content-md-center">
          <Col md={8}>
            <h1 className="mb-4">Welcome to ATG.WORLD</h1>
            <ListGroup>
              <ListGroup.Item action as={Link} to="/not-logged-in">
                Not Logged In Desktop View
              </ListGroup.Item>
              <ListGroup.Item action as={Link} to="/logged-in-location">
                Logged In User (Scrolled Location)
              </ListGroup.Item>
              <ListGroup.Item action as={Link} to="/logged-in-follow">
                Logged In User (Scrolled Follow)
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;

