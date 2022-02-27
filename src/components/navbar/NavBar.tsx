import { Link } from "react-router-dom";
import Logo from "../../images/paw.png"
import {
    WalletModalProvider,
    WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";
import "@solana/wallet-adapter-react-ui/styles.css";

const NavBar = () => {
    return (
        <div id="navbar" className="w-full h-40 sm:h-28 flex justify-center items-center px-5 sm:px-10 z-20 bg-black">

            <a className="cursor-pointer flex justify-center items-center hidden sm:block" href="/">
                <img className="w-16 h-auto mx-4" src={Logo} alt="logo" />
            </a>

            <div className="md:flex-grow flex flex-wrap sm:flex-nowrap justify-center sm:justify-start items-center">
                <div className="w-full flex flex-row flex-wrap lg:flex-nowrap">
                    <div className="w-full sm:w-auto flex flex-row flex-grow justify-around sm:justify-start items-center">

                        <a className="cursor-pointer h-full sm:w-auto flex justify-center items-center" href="/">
                            <h1 className="text-white whitespace-nowrap text-3xl mb-2 font-bold uppercase ml-4 cursor-pointer">Titan Dogs</h1>
                        </a>
                        <div className="m-2 sm:hidden">
                            <WalletModalProvider>
                                <WalletMultiButton style={{ "backgroundColor": "#a855f7" }} />
                            </WalletModalProvider>
                        </div>

                    </div>

                    <div className="w-full sm:w-auto flex flex-row flex-wrap text-sm sm:text-md justify-around items-center">
                        
                        <a className="cursor-pointer" href="/"><h1 className="text-white uppercase sm:ml-4 hidden sm:block">Home</h1></a>
                        <a className="cursor-pointer" href="#utility"><h1 className="text-white uppercase sm:ml-4">Utility</h1></a>
                        <a className="cursor-pointer" href="#roadmap"><h1 className="text-white uppercase sm:ml-4">Roadmap</h1></a>
                        <a className="cursor-pointer" href="#about"><h1 className="text-white uppercase sm:ml-4">About</h1></a>
                        <Link to={"holder"}>
                            <h2 className="text-purple-400 font-bold text-md uppercase sm:ml-4">Holder</h2>
                        </Link>

                    </div>

                </div>
                <div className="hidden sm:ml-6 sm:block whitespace-nowrap">
                    <WalletModalProvider>
                        <WalletMultiButton style={{ "color": "white", "backgroundColor": "#a855f7" }} />
                    </WalletModalProvider>
                </div>
            </div>
        </div>
    )
}

export default NavBar;