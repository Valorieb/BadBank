import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
export const Home = () => {
  return (
    <div>
      <h1>Bad Bank</h1>
      <Card
        style={{
          background:
            "linear-gradient(to right, rgba(102, 126, 234, 0.5), rgba(118, 75, 162, 0.5))",
          width: "40rem",
          padding: "10px",
          margin: "auto",
        }}
      >
        <Card.Img variant="top" src="/images/bank_heist.jpg" />
        <Card.Body>
          <Card.Title>Welcome to Bad Bank!</Card.Title>
          <Card.Text>
            A really bad bank. We practically invite robbers to steal from you.
            What? Not a fan of a good heist?
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
