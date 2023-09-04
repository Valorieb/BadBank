import { Routes, Route } from "react-router-dom";
import { CreateAccount } from "./components/CreateAccount";
import { Home } from "./components/Home";
import { NavbarMenu } from "./components/NavbarMenu";
import { AllData } from "./components/AllData";
import { Deposit } from "./components/Deposit";
import { Withdraw } from "./components/Withdraw";

function App() {
  return (
    <>
      <NavbarMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="AllData" element={<AllData />} />
        <Route path="Deposit" element={<Deposit />} />
        <Route path="Withdraw" element={<Withdraw />} />
        <Route path="CreateAccount" element={<CreateAccount />} />
      </Routes>
    </>
  );
}

export default App;
