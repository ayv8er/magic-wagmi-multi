import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { sepoliaConfig, baseConfig } from "./configs";
import Dashboard from "./components/Dashboard";

const queryClient = new QueryClient();

function App() {
  const [currentConfig, setCurrentConfig] = useState(sepoliaConfig);

  return (
    <WagmiProvider config={currentConfig}>
      <QueryClientProvider client={queryClient}>
        <Dashboard 
          setCurrentConfig={setCurrentConfig}
          sepoliaConfig={sepoliaConfig}
          baseConfig={baseConfig}
        />
      </QueryClientProvider>
    </WagmiProvider>
  );
}

export default App;