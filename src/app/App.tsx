import './App.css';
import { useMemo } from 'react';

import Home from '../components/home/Home';
import NavBar from '../components/navbar/NavBar';
import About from '../components/about/About';
import Carousel from '../components/carousel/Carousel';
import Utility from "../components/utility/Utility";
import RoadMap from '../components/roadmap/Roadmap';
import Footer from "../components/footer/Footer";

import * as anchor from '@project-serum/anchor';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSolflareWallet,
  getSolletWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';

import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { ConfettiProvider } from '../components/confetti';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

const candyMachineId = process.env.REACT_APP_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_CANDY_MACHINE_ID)
  : undefined;

const fairLaunchId = process.env.REACT_APP_FAIR_LAUNCH_ID
  ? new anchor.web3.PublicKey(process.env.REACT_APP_FAIR_LAUNCH_ID)
  : undefined;

const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const rpcHost = process.env.REACT_APP_SOLANA_RPC_HOST!;
const connection = new anchor.web3.Connection(rpcHost);

const startDateSeed = parseInt(process.env.REACT_APP_CANDY_START_DATE!, 10);

const txTimeout = 30000; // milliseconds (confirm this works for your project)

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [getPhantomWallet(), getSolflareWallet(), getSolletWallet()],
    [],
  );

  return (
    <div className='w-screen overflow-x-hidden'>
      <ThemeProvider theme={theme}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletDialogProvider>
              <ConfettiProvider>
                <NavBar />
                <Home
                  candyMachineId={candyMachineId}
                  fairLaunchId={fairLaunchId}
                  connection={connection}
                  startDate={startDateSeed}
                  txTimeout={txTimeout}
                  rpcHost={rpcHost}
                />
                <Carousel />
                <Utility />
                <RoadMap />
                <About />
                <Footer />
              </ConfettiProvider>
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;
