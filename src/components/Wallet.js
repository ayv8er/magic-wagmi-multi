import { useState, useEffect } from "react";
import { useAccount, useEnsName, useDisconnect } from "wagmi";
import { sepoliaConfig, baseConfig } from "../configs";
import Balance from "./Balance";
import SignMessage from "./SignMessage";
import SendTransaction from "./SendTransaction";
import StatusCircle from "./StatusCircle";
import Divider from "./Divider";

const Wallet = ({ setCurrentConfig }) => {
  const { address, connector: activeConnector, status, chain } = useAccount();
  const [selectedChain, setSelectedChain] = useState("sepolia");
  const { data: ensName } = useEnsName({ address });
  const { disconnect } = useDisconnect();

  useEffect(() => {
    if (selectedChain === "sepolia") {
      console.log(selectedChain);
      setCurrentConfig(sepoliaConfig);
    } else if (selectedChain === "baseSepolia") {
      console.log(selectedChain);
      setCurrentConfig(baseConfig);
    }
  }, [selectedChain, setCurrentConfig]);

  return (
    <div className="wallet-container">
      <div>Connector: {activeConnector?.name}</div>
      <div className="status-container">
        <div>Status:</div> <StatusCircle status={status} />
      </div>
      {chain && <div>Chain: {chain?.name}</div>}
        <select
          value={selectedChain}
          onChange={(e) => setSelectedChain(e.target.value)}
        >
          <option value="sepolia">Sepolia</option>
          <option value="baseSepolia">Base Sepolia</option>
        </select>
      <Divider />
      <div>Connected to {ensName ?? address}</div>
      <Balance address={address} />
      <Divider />
      <SignMessage />
      <Divider />
      <SendTransaction />
      <Divider />
      <button className="disconnect-button" onClick={() => disconnect()}>
        Disconnect
      </button>
    </div>
  );
};

export default Wallet;
