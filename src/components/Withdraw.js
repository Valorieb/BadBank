import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const Withdraw = () => {
  const [withdrawal, setWithdrawal] = useState(0);
  const [totalState, setTotalState] = useState(100);
  const [validTransaction, setValidTransaction] = useState(false);

  const handleChange = (e) => {
    if (Number(e.target.value) > totalState) {
      return setValidTransaction(false);
    } else {
      setValidTransaction(true);
    }
    setWithdrawal(Number(e.target.value));
  };

  const handleSubmit = (e) => {
    let newTotal = totalState - withdrawal;
    setTotalState(newTotal);
    alert(
      `Nice! You withdrew $${withdrawal}. You have $${newTotal} remaining.`
    );
    e.preventDefault();
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        <Card.Text>Balance:</Card.Text>
        <Card.Text>${totalState}</Card.Text>
        <Card.Text>Withdraw Amount:</Card.Text>
        <Form.Control
          type="text"
          placeholder="Normal text"
          onChange={handleChange}
          isValid={validTransaction}
        />
        <br />
        <Button onClick={handleSubmit} variant="primary">
          Withdraw
        </Button>
      </Card.Body>
    </Card>
  );
};
