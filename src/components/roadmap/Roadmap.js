import {
    Timeline,
    Container,
    YearContent,
    BodyContent,
    Section,
    Description,
} from 'vertical-timeline-component-react';

const RoadMap = () => {
    const customTheme = {
        yearColor: '#ffffff',
        lineColor: '#000000',
        dotColor: '#000000',
        borderDotColor: '#000000',
        titleColor: '#ffffff',
        subtitleColor: '#929292',
        textColor: '#ffffff',
    };

    return (
        <div id="roadmap" className='w-full flex flex-col justify-center items-center text-2xl bg-gradient-to-b from-purple-800 to-black pr-5 py-20 sm:p-10'>
            <h1 className='uppercase text-white text-4xl font-bold'>
                RoadMap
            </h1>
            <div className='w-full md:w-3/4 flex flex-row flex-wrap justify-start items-start mt-16'>
                <div className='w-128'>
                    <Timeline theme={customTheme} dateFormat='ll'>
                        <Container>
                            <YearContent startDate='2022' currentYear={false} />
                            <BodyContent>
                                <Section title='Q1 2022'>
                                    <Description variant='subtitle' text='Prototype phase.' />
                                    <Description text='- Minting launch.' />
                                    <Description text='- Dog DAO functionalities (proposals and voting)' />
                                    <Description text='- Off-chain game prototype playable by NFT holders.' />
                                    <Description text='- Prototype iteration based on DAO members feedback.' />
                                </Section>

                                <Section title='Q2 2022'>
                                    <Description variant='subtitle' text='Alpha phase.' />
                                    <Description text='- On-chain game prototype for NFT holders.' />
                                    <Description text='- Implementation of Dog DAO proposals.' />
                                    <Description text='- Starting weekly game campaign.' />
                                    <Description text="- Launch of Titan Dog's own token." />
                                    <Description text='- First in-game token rewards.' />
                                </Section>
                            </BodyContent>
                        </Container>
                    </Timeline>
                </div>
                <div className='w-128'>
                    <Timeline theme={customTheme} dateFormat='ll'>
                        <Container>
                            <YearContent startDate='2022' currentYear={false} />
                            <BodyContent>
                                <Section title='Q3 2022'>
                                    <Description variant='subtitle' text='Beta phase.' />
                                    <Description text='- Adding maps.' />
                                    <Description text='- Debugging and polishing existing features.' />
                                    <Description text='- Improving campaign flow and events.' />
                                </Section>

                                <Section title='Q4 2022'>
                                    <Description variant='subtitle' text='Cutom Titan feature.' />
                                    <Description text='- New Titan part NFTs minted.' />
                                    <Description text='- In-game Titan part drop to weekly survivors.' />
                                    <Description text='- Launch of the website marketplace for trading.' />
                                    <Description text='- Opening creative Titan part proposals to the DAO.' />
                                </Section>

                                <Section title='Q1 2023'>
                                    <Description variant='subtitle' text='Opening up to new players.' />
                                    <Description text='- Titan rental feature through the marketplace.' />
                                    <Description text='- NFT multiverse united. Allowing holders of any NFT on SOL to buy/rent an empty Titan an equip their NFT as pilot to participate in a multiverse weekly campaign.' />
                                    <Description text='- Launching a free-to-play option. Asymmetric gameplay without Titan on start.' />
                                </Section>
                            </BodyContent>
                        </Container>
                    </Timeline>
                </div>
            </div>
            <div className='w-1/2 mt-16'>
                <div className='w-full text-white text-lg flex flex-row'>
                    <p>*</p>
                    <p className='ml-4'>
                        Please note that the road map is subject to change based on the Dog DAO decisions going forward.
                    </p>
                </div>
            </div>

        </div>
    );
}

export default RoadMap;