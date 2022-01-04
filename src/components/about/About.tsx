import Avatar from "../../images/thumbnail.png";
import ShowRoomLogo from "../../images/showroom_logo.png";
import PeakdLogo from "../../images/peakd_logo.png";
import ComicLogo from "../../images/comic_logo.png";
import YoutubeLogo from "../../images/youtube_logo.png";

const About = () => {
    return (
        <div id="about" className="w-full h-auto flex flex-col justify-center items-center bg-gradient-to-b from-black to-black text-white py-20 sm:p-20">
            <h1 className="text-4xl uppercase font-bold">About me</h1>
            <div className="w-3/4 flex flex-row flex-wrap justify-around items-start mt-16">
                <div>
                    <img className="w-60" src={Avatar} alt="avatar" />
                    <div className="w-auto flex flex-row flex-wrap justify-around items-center mt-6 mb-10">
                        <a href="https://peakd.com/@jrej" className="w-1/4 flex flex-col justify-center items-center cursor-pointer" target="_blank" rel="noreferrer">
                            <img className="w-10 my-2" src={PeakdLogo} alt="" />
                            Blog
                        </a>
                        <a href="https://www.youtube.com/user/jrejoire" className="w-1/4 flex flex-col justify-center items-center cursor-pointer" target="_blank" rel="noreferrer">
                            <img className="w-10 my-2" src={YoutubeLogo} alt="" />
                            Game
                        </a>
                        <a href="https://nftshowroom.com/jrej/gallery" className="w-1/4 flex flex-col justify-center items-center cursor-pointer" target="_blank" rel="noreferrer">
                            <img className="w-10 my-2" src={ShowRoomLogo} alt="" />
                            NFT
                        </a>
                        <a href="https://www.amazon.com/dp/B0954YTY5G/ref=cm_sw_em_r_mt_dp_H7ZP7SCYECRXB0RPD3MS" className="w-1/4 flex flex-col justify-center items-center cursor-pointer" target="_blank" rel="noreferrer">
                            <img className="w-10 my-2" src={ComicLogo} alt="" />
                            Comic
                        </a>
                    </div>

                </div>
                <div className="w-full md:w-7/12 text-lg">
                    <p>My name is Jrej. I'm a french artist and developer. I have been exploring the crypto-currency space since 2016. I am happy to present to you today this new exciting project at the crossroad of all my most valuable skills.</p>

                    <h2 className="my-4 font-bold uppercase">Why NFTs ?</h2>
                    <p>NFTs are a brand new way to support independant creators while getting maximum value in return. Who care about Patreon's unlockable content, or Kickstarter's infinite stretch goals... With NFTs, the focus can remain on the growth of the core project and the associated rewards.</p>

                    <h2 className="my-4 font-bold uppercase">Why me ?</h2>
                    <p>I like dogs, I can draw and I can code. What else?</p>
                    <ul className="list-disc ml-5 mt-4">
                        <li className="mb-2">
                            I am working as a system and network engineer in a video game company.
                        </li>
                        <li className="mb-2">
                            I have completed a browser-embedded turn-based 3D multiplayer game last year.
                        </li>
                        <li className="mb-2">
                            I have posted my own graphic novel on Steemit, then Hive from 2017 and self-published it last year.
                        </li>
                        <li className="mb-2">
                            I have deloyed a comic-hosting plateform called Inkito powered by the Hive blockchain.
                        </li>
                    </ul>
                </div>
            </div>
            <p className="text-lg text-center m-10">Thanks for your consideration. Let's have some fun!</p>
            <a className="cursor-pointer mt-10 flex flex-col justify-center items-center" href="#home">
                <div className="w-16 flex justify-center items-center border-2 border-purple-500 rounded-full p-2 hover:p-4 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="#9333ea">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
                    </svg>
                </div>
                <p className="m-4">Back to mint</p>
            </a>
        </div>
    )
}

export default About;