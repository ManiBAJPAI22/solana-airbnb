import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-wallets";
import { useMemo } from "react";
const connection = "https://ultra-dimensional-sanctuary.solana-devnet.discover.quiknode.pro/0e8515220282c2deaee14f42c61f877b3203e592/"

const WalletConnectionProvider = ({children}) => {
    const endpoint = useMemo(()=> connection , [])

    const wallets = useMemo(()=> [new PhantomWalletAdapter()], [])

    return(
        <ConnectionProvider endpoint= { endpoint}>
            <WalletProvider wallets = { wallets} autoConnect>
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>

    )
}

export default WalletConnectionProvider
