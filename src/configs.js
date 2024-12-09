import { dedicatedWalletConnector } from "@magiclabs/wagmi-connector";
import { sepolia, baseSepolia } from '@wagmi/core/chains'
import { createConfig } from "wagmi";
import { http } from "viem";

export const baseConfig = createConfig({
    chains: [baseSepolia],
    transports: {
      [baseSepolia.id]: http(process.env.REACT_APP_BASE_SEPOLIA_RPC_URL)
    },
    autoConnect: true,
    connectors: [
      dedicatedWalletConnector({
        chains: [baseSepolia],
        options: {
          apiKey: process.env.REACT_APP_MAGIC_API_KEY,
          isDarkMode: true,
          oauthOptions: {
            providers: ["google", "twitter", "github"],
          },
          magicSdkConfiguration: {
            network: {
              rpcUrl: process.env.REACT_APP_BASE_SEPOLIA_RPC_URL,
              chainId: 84532125,
            },
          },
        },
      }),
    ],
  });
  
  export const sepoliaConfig = createConfig({
    chains: [sepolia],
    transports: {
      [sepolia.id]: http(process.env.REACT_APP_SEPOLIA_RPC_URL)
    },
    autoConnect: true,
    connectors: [
      dedicatedWalletConnector({
        chains: [sepolia],
        options: {
          apiKey: process.env.REACT_APP_MAGIC_API_KEY,
          isDarkMode: true,
          oauthOptions: {
            providers: ["google", "twitter", "github"],
          },
          magicSdkConfiguration: {
            network: {
              rpcUrl: process.env.REACT_APP_SEPOLIA_RPC_URL,
              chainId: 11155111,
            },
          },
        },
      }),
    ],
  });