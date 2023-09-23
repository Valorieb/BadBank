import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Withdraw = ({ handleWithdrawSubmit, balance }) => {
  const [withdraw, setWithdraw] = useState(""); // Local withdraw state
  const [touched, setTouched] = useState(false);
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const amount = Number(e.target.value);
    if (/^\d*\.?\d*$/.test(amount)) {
      setWithdraw(amount);
      setFormErrors({});
    } else {
      setFormErrors({
        withdraw: "Withdraw amount must be a valid number",
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateWithdraw(withdraw);

    if (validationError) {
      setFormErrors({ withdraw: validationError });
    } else {
      setFormErrors({});
      handleWithdrawSubmit(parseFloat(withdraw));
    }
  };

  const validateWithdraw = (amount) => {
    if (isNaN(amount)) {
      return "Withdrawal amount must be a valid number.";
    } else if (amount > balance) {
      return "Withdrawal amount cannot be greater than account balance";
    }
    return null;
  };

  const handleBlur = () => {
    // Validate on blur if the input has been touched
    if (touched) {
      const validationError = validateWithdraw(withdraw);
      if (validationError) {
        setFormErrors({ withdraw: validationError });
      }
    }
  };

  const handleFocus = () => {
    setTouched(true);
  };

  return (
    <Card style={{ width: "18rem", margin: "auto" }}>
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        <Card.Text>Balance:</Card.Text>
        <Card.Text id="total">${balance}</Card.Text>
        <Form onSubmit={handleSubmit}>
          <Card.Text>Withdraw Amount:</Card.Text>
          <Form.Control
            onChange={handleChange}
            onBlur={handleBlur}
            onFocus={handleFocus}
            type="text"
            placeholder="Enter an amount"
            value={withdraw}
            isInvalid={!!formErrors.withdraw}
          />
          <Form.Control.Feedback type="invalid">
            {formErrors.withdraw}
          </Form.Control.Feedback>
          <br />
          <Button
            disabled={withdraw === ""}
            onClick={() => handleWithdrawSubmit(withdraw)} // Pass withdraw to parent function
            variant="primary"
          >
            Withdraw
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Withdraw;
