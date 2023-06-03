import React, { useState } from 'react'
import PropTypes from 'prop-types'


import { Button, Img, Input, Line, Text, List, SelectBox } from "..";

function Picturemodal({ setShowModal, images }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlePrevious = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : images.length - 1));
    };

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const width = 100 / images.length;
    const left = width * currentImageIndex;

    return (
        <div className="absolute bg-gray_900_99 flex flex-col h-full inset-[0] items-end justify-center m-auto p-[84px] md:px-10 sm:px-5 w-full z-10">
            <div className="bg-white_A700 flex flex-col gap-6 justify-start mr-[156px] p-4 w-[71%] md:w-full">
                <button onClick={() => { setShowModal(false); }}>
                    <Img
                        src="images/img_x.svg"
                        className="h-8 md:ml-[0] ml-[832px] w-8"
                        alt="x"
                    />
                </button>
                <div className="flex flex-col gap-8 items-center justify-start mb-4 mx-auto w-[93%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                        <Img
                            src={images[currentImageIndex]}
                            className="h-[452px] md:h-auto object-cover w-full"
                            alt="slider"
                        />
                    </div>
                    <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                        <div className="flex md:flex-1 flex-row gap-4 items-center justify-between w-[15%] md:w-full">
                            <Button
                                onClick={handlePrevious}
                                className="flex h-12 items-center justify-center rotate-[0deg] rounded-[50%] w-12"
                                size="lgIcn"
                                variant="icbOutlineGray900"
                            >
                                <Img
                                    src="images/img_arrowleft.svg"
                                    className="h-6"
                                    alt="arrowleft"
                                />
                            </Button>
                            <Button
                                onClick={handleNext}
                                className="flex h-12 items-center justify-center rounded-[50%] w-12"
                                size="lgIcn"
                                variant="icbOutlineGray900"
                            >
                                <Img
                                    src="images/img_arrowright.svg"
                                    className="h-6"
                                    alt="arrowright"
                                />
                            </Button>
                        </div>
                        <div className="h-px relative w-[84%] md:w-full">
                            <Line className="bg-gray_900_6c h-px m-auto w-full" />
                            <Line style={{width: `${width}%`, left: `${left}%`}} className="absolute bg-gray_900 h-px inset-y-[0] my-auto" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Picturemodal.propTypes = {
    setShowModal: PropTypes.func.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Picturemodal
