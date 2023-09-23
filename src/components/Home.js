import { Card } from "react-bootstrap";
export const Home = () => {
  return (
    <div>
      <h1>Bad Bank</h1>
      <Card
        style={{
          background: "linear-gradient(to right, gray, black)",
          width: "40rem",
          padding: "10px",
          margin: "auto",
          color: "white",
        }}
      >
        <Card.Img variant="top" src="/images/bank_heist.jpg" alt="bank heist" />
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
