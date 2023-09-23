import { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const CreateAccount = ({ handleCreateAccount }) => {
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [isAccountCreated, setIsAccountCreated] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormErrors({ ...formErrors, [name]: "" });

    console.log(formValues);
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    const errors = validate({ ...formValues, [name]: e.target.value });
    setFormErrors(errors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
    const errors = validate(formValues);
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setIsAccountCreated(true);
    }
    handleCreateAccount(formValues);
    setFormValues(initialValues);
  };

  const handleCreateAnotherAccount = () => {
    setIsAccountCreated(false);
    setIsSubmit(false);
    setFormErrors({});
    setIsFormValid(false);
  };

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
    } else if (values.password.length > 20) {
      errors.password = "Password must be less than twenty characters";
    }
    const isValid = Object.keys(errors).length === 0;
    setIsFormValid(isValid);
    return errors;
  };

  useEffect(() => {
    if (isSubmit) {
      const errors = validate(formValues);
      setFormErrors(errors);
      setIsFormValid(Object.keys(errors).length === 0);
    }
  }, [formValues, isSubmit]);

  return (
    <Card style={{ width: "18rem", margin: "auto" }}>
      <Card.Body>
        {!isAccountCreated ? (
          <>
            <Card.Title>Create Account</Card.Title>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <div className="field">
                    <Form.Control
                      placeholder="First name"
                      type="text"
                      name="firstName"
                      value={formValues.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <p className="errorMsg">{formErrors.firstName}</p>
                </Col>
                <Col>
                  <Form.Control
                    placeholder="Last name"
                    type="text"
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleChange}
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
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
                    onBlur={handleBlur}
                  />
                </div>
                <p className="errorMsg">{formErrors.password}</p>
              </Form.Group>

              <br />
              <Button
                onClick={handleSubmit}
                variant="primary"
                disabled={!isFormValid}
              >
                Create Account
              </Button>
            </Form>
          </>
        ) : (
          <div>
            <div className="uiSuccessMsg">Account Created!</div>
            <Button onClick={handleCreateAnotherAccount} variant="primary">
              Create Another Account
            </Button>
          </div>
        )}
      </Card.Body>
    </Card>
  );
};
