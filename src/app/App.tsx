import { useMemo } from 'react';
import { Routes, Route } from "react-router-dom";

import NavBar from '../components/navbar/NavBar';
import Home from '../routes/home/Home';
import Footer from "../components/footer/Footer";
import HolderPage from "../routes/holder/holder";

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

import { ConfettiProvider } from '../components/confetti';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';
import './App.css';

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

  const wallets = useMemo(() => (
    [getPhantomWallet(), getSolflareWallet(), getSolletWallet()]
  ), []);

  return (
    <div className='w-screen overflow-x-hidden'>
      <ThemeProvider theme={theme}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletDialogProvider>
              <ConfettiProvider>
                <NavBar />
                <Routes>
                  <Route path="/" element={
                    <Home
                      candyMachineId={candyMachineId}
                      fairLaunchId={fairLaunchId}
                      connection={connection}
                      startDate={startDateSeed}
                      txTimeout={txTimeout}
                      rpcHost={rpcHost}
                    />
                  } />
                  <Route path="holder" element={<HolderPage />} />
                </Routes>
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
