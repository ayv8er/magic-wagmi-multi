import { useAccount } from "wagmi";
import SignIn from "./SignIn";
import Wallet from "./Wallet";

const Dashboard = ({ setCurrentConfig }) => {
  const { isConnected } = useAccount();

  return (
    <div className="App">
      <h1>
        Magic <span className="normal-weight">+</span> Wagmi
      </h1>
      {!isConnected ? <SignIn /> : <Wallet setCurrentConfig={setCurrentConfig} />}
    </div>
  );
};

export default Dashboard;
