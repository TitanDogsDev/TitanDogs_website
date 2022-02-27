import Home from "../home/Home";
import Carousel from "../../components/carousel/Carousel";
import Utility from "../../components/utility/Utility";
import RoadMap from "../../components/roadmap/Roadmap";
import About from "../../components/about/About";

import * as anchor from '@project-serum/anchor';

export interface MintProps {
  candyMachineId?: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDateSeed: number;
  txTimeout: number;
  rpcHost: string;
}

const Mint = ({ candyMachineId, connection, startDateSeed, txTimeout, rpcHost }: MintProps) => {
  return (
    <>
      <Home
        candyMachineId={candyMachineId}
        connection={connection}
        startDate={startDateSeed}
        txTimeout={txTimeout}
        rpcHost={rpcHost}
      />
      <Carousel />
      <Utility />
      <RoadMap />
      <About />
    </>
  )
}

export default Mint;