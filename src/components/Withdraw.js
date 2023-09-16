import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const Withdraw = ({ handleWithdrawSubmit, balance }) => {
  const [withdraw, setWithdraw] = useState(0); // Local withdraw state

  const handleChange = (e) => {
    const amount = Number(e.target.value);
    if (amount > 0) {
      setWithdraw(amount); // Update local deposit state
    } else {
      setWithdraw(0); // Ensure deposit is non-negative
    }
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        <Card.Text>Balance:</Card.Text>
        <Card.Text id="total">${balance}</Card.Text>
        <Card.Text>Withdraw Amount:</Card.Text>
        <Form.Control
          onChange={handleChange}
          type="text"
          placeholder="Enter an amount"
          value={withdraw}
        />
        <br />
        <Button
          disabled={withdraw <= 0}
          onClick={() => handleWithdrawSubmit(withdraw)} // Pass deposit to parent function
          variant="primary"
        >
          Withdraw
        </Button>
      </Card.Body>
    </Card>
  );
};

export default Withdraw;
