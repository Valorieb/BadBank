import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const Deposit = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Deposit</Card.Title>
        <Card.Text>Current Amount:</Card.Text>
        <Card.Text>$,1000</Card.Text>
        <Card.Text>Deposit Amount:</Card.Text>
        <Form.Control type="text" placeholder="Normal text" />
        <br />
        <Button variant="primary">Deposit</Button>
      </Card.Body>
    </Card>
  );
};
