import { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const Deposit = () => {
  const [deposit, setDeposit] = useState(0);
  const [totalState, setTotalState] = useState(0);
  const [validTransaction, setValidTransaction] = useState(false);

  const handleChange = (e) => {
    console.log(Number(e.target.value));
    if (Number(e.target.value) <= 0) {
      return setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setDeposit(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    let newTotal = totalState + deposit;
    setTotalState(newTotal);
    alert(`Nice! You deposited $${deposit}. You now have $${newTotal} total.`);
    e.preventDefault();
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Deposit</Card.Title>
        <Card.Text>Balance:</Card.Text>
        <Card.Text id="total">${totalState}</Card.Text>
        <Card.Text>Deposit Amount:</Card.Text>
        <Form.Control
          onChange={handleChange}
          type="text"
          placeholder="Enter an amount"
        />
        <br />
        <Button
          isValid={validTransaction}
          onClick={handleSubmit}
          variant="primary"
        >
          Deposit
        </Button>
      </Card.Body>
    </Card>
  );
};
