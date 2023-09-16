import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Deposit = ({ handleDepositSubmit, balance }) => {
  const [deposit, setDeposit] = useState(0); // Local deposit state

  const handleChange = (e) => {
    const amount = Number(e.target.value);
    if (amount > 0) {
      setDeposit(amount); // Update local deposit state
    } else {
      setDeposit(0); // Ensure deposit is non-negative
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Deposit</Card.Title>
        <Card.Text>Balance:</Card.Text>
        <Card.Text id="total">${balance}</Card.Text>
        <Card.Text>Deposit Amount:</Card.Text>
        <Form.Control
          onChange={handleChange}
          type="text"
          placeholder="Enter an amount"
          value={deposit}
        />
        <br />
        <Button
          disabled={deposit <= 0}
          onClick={() => handleDepositSubmit(deposit)} // Pass deposit to parent function
          variant="primary"
        >
          Deposit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Deposit;
