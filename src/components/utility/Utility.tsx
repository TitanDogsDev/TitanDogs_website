import YellowTitan_1100 from "../../images/yellow_titan_1100.png"
import YellowTitan_600 from "../../images/yellow_titan_600.png"

const Utility = () => {
    return (
        <div id="utility" className="w-full h-auto flex flex-col justify-center items-center bg-gradient-to-b from-gray-800 to-black text-white py-20 sm:p-20">
            <h1 className="uppercase text-4xl font-bold mb-4">Utility</h1>
            <div className="w-full flex flex-row flex-wrap justify-around items-start text-lg">
                <img className="w-11/12 sm:w-96 my-8" src={YellowTitan_1100} srcSet={`${YellowTitan_600} 600w, ${YellowTitan_1100} 1100w`} alt="yellow_titan" />
                <ul className="list-none my-10 sm:mt-16 w-140">
                    <li className="mb-6 px-10">
                        <h2 className="font-bold">
                            Become a member of the Dog DAO.
                        </h2>
                        <p className="">
                            Any person that buys and holds a Titan Dog NFT becomes a member of the Dog DAO. They will get the following benefits:
                        </p>
                        <ul className="list-disc pl-6">
                            <li className="mt-4 ">
                                Voting on the use of the community wallet which will be filled with the 5% of secondary sales commission (It can be used as passive income to holders, raising floor price, marketing, etc...)
                            </li>
                            <li className="mt-4 ">
                                Being an active part of the game development, with the ability to make and vote on game feature proposals. (This includes votes on features, maps, custom Titan parts and more to come...)
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-none my-6 sm:mt-16 w-140">
                    <li className="mb-6 px-10">
                        <h2 className="font-bold">
                            Early access to the game
                        </h2>
                        <p className="my-4">
                            Not another card game!
                        </p>
                        <p className="mt-4 ">
                            You'll be facing incremental waves of enemies in this collaborative turn-based strategy game. Set in cities around the world, you'll be searching for power ups, bashing enemies, helping other players.
                        </p>
                        <p className="mt-4">
                            Get the following perks before anyone else:
                        </p>
                        <ul className="list-disc pl-6">
                            <li className="mt-4">
                                In-game crypto rewards
                            </li>
                            <li className="mt-4">
                                In-game Titan part NFT drop
                            </li>
                            <li className="mt-4">
                                Passive income from Titan rental
                            </li>
                        </ul>
                    </li>
                </ul>

                <ul className="list-none my-6 sm:mt-16 w-140">
                    <li className="mb-6 px-10">
                        <h2 className="font-bold">
                            Airdrops on future NFT mints
                        </h2>
                        <p className="mt-4 ">
                            With the game at its core, the project is bound to grow with the number of active players. Original Titan Dog holders will received NFT drops for all future mints, such as the following:
                        </p>
                        <ul className="list-disc pl-6">
                            <li className="mt-4">
                                Titan parts.
                            </li>
                            <li className="mt-4">
                                New pet pilots.
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Utility;