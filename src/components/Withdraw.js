import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

export const Withdraw = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>Withdraw</Card.Title>
        <Card.Text>Current Amount:</Card.Text>
        <Card.Text>$,1000</Card.Text>
        <Card.Text>Withdraw Amount:</Card.Text>
        <Form.Control type="text" placeholder="Normal text" />
        <br />
        <Button variant="primary">Withdraw</Button>
      </Card.Body>
    </Card>
  );
};
