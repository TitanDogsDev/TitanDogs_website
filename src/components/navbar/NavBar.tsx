import Logo from "../../images/paw.png"

const NavBar = () => {
    return (
        <div className="w-full h-40 sm:h-28 flex justify-start items-center px-10 z-20 bg-black">
            <a className="cursor-pointer" href="/"><img className="h-20 w-auto mr-4" src={Logo} alt="logo" /></a>
            <div className="flex-grow flex flex-wrap justify-around items-center">
                <a className="cursor-pointer flex-grow w-full md:w-auto" href="/"><h1 className="text-white whitespace-nowrap text-3xl font-bold uppercase ml-4 cursor-pointer">Titan Dogs</h1></a>
                <a className="cursor-pointer" href="/"><h1 className="text-white uppercase ml-4">Home</h1></a>
                <a className="cursor-pointer" href="#utility"><h1 className="text-white uppercase ml-4">Utility</h1></a>
                <a className="cursor-pointer" href="#roadmap"><h1 className="text-white uppercase ml-4">Roadmap</h1></a>
                <a className="cursor-pointer" href="#about"><h1 className="text-white uppercase ml-4">About</h1></a>
            </div>
        </div>
    )
}

export default NavBar;