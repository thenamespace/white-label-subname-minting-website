import "@rainbow-me/rainbowkit/styles.css";

import { getDefaultConfig, lightTheme, RainbowKitProvider, Theme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, base } from "viem/chains";
import { PropsWithChildren } from "react";
import { merge } from "lodash";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";


const myTheme = merge(lightTheme(), {
  colors: {
    accentColor: "#65fdfd",
    profileActionHover: "red",
    profileAction: "grey",
    modalBackground: "rgba(0, 0, 0, 0.8)",
    modalBorder: "#1FE5B5",
    modalText: "white",
    modalTextSecondary: "grey",
  },
} as Theme);

const config = getDefaultConfig({
  appName: "Nektar",
  projectId: "fabc875b8041989e6261604d826f1a8e",
  chains: [mainnet, base],
});

const queryClient = new QueryClient();
export const WalletConnector = ({ children }: PropsWithChildren) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={myTheme}>{children}</RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
