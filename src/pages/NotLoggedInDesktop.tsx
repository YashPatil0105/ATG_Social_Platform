import React,{useEffect} from 'react';
import { Container, Row, Col, Button, Nav } from 'react-bootstrap';
import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';

interface NotLoggedInDesktopProps {
  userLoggedIn: string;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<string>>;
}

const NotLoggedInDesktop: React.FC<NotLoggedInDesktopProps> = ({ userLoggedIn, setUserLoggedIn }) => {

  useEffect(() => {
    // Set userLoggedIn to "True" when this component is rendered
    setUserLoggedIn("False");
  }, [setUserLoggedIn]);
  // Reusable Tab Links
  const tabLinks = [
    { key: 'all-posts', label: 'All Posts(32)' },
    { key: 'article', label: 'Article' },
    { key: 'event', label: 'Event' },
    { key: 'education', label: 'Education' },
    { key: 'job', label: 'Job' },
  ];

  // Article Data
  const articles = [
    {
      type: '✍️ Article',
      title: 'What if famous brands had regular fonts? Meet RegulaBrands!',
      description: "I've worked in UX for the better part of a decade. From now on, I plan to rei...",
      author: { name: 'Sarthak Kamra', image: '/img_rectangle_3.png' },
      views: '1.4k',
    },
    {
      type: '🔬️ Education',
      title: 'Tax Benefits for Investment under National Pension Scheme launched by Government',
      description: "I've worked in UX for the better part of a decade. From now on, I plan to rei...",
      author: { name: 'Sarah West', image: '/images/img_rectangle_3_48x48.png' },
      views: '1.4k',
      image: '/images/img_rectangle_5_220x692.png',
    },
    {
      type: '🗓️ Meetup',
      title: 'Finance & Investment Elite Social Mixer @Lujiazui',
      description: "I've worked in UX for the better part of a decade. From now on, I plan to rei...",
      author: { name: 'Ronal Jones', image: '/images/img_rectangle_3_1.png' },
      views: '1.4k',
      image: '/images/img_rectangle_5_1.png',
    },
  ];

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
          {/* Main Content */}
          <Col md={8}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              {/* Tab Navigation */}
              <Nav variant="tabs" defaultActiveKey="all-posts">
                {tabLinks.map((tab) => (
                  <Nav.Item key={tab.key}>
                    <Nav.Link eventKey={tab.key}>{tab.label}</Nav.Link>
                  </Nav.Item>
                ))}
              </Nav>
              <div className="d-none d-md-flex">
                <Button variant="light" className="mr-2">Write a Post</Button>
                <Button variant="primary">
                  <i className="bi bi-people-fill mr-2"></i> Join Group
                </Button>
              </div>
            </div>
            {/* Articles Section */}
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                type={article.type}
                title={article.title}
                description={article.description}
                author={article.author}
                views={article.views}
                image={article.image}
              />
            ))}
          </Col>

          {/* Sidebar */}
          <Col md={4}>
            <div className="position-relative mb-3">
              <i className="bi bi-geo-alt location-icon"></i>
              <input
                type="text"
                className="form-control location-input"
                placeholder="Enter your location"
                defaultValue="Noida, India"
              />
              <i
                className="bi bi-pencil position-absolute"
                style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}
              ></i>
            </div>
            <div className="mb-3">
              <small className="text-muted">
                <i className="bi bi-exclamation-circle mr-2"></i>
                Your location will help us serve better and extend a personalised experience.
              </small>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default NotLoggedInDesktop;
