import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Deposit = ({ handleDepositSubmit, balance }) => {
  const [deposit, setDeposit] = useState(""); // Local deposit state
  const [formErrors, setFormErrors] = useState({});
  const [touched, setTouched] = useState(false);

  const validateDeposit = (amount) => {
    if (isNaN(amount) || amount <= 0) {
      return "Deposit amount must be a valid positive number.";
    }
    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateDeposit(deposit);

    if (validationError) {
      setFormErrors({ deposit: validationError });
    } else {
      setFormErrors({});
      handleDepositSubmit(parseFloat(deposit));
    }
  };

  const handleChange = (e) => {
    const amount = Number(e.target.value);
    if (/^\d*\.?\d*$/.test(amount)) {
      setDeposit(amount);
      setFormErrors({});
    } else {
      setFormErrors({
        deposit: "Deposit amount must be a valid positive number",
      });
    }
  };

  const handleBlur = () => {
    // Validate on blur if the input has been touched
    if (touched) {
      const validationError = validateDeposit(deposit);
      if (validationError) {
        setFormErrors({ deposit: validationError });
      }
    }
  };

  const handleFocus = () => {
    setTouched(true);
  };

  return (
    <Card style={{ width: "18rem", margin: "auto" }}>
      <Card.Body>
        <Card.Title>Deposit</Card.Title>
        <Card.Text>Balance:</Card.Text>
        <Card.Text id="total">${balance}</Card.Text>
        <Form onSubmit={handleSubmit}>
          <Card.Text>Deposit Amount:</Card.Text>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            type="text"
            placeholder="Enter an amount"
            value={deposit}
            isInvalid={!!formErrors.deposit}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.deposit}
          </Form.Control.Feedback>
          <br />
          <Button
            disabled={deposit === ""}
            onClick={() => handleDepositSubmit(deposit)} // Pass deposit to parent function
            variant="primary"
          >
            Deposit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Deposit;
