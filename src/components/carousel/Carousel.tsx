import { useEffect, useState } from "react";
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    largeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 800 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 800, min: 0 },
        items: 1
    }
};

const Carousel = () => {
    const [indexes, setIndexes] = useState<number[]>([]);

    useEffect(() => {
        let indexArray = [];
        for (let i = 0; i < 10; i++) {
            indexArray.push(Math.floor(Math.random() * 1000))
        }
        setIndexes(indexArray);
    }, [])

    return (
        <div className="flex justify-center items-center bg-purple-500">
            <div className="w-9/12">
                <ReactCarousel
                    swipeable={true}
                    draggable={true}
                    showDots={false}
                    responsive={responsive}
                    ssr={true}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    focusOnSelect={true}
                    customTransition="transform 300ms ease-in-out"
                    transitionDuration={300}
                    removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                >
                    {indexes.map((index) => (
                        <div key={index} className="px-10 py-20 flex justify-center items-center">
                            <img className="rounded-2xl w-96 h-auto border-purple-600 border-4" src={`./images/titans/${index}.png`} alt="titan" />
                        </div>
                    ))}
                </ReactCarousel>
            </div>
        </div>
    )
}

export default Carousel;