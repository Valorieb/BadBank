import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { CreateAccount } from "./components/CreateAccount";
import { Home } from "./components/Home";
import { NavbarMenu } from "./components/NavbarMenu";
import { AllData } from "./components/AllData";
import Deposit from "./components/Deposit.js";
import Withdraw from "./components/Withdraw.js";

function App() {
  const [balance, setBalance] = useState(0);
  const [transactions, setTransactions] = useState([]);
  const [account, setAccount] = useState([]);

  const handleCreateAccount = (formValues) => {
    const newAccount = {
      ...formValues,
    };
    setAccount([...account, newAccount]);
  };

  const updateBalanceDeposit = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { type: "Deposit", amount: amount, date: new Date() },
    ]);
  };

  const updateBalanceWithdraw = (amount) => {
    setBalance((prevBalance) => prevBalance - amount);
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { type: "Withdrawal", amount: amount, date: new Date() },
    ]);
  };

  const handleDepositSubmit = (amount) => {
    if (amount <= 0) {
      return;
    }
    updateBalanceDeposit(amount); // Update the balance in App.js
    alert(
      `Success! You deposited $${amount}. Your balance is now $${
        balance + amount
      }.`
    );
  };

  const handleWithdrawSubmit = (amount) => {
    if (amount >= balance) {
      return;
    }
    updateBalanceWithdraw(amount); // Update the balance in App.js
    alert(
      `Success! You withdrew $${amount}. Your balance is now $${
        balance - amount
      }.`
    );
  };

  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="AllData"
          element={<AllData transactions={transactions} account={account} />}
        />
        <Route
          path="Deposit"
          element={
            <Deposit
              handleDepositSubmit={handleDepositSubmit}
              balance={balance}
              setBalance={setBalance}
            />
          }
        />
        <Route
          path="Withdraw"
          element={
            <Withdraw
              balance={balance}
              setBalance={setBalance}
              handleWithdrawSubmit={handleWithdrawSubmit}
            />
          }
        />
        <Route
          path="CreateAccount"
          element={<CreateAccount handleCreateAccount={handleCreateAccount} />}
        />
      </Routes>
    </>
  );
}

export default App;
