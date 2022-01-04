import { useEffect, useState } from "react";
import metadata from "../../data/metadata";
import ReactCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import shuffle from "../../tools/shuffle";

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
    const [images, setImages] = useState<string[]>([]);

    useEffect(() => {
        let imageArray = shuffle(metadata.images);
        imageArray = imageArray.slice(0, 10);
        setImages(imageArray);
    }, [])

    return (
        <div className="flex justify-center items-center">
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
                    {images.map(image => (
                        <div className="px-10 py-20 flex justify-center items-center">
                            <img className="rounded-2xl w-96 h-auto border-purple-500 border-4" src={image} alt="titan" />
                        </div>
                    ))}
                </ReactCarousel>
            </div>
        </div>
    )
}

export default Carousel;