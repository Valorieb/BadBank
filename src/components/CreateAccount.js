import { useState, useEffect } from "react";

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
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "Please enter your first name";
    }
    if (!values.lastName) {
      errors.lastName = "Please enter your last name";
    }
    if (!values.email) {
      errors.email = "Please enter your email";
    } else if (!regex.test(values.email)) {
      errors.email = "email not valid";
    }
    if (!values.password) {
      errors.password = "Please enter your password";
    } else if (values.password.length < 8) {
      errors.password = "Password must be at least eight characters";
    } else if (values.password.length > 15) {
      errors.password = "Password must be less than fifteen characters";
    }
    return errors;
  };

  return (
    <Card style={{ width: "18rem", margin: "auto" }}>
      <Card.Body>
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="uiSuccessMsg">Account Created!</div>
        ) : (
          ""
        )}
        <Card.Title>Create Account</Card.Title>
        <Form onSubmit={handleSubmit}>
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
              <p className="errorMsg">{formErrors.firstName}</p>
            </Col>
            <Col>
              <Form.Control
                placeholder="Last name"
                type="last-name"
                name="lastName"
                value={formValues.lastName}
                onChange={handleChange}
              />
              <p className="errorMsg">{formErrors.lastName}</p>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="controlName">
            <div className="field">
              <Form.Label>Email</Form.Label>

              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="errorMsg">{formErrors.email}</p>
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
            <p className="errorMsg">{formErrors.password}</p>
          </Form.Group>

          <br />
          <Button onClick={handleSubmit} variant="primary">
            Create Account
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

//NOTES:
//   <pre> element is displayed and formatted exactly as written.
//    JSON.stringify converts JavaScript value to JSON string.
//    This line is similar to using console.log() to test the code.
