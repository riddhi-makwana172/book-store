import React from "react";
import { Container, Card, Button, Row, Col } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import Avatar from "../assets/images/img_avatar.png";

const AuthorProfile = (props) => {
  let history = useHistory();
  const { data } = props.location.state;

  return (
    <Container className="py-3">
      <Card.Title>Book Details</Card.Title>
      <hr />

      <Card>
        <Card.Body>
          <Card.Title>Author Profile</Card.Title>
          <Row className="py-3">
            <Col xs={1}>
              <img src={Avatar} alt="Avatar" className="avatar-img" />
            </Col>
            <Col className="pt-4">
              <Card.Subtitle>John Deo</Card.Subtitle>
            </Col>
          </Row>
          <Card.Title>Title</Card.Title>
          <Card.Text>{data.title}</Card.Text>
          <Card.Title>Description</Card.Title>
          <Card.Text>{data.subtitle}</Card.Text>
          <Card.Title>Price</Card.Title>
          <Card.Text>{data.price}</Card.Text>
          <Card.Title>Image</Card.Title>
          <Card.Text>
            <img src={data.image} alt="book" />
          </Card.Text>
          <Button onClick={() => history.push("/")}>Go Back</Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AuthorProfile;
