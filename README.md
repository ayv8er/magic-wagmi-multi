# Magic Wagmi Connector Demo

To start, run `yarn install` and then `yarn start`

For full documentation on the connector please [visit here](https://github.com/magiclabs/wagmi-magic-connector).

# Changes from v2 (specifically to support multi chain)

- moves wagmi configs into separate file

- prop drills config state setter (setCurrentConfig) through Dashboard component to Wallet component

- adds chain selecter state and select tag to update state via setCurrentConfig in useEffect

# Changes from v1

- configureChains, mainnet, publicProvider, WagmiConfig, publicClient, webSocketPublicClient, new DedicatedWalletConnector, and pk_live_D34413A845CE453E are now createConfig, WagmiProvider, http, QueryClient, QueryClientProvider, sepolia, dedicatedWalletConnector, and process.env.REACT_APP_MAGIC_API_KEY.

- chains, publicClient, and webSocketPublicClient in config are now chains: [sepolia], transports: {[sepolia.id]: http(process.env.REACT_APP_RPC_URL)}, and autoConnect remains with additional configuration for dedicatedWalletConnector.

- rpcUrl: "https://rpc.ankr.com/eth" and chainId: 1 are now rpcUrl: process.env.REACT_APP_RPC_URL and chainId: 11155111.

- WagmiConfig config={config} and Dashboard are now wrapped in WagmiProvider config={config} and QueryClientProvider client={queryClient}.

- usePrepareSendTransaction, useWaitForTransaction, and a more complex state management for address and amount in SendTransaction are replaced by a simplified use of useSendTransaction and direct state management without debouncing.

- disabled={isLoading || !sendTransaction || !address || !amount} is now disabled={isLoading || !address || !amount}.

- {isLoading ? "Sending..." : "Send"} is now {isLoading ? "Sending..." : "Send Transaction"}.

- Success message display based on isSuccess and transaction hash link to Etherscan is removed, replaced by {hash && Transaction Hash: {hash}}.

- The detailed configuration in useSignMessage including message and onSuccess callback is simplified to direct use without inline configuration. signMessage(); is now signMessage({ message: message });
