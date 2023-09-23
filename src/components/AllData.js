import Card from "react-bootstrap/Card";

export const AllData = ({ transactions }) => {
  return (
    <Card style={{ width: "18rem", margin: "auto" }}>
      <div>
        <h1>All Data</h1>
        <ul>
          {transactions.map((transaction, index) => (
            <li key={index}>
              {transaction.type === "Deposit"
                ? `Deposit: $${transaction.amount}`
                : `Withdrawal: $${transaction.amount}`}
              {" on "}
              {transaction.date.toLocaleString()}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
};
