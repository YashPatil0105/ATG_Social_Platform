import React,{useEffect} from 'react';
import { Container, Row, Col, Button, Nav, Dropdown } from 'react-bootstrap';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';

const LoggedInUserScrolledFollow: React.FC<{ userLoggedIn: string }> = ({ userLoggedIn,setUserLoggedIn }) => {
  useEffect(() => {
    // Set userLoggedIn to "True" when this component is rendered
    setUserLoggedIn("True");
  }, [setUserLoggedIn]);
  return (
    <>
      <Header />
      <div className="hero-section" style={{ backgroundImage: 'url(/computer_engineering_bg.png)' }}>
        <div className="hero-content">
          <Container>
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>
          </Container>
        </div>
      </div>
      <Container className="mt-4">
        <Row>
          <Col md={8}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <Nav variant="tabs" defaultActiveKey="all-posts">
                <Nav.Item>
                  <Nav.Link eventKey="all-posts">All Posts(32)</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="article">Article</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="event">Event</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="education">Education</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="job">Job</Nav.Link>
                </Nav.Item>
              </Nav>
              <div className="d-none d-md-flex">
                <Button variant="light" className="mr-2">Write a Post</Button>
                <Button variant="outline-secondary">
                  <i className="bi bi-box-arrow-right mr-2"></i> Leave Group
                </Button>
              </div>
            </div>
            <ArticleCard
              type="✍️ Article"
              title="What if famous brands had regular fonts? Meet RegulaBrands!"
              description="I've worked in UX for the better part of a decade. From now on, I plan to rei..."
              author={{ name: "Sarthak Kamra", image: "/img_rectangle_3.png" }}
              views="1.4k"
              image="/images/img_rectangle_5.png"
            />
            <ArticleCard
              type="🔬️ Education"
              title="Tax Benefits for Investment under National Pension Scheme launched by Government"
              description="I've worked in UX for the better part of a decade. From now on, I plan to rei..."
              author={{ name: "Sarah West", image: "/images/img_rectangle_3_48x48.png" }}
              views="1.4k"
              image="/images/img_rectangle_5_220x692.png"
            />
          </Col>
          <Col md={4}>
            
            <div className="position-relative mb-3">
              <i className="bi bi-geo-alt location-icon"></i>
              <input
                type="text"
                className="form-control location-input"
                placeholder="Enter your location"
                defaultValue="Noida, India"
              />
              <i className="bi bi-pencil position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}></i>
            </div>
            <div className="mb-3">
              <small className="text-muted">
                <i className="bi bi-exclamation-circle mr-2"></i>
                Your location will help us serve better and extend a personalised experience.
              </small>
            </div>
            <div className="mt-4">
              <h5><i className="bi bi-hand-thumbs-up mr-2"></i>Recommended Groups</h5>
              <ul className="list-unstyled">
                <li className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img src="/images/img_rectangle_6_36x36.png" alt="Leisure" className="rounded-circle mr-2" width="36" height="36" />
                    <span>Leisure</span>
                  </div>
                  <Button variant="primary" size="sm">Followed</Button>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img src="/images/img_rectangle_6_1.png" alt="Activism" className="rounded-circle mr-2" width="36" height="36" />
                    <span>Activism</span>
                  </div>
                  <Button variant="light" size="sm">Follow</Button>
                </li>
                <li className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <img src="/images/img_rectangle_6_2.png" alt="MBA" className="rounded-circle mr-2" width="36" height="36" />
                    <span>MBA</span>
                  </div>
                  <Button variant="light" size="sm">Follow</Button>
                </li>
                <li className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center">
                    <img src="/images/img_rectangle_6_3.png" alt="Philosophy" className="rounded-circle mr-2" width="36" height="36" />
                    <span>Philosophy</span>
                  </div>
                  <Button variant="light" size="sm">Follow</Button>
                </li>
              </ul>
              <p className="text-right">
                <a href="#" className="text-primary">See More...</a>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default LoggedInUserScrolledFollow;
