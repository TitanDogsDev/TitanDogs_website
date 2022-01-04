import Logo from "../../images/paw.png"

const NavBar = () => {
    return (
        <div id="navbar" className="w-full h-40 sm:h-28 flex justify-center items-center px-5 sm:px-10 z-20 bg-black">
            <a className="cursor-pointer flex justify-center items-center" href="/"><img className="w-auto h-16 mx-4" src={Logo} alt="logo" /></a>
            <div className="md:flex-grow flex flex-wrap justify-around items-center">
                <a className="cursor-pointer sm:flex-grow w-full sm:w-auto flex justify-center sm:justify-start" href="/"><h1 className="text-white whitespace-nowrap text-3xl mb-2 font-bold uppercase ml-4 cursor-pointer">Titan Dogs</h1></a>
                <div className="w-full sm:w-auto flex flex-row text-sm sm:text-md justify-around">
                    <a className="cursor-pointer" href="/"><h1 className="text-white uppercase sm:ml-4 hidden sm:block">Home</h1></a>
                    <a className="cursor-pointer" href="#utility"><h1 className="text-white uppercase sm:ml-4">Utility</h1></a>
                    <a className="cursor-pointer" href="#roadmap"><h1 className="text-white uppercase sm:ml-4">Roadmap</h1></a>
                    <a className="cursor-pointer" href="#about"><h1 className="text-white uppercase sm:ml-4">About</h1></a>
                </div>
            </div>
        </div>
    )
}

export default NavBar;