import Card from "react-bootstrap/Card";

export const AllData = ({ transactions, account }) => {
  return (
    <Card style={{ width: "33rem", margin: "auto" }}>
      <div>
        <h1>All Data</h1>
        <h2>Transactions: </h2>
        <ul>
          {transactions.map((transaction, index) => (
            <p>
              <li key={index} style={{ padding: "5px" }}>
                {transaction.type === "Deposit" ? (
                  <>
                    <span style={{ fontWeight: "bold" }}>Deposit:</span> $
                    {transaction.amount}
                  </>
                ) : (
                  <>
                    <span style={{ fontWeight: "bold" }}>Withdrawal:</span> $
                    {transaction.amount}
                  </>
                )}
                {" on "}
                {transaction.date.toLocaleString()}
              </li>
            </p>
          ))}
        </ul>

        <h2>User Data:</h2>
        <ul>
          {account.map((user, index) => (
            <p>
              <li key={index}>
                Name: {user.firstName} {user.lastName}, Email: {user.email},
                Password: {user.password}
              </li>
            </p>
          ))}
        </ul>
      </div>
    </Card>
  );
};
