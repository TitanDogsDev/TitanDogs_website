import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import {
  Snackbar,
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

import * as anchor from '@project-serum/anchor';

import { LAMPORTS_PER_SOL, PublicKey } from '@solana/web3.js';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletDialogButton } from '@solana/wallet-adapter-material-ui';

import {
  awaitTransactionSignatureConfirmation,
  CandyMachineAccount,
  CANDY_MACHINE_PROGRAM,
  getCandyMachineState,
  mintOneToken,
} from '../candy-machine';

import { AlertState } from '../../utils/utils';
import { MintButton } from '../MintButton';
import { getPhase, Phase } from '../PhaseHeader';
import { GatewayProvider } from '@civic/solana-gateway-react';

import Background_1900 from "../../images/background_banner_1900.png";
import Background_600 from "../../images/background_banner_600.png";

import TitanDog_1300 from "../../images/sol_titan_1300.png";
import TitanDog_600 from "../../images/sol_titan_600.png";

import DogFace from "../../images/dog_face.png";

const ConnectButton = styled(WalletDialogButton)`
  width: 50%;
  height: 60px;
  margin-top: 10px;
  margin-bottom: 5px;
  background: linear-gradient(180deg, #8f63d8 0%, #8f63d8 100%);
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

export interface HomeProps {
  candyMachineId?: anchor.web3.PublicKey;
  fairLaunchId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  txTimeout: number;
  rpcHost: string;
}

const Home = (props: HomeProps) => {
  const [yourSOLBalance, setYourSOLBalance] = useState<number | null>(null);
  const rpcUrl = props.rpcHost;

  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT
  const wallet = useWallet();

  const anchorWallet = useMemo(() => {
    if (
      !wallet ||
      !wallet.publicKey ||
      !wallet.signAllTransactions ||
      !wallet.signTransaction
    ) {
      return;
    }

    return {
      publicKey: wallet.publicKey,
      signAllTransactions: wallet.signAllTransactions,
      signTransaction: wallet.signTransaction,
    } as anchor.Wallet;
  }, [wallet]);

  const [alertState, setAlertState] = useState<AlertState>({
    open: false,
    message: '',
    severity: undefined,
  });

  const [candyMachine, setCandyMachine] = useState<CandyMachineAccount>();

  const onMint = async () => {
    try {
      setIsMinting(true);
      document.getElementById('#identity')?.click();
      if (wallet.connected && candyMachine?.program && wallet.publicKey) {
        const mintTxId = (
          await mintOneToken(candyMachine, wallet.publicKey)
        )[0];

        let status: any = { err: true };
        if (mintTxId) {
          status = await awaitTransactionSignatureConfirmation(
            mintTxId,
            props.txTimeout,
            props.connection,
            'singleGossip',
            true,
          );
        }

        if (!status?.err) {
          setAlertState({
            open: true,
            message: 'Congratulations! Mint succeeded!',
            severity: 'success',
          });
        } else {
          setAlertState({
            open: true,
            message: 'Mint failed! Please try again!',
            severity: 'error',
          });
        }
      }
    } catch (error: any) {
      // TODO: blech:
      let message = error.msg || 'Minting failed! Please try again!';
      if (!error.msg) {
        if (!error.message) {
          message = 'Transaction Timeout! Please try again.';
        } else if (error.message.indexOf('0x138')) {
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
          window.location.reload();
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      setAlertState({
        open: true,
        message,
        severity: 'error',
      });
    } finally {
      setIsMinting(false);
    }
  };

  useEffect(() => {
    (async () => {
      if (!anchorWallet) {
        return;
      }
      try {
        const balance = await props.connection.getBalance(
          anchorWallet.publicKey,
        );
        setYourSOLBalance(balance);
      } catch (error) {
        console.log(error);
      }

      if (props.candyMachineId) {
        try {
          const cndy = await getCandyMachineState(
            anchorWallet,
            props.candyMachineId,
            props.connection,
          );
          setCandyMachine(cndy);
        } catch (e) {
          console.log('Problem getting candy machine state');
          console.log(e);
        }
      } else {
        console.log('No candy machine detected in configuration.');
      }
    })();
  }, [
    anchorWallet,
    props.candyMachineId,
    props.connection,
  ]);

  const phase = getPhase(undefined, candyMachine);

  return (
    <div id="home" className="w-sreen h-full">
      <div id="mint-container" className="relative w-full h-full flex justify-center items-center z-10 py-8 sm:px-16">
        <div id="mint-component" className="bg-black p-6 sm:p-10 w-11/12 sm:w-auto h-full flex flex-row flex-wrap-reverse justify-center items-center rounded-xl z-10">
          <div id="mint-grid" className="w-full sm:w-128 h-auto sm:h-128 flex flex-col justify-around items-center text-white py-10">

            {phase === Phase.Unknown && !candyMachine && (
              <div className='flex flex-col justify-center items-start px-24'>
                <h2 className="font-bold text-left text-5xl sm:text-6xl md:text-7xl mb-2">
                  Welcome
                </h2>
                <p className="font-bold text-gray-500 text-left text-lg mb-10">
                  Please connect your wallet to mint your very own Titan Dog.
                </p>
              </div>
            )}

            {phase === Phase.Phase4 && (
              <div className="relative text-center">
                <h2 className="text-6xl">
                  {candyMachine?.state.itemsRemaining}/1,000 <span className='uppercase text-xs whitespace-pre-wrap'>left</span>
                </h2>
                <img className="absolute w-10 h-auto" src={DogFace} alt="dog_face" style={{ top: -20, right: -6 }} />
                <div className='mt-10'>
                  <p className="font-bold text-gray-500 text-2xl">
                    BALANCE: {yourSOLBalance ? (yourSOLBalance / LAMPORTS_PER_SOL).toFixed(5) : 0} SOL
                  </p>
                  <p className="font-bold text-gray-500 text-2xl">
                    PRICE: 0.25 SOL
                  </p>
                </div>
              </div>
            )}

            {!wallet.connected ? (
              <ConnectButton>
                Connect to mint
              </ConnectButton>
            ) : (
              <div id="mint-button" className="w-1/2 flex justify-center text-white">
                {candyMachine?.state.isActive &&
                  candyMachine?.state.gatekeeper &&
                  wallet.publicKey &&
                  wallet.signTransaction ? (
                  <GatewayProvider
                    wallet={{
                      publicKey:
                        wallet.publicKey ||
                        new PublicKey(CANDY_MACHINE_PROGRAM),
                      //@ts-ignore
                      signTransaction: wallet.signTransaction,
                    }}
                    // // Replace with following when added
                    // gatekeeperNetwork={candyMachine.state.gatekeeper_network}
                    gatekeeperNetwork={
                      candyMachine?.state?.gatekeeper?.gatekeeperNetwork
                    } // This is the ignite (captcha) network
                    /// Don't need this for mainnet
                    clusterUrl={rpcUrl}
                    options={{ autoShowModal: false }}
                  >
                    <MintButton
                      candyMachine={candyMachine}
                      fairLaunch={undefined}
                      isMinting={isMinting}
                      fairLaunchBalance={0}
                      onMint={onMint}
                    />
                  </GatewayProvider>
                ) : (
                  <MintButton
                    candyMachine={candyMachine}
                    fairLaunch={undefined}
                    isMinting={isMinting}
                    fairLaunchBalance={0}
                    onMint={onMint}
                  />
                )}
              </div>
            )}
          </div>
          <img className="w-3/4 sm:w-128" src={TitanDog_1300} srcSet={`${TitanDog_600} 600w, ${TitanDog_1300} 1300w`} alt="titandog" />
        </div>

        <img className="absolute top-0 object-cover w-full h-full z-0" src={Background_1900} srcSet={`${Background_600} 600w, ${Background_1900} 1900w`} alt="background_image" />
      </div>
      <Snackbar
        open={alertState.open}
        autoHideDuration={6000}
        onClose={() => setAlertState({ ...alertState, open: false })}
        style={{ zIndex: '1' }}
      >
        <Alert
          onClose={() => setAlertState({ ...alertState, open: false })}
          severity={alertState.severity}
        >
          {alertState.message}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Home;
