import React from 'react'
import PropTypes from 'prop-types'

import { Button, Img, Input, Line, Text } from "..";

function Heretohelp(props) {
    return (
        <div className="flex flex-col font-helveticaneue items-center justify-start mt-32 w-[66%] md:w-full">
            <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col md:gap-10 gap-[74px] items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[19px] items-start justify-start w-full">
                            <div className="flex flex-col relative w-full">
                                <Line className="bg-gray_900 h-px mx-auto rotate-[-180deg] w-full" />
                                <Line className="bg-gray_900 h-2 mb-auto ml-[35px] mt-[-1px] rotate-[-180deg] w-px z-[1]" />
                            </div>
                            <div className="flex flex-row gap-8 items-start justify-start w-[17%] md:w-full">
                                <Text
                                    className="font-medium text-gray_900"
                                    as="h5"
                                    variant="h5"
                                >
                                    04
                                </Text>
                                <Text
                                    className="font-medium text-gray_900"
                                    as="h5"
                                    variant="h5"
                                >
                                    Here to help
                                </Text>
                            </div>
                        </div>
                    </div>
                    <div className="flex md:flex-col flex-row md:gap-10 gap-[72px] items-center justify-start w-[96%] md:w-full">
                        <Img
                            src="images/img_img_169x192.png"
                            className="h-[169px] sm:h-auto object-cover w-[70%] md:w-full"
                            alt="img_One"
                        />
                        <div className="flex flex-col items-start justify-start">
                            <Text
                                className="text-gray_900 tracking-[-0.44px]"
                                as="h3"
                                variant="h3"
                            >
                                Melissa Smith
                            </Text>
                            <Text
                                className="font-normal mt-2 text-gray_900_99"
                                as="h6"
                                variant="h6"
                            >
                                Support manager
                            </Text>
                            <Text
                                className="font-normal leading-[160.00%] mt-[29px] text-gray_900_99 w-full"
                                as="h4"
                                variant="h4"
                            >
                                We have 8 types of co-working spaces. Professional private
                                spaces. Professional private offices are available at the
                                Marina whether for the day, the week, the month, the year.
                                the week, the month, the year.
                            </Text>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

Heretohelp.propTypes = {}

export default Heretohelp
