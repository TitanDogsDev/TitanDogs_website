import Logo from "../../images/paw.png"

const Footer = () => {
    return (
        <div id="footer" className="w-full h-40 sm:h-28 flex flex-wrap justify-around items-center px-10 z-20 bg-purple-600">
            <a className="w-1/3 cursor-pointer hidden sm:block" href="/"><h1 className="flex-grow text-white whitespace-nowrap text-3xl font-bold uppercase w-full md:w-auto cursor-pointer m-0">Titan Dogs</h1></a>
            <a className="w-1/3 cursor-pointer flex flex-row justify-center items-center block sm:hidden" href="https://twitter.com/TitanDogsNFT" target="_blank" rel="noreferrer">
                <img className="w-10 h-auto mr-14" src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1200px-Twitter_Bird.svg.png" alt="" />
            </a>
            <a className="cursor-pointer" href="/"><img className="h-20 w-auto" src={Logo} alt="logo" /></a>
            <div className="w-1/3 flex items-center justify-end">
                <a className="cursor-pointer flex flex-row justify-center items-center hidden sm:block" href="https://twitter.com/TitanDogsNFT" target="_blank" rel="noreferrer">
                    <img className="w-10 h-auto mr-14" src="https://upload.wikimedia.org/wikipedia/fr/thumb/c/c8/Twitter_Bird.svg/1200px-Twitter_Bird.svg.png" alt="" />
                </a>
                <a className="cursor-pointer flex flex-row justify-center items-center" href="https://www.instagram.com/titandogsnft/" target="_blank" rel="noreferrer">
                    <img className="w-10 h-auto" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/600px-Instagram_icon.png" alt="" />
                </a>
            </div>
        </div>
    )
}

export default Footer;