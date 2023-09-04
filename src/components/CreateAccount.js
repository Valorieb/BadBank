import { useState } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const CreateAccount = () => {
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Create Account</Card.Title>
        <Form>
          <Form.Group className="mb-3" controlId="controlName">
            <div className="field">
              <Form.Label>Enter email</Form.Label>

              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="controlPassword">
            <div className="field">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
          </Form.Group>

          <Row>
            <Col>
              <div className="field">
                <Form.Control
                  placeholder="First name"
                  type="first-name"
                  name="firstName"
                  value={formValues.firstName}
                  onChange={handleChange}
                />
              </div>
            </Col>
            <Col>
              <Form.Control
                placeholder="Last name"
                type="last-name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
              />
            </Col>
          </Row>
        </Form>
        <br />
        <Button variant="primary">Create Account</Button>
      </Card.Body>
    </Card>
  );
};
