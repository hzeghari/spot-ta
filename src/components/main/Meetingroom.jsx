import React from 'react'
import PropTypes from 'prop-types'

import { Button, Img, Input, Line, Text } from "..";

function Meetingroom(props) {
    return (
        <div className="flex flex-col font-helveticaneue items-center justify-start mt-32 w-[67%] md:w-full">
            <div className="h-12 relative w-full">
                <Text
                    className="absolute bottom-[0] font-medium left-[7%] text-gray_900"
                    as="h5"
                    variant="h5"
                >
                    Meeting room
                </Text>
                <div className="absolute flex flex-col h-max inset-[0] items-start justify-center m-auto w-full">
                    <Line className="bg-gray_900 h-px rotate-[-180deg] w-full" />
                    <Line className="bg-gray_900 h-2 md:ml-[0] ml-[34px] rotate-[-180deg] w-px" />
                    <Text
                        className="font-medium mt-[19px] text-gray_900"
                        as="h5"
                        variant="h5"
                    >
                        03
                    </Text>
                </div>
            </div>
            <Img
                src="images/img_img.png"
                className="h-[407px] md:h-auto mt-[73px] object-cover w-full"
                alt="img"
            />
            <Text
                className="font-normal leading-[160.00%] mt-8 text-gray_900_99 w-full"
                as="h4"
                variant="h4"
            >
                Benefit from an all-inclusive equipped workspace, from high-speed
                internet connection to secretarial services and much more…
                Spotbusiness takes care of everything for you in order to make
                your work as easy as possible.
            </Text>
        </div>
    )
}

Meetingroom.propTypes = {}

export default Meetingroom
