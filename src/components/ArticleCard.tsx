import React from 'react';
import { Card, Button, Dropdown } from 'react-bootstrap';

interface ArticleCardProps {
  type: string;
  title: string;
  description: string;
  author: {
    name: string;
    image: string;
  };
  views: string;
  image?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ type, title, description, author, views, image }) => {
  return (
    <Card className="mb-3">
      {image && <Card.Img variant="top" src={image} />}
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <small>{type}</small>
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              <i className="bi bi-three-dots"></i>
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Report</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Option 3</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img src={author.image} alt={author.name} className="rounded-circle mr-2" width="40" height="40" />
            <div>
              <strong>{author.name}</strong>
              <div><small className="text-muted">{views} views</small></div>
            </div>
          </div>
          <Button variant="light" size="sm">
            <i className="bi bi-share mr-2"></i> Share
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default ArticleCard;

