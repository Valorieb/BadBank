import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Deposit = ({ handleDepositSubmit, balance }) => {
  const [deposit, setDeposit] = useState(); // Local deposit state
  const [formErrors, setFormErrors] = useState({});

  const validateDeposit = (amount) => {
    if (amount <= 0) {
      return "Deposit amount must be greater than 0";
    }
    if (isNaN(amount)) {
      return "Deposit amount must be a number";
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
      handleDepositSubmit(deposit);
    }
  };

  const handleChange = (e) => {
    const amount = Number(e.target.value);
    setDeposit(amount);
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
            type="text"
            placeholder="Enter an amount"
            value={deposit}
            isInvalid={!!formErrors.deposit}
          />
          <p className="errorMsg"></p>
          <br />
          <Button
            disabled={deposit <= 0}
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
