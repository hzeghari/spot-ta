import React from 'react'
import PropTypes from 'prop-types'

import { Button, Img, Input, Line, Text, List, SelectBox } from "..";


const dropdownOptionsList = [
    { label: "Option1", value: "option1" },
    { label: "Option2", value: "option2" },
    { label: "Option3", value: "option3" },
];

function Heroreserve({ setShowModal, props }) {
    
    return (
        <div className="font-archia md:h-[1195px] h-[601px] sm:h-[722px] mt-[43px] relative w-full">
            <div className="absolute flex flex-col inset-x-[0] items-center justify-start mx-auto top-[0] w-full">
                <div className="flex flex-col gap-8 items-start justify-start w-full">
                    <div className="flex flex-col items-center justify-start w-full">
                        <div className="flex flex-col gap-[21px] items-start justify-start w-full">
                            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                                <Text
                                    className="text-gray_900 font-archia tracking-[-1.28px] uppercase"
                                    as="h1"
                                    variant="h1"
                                >
                                    198 Avenue Liberte
                                </Text>
                                <Button
                                    className="flex h-12 items-center justify-center md:ml-[0] ml-[575px] rounded-[50%] w-12"
                                    size="smIcn"
                                    variant="icbOutlineGray900"
                                >
                                    <Img
                                        src="images/img_heart.svg"
                                        className="h-6"
                                        alt="heart"
                                    />
                                </Button>
                                <Button
                                    className="flex h-12 items-center justify-center ml-4 md:ml-[0] rounded-[50%] w-12"
                                    size="smIcn"
                                    variant="icbOutlineGray900"
                                >
                                    <Img
                                        src="images/img_linkexternal01.svg"
                                        className="h-6"
                                        alt="linkexternalOne"
                                    />
                                </Button>
                            </div>
                            <div className="flex mt-[-8px] sm:flex-col flex-row font-helveticaneue sm:gap-5 items-center justify-start w-[37%] md:w-full">
                                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                    <Img
                                        src="images/img_location.svg"
                                        className="h-5 w-5"
                                        alt="location"
                                    />
                                    <Text
                                        className="font-normal text-gray_900_99 w-auto"
                                        as="h5"
                                        variant="h5"
                                    >
                                        1875 K St NW Washington, DC 20006
                                    </Text>
                                </div>
                                <Line className="bg-gray_900_6c h-6 sm:h-px ml-6 sm:ml-[0] sm:w-full w-px" />
                                <div className="flex flex-row gap-2 items-center justify-start sm:ml-[0] ml-[23px] w-auto">
                                    <Img
                                        src="images/img_bipersonfill.svg"
                                        className="h-5 w-5"
                                        alt="bipersonfill"
                                    />
                                    <Text
                                        className="font-normal text-gray_900_99 w-26"
                                        as="h5"
                                        variant="h5"
                                    >
                                        2 Guests
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[66%] md:w-full">
                        <div className="flex flex-col items-center justify-start w-full">
                            <div className="flex md:flex-col flex-row gap-4 items-center justify-between w-full">
                                <div className="flex md:flex-1 flex-col gap-4 items-center justify-start w-[23%] md:w-full">
                                    <div className="h-[126px] relative rotate-[360deg] w-full">
                                        <Img
                                            src="images/img_smartworkscowo.png"
                                            className="h-[126px] m-auto object-cover w-full"
                                            alt="smartworkscowo"
                                        />
                                        <div className="absolute h-[126px] inset-[0] justify-center m-auto w-full">
                                            {/* <Img
                                                src="images/img_davidfintzroj.png"
                                                className="h-[126px] m-auto object-cover w-full"
                                                alt="davidfintzroj"
                                            /> */}
                                            <Img
                                                src="images/img_adobestock2221.png"
                                                className="absolute h-[126px] inset-[0] justify-center m-auto object-cover w-full"
                                                alt="adobestock2221"
                                            />
                                        </div>
                                    </div>
                                    <div className="h-[126px] relative rotate-[360deg] w-full">
                                        {/* <Img
                                            src="images/img_smartworkscowo.png"
                                            className="h-[126px] m-auto object-cover w-full"
                                            alt="smartworkscowo_One"
                                        /> */}
                                        <Img
                                            src="images/img_adobestock2220.png"
                                            className="absolute h-[126px] inset-[0] justify-center m-auto object-cover w-full"
                                            alt="adobestock2220"
                                        />
                                    </div>
                                    <div className="h-[126px] relative rotate-[360deg] w-full">
                                        <Img
                                            src="images/img_smartworkscowo.png"
                                            className="h-[126px] m-auto object-cover w-full"
                                            alt="smartworkscowo_Two"
                                        />
                                        <div className="absolute bg-gray_900 flex flex-col h-full inset-[0] items-center justify-center m-auto w-full">
                                            <div className="h-[126px] relative w-full">
                                                <Img
                                                    src="images/img_adobestock2228.png"
                                                    className="h-[126px] m-auto object-cover w-full"
                                                    alt="adobestock2228"
                                                />
                                                <Button
                                                    className="absolute flex h-14 inset-[0] items-center justify-center m-auto rounded-[50%] w-14"
                                                    size="mdIcn"
                                                    variant="icbFillWhiteA700"
                                                    onClick={() => { setShowModal(true); }}
                                                >
                                                    <Img
                                                        src="images/img_grid.svg"
                                                        className="h-6"
                                                        alt="grid"
                                                    />
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex md:flex-1 flex-col items-center justify-start w-[79%] md:w-full">
                                    <Img
                                        src="images/img_maskgroup.png"
                                        className="h-[410px] md:h-auto object-cover w-full"
                                        alt="maskgroup"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col font-helveticaneue h-[447px] items-center justify-start p-9 sm:px-5 right-[0] mr-[-12px] top-[160px] w-[29%]"
                style={{ backgroundImage: "url('images/img_fixeditem.svg')" }}
            >
                <div className="flex flex-col items-start justify-start my-[11px] w-[97%] md:w-full">
                    <div className="flex flex-row gap-2.5 items-end justify-start w-[47%] md:w-full">
                        <Text
                            className="text-gray_900 tracking-[-0.64px]"
                            as="h2"
                            variant="h2"
                        >
                            $ 125{" "}
                        </Text>
                        <Text
                            className="font-normal mb-1 mt-[13px] text-gray_900_87"
                            as="h4"
                            variant="h4"
                        >
                            / hour
                        </Text>
                    </div>
                    <List
                        className="flex-col gap-[31px] grid items-center mt-[31px] w-full"
                        orientation="vertical"
                    >
                        <div className="flex md:flex-1 flex-row gap-8 items-center justify-start w-[96%] md:w-full">
                            <div className="flex flex-col gap-3 items-start justify-start w-[45%]">
                                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                    <Img
                                        src="images/img_calendar1.svg"
                                        className="h-5 w-5"
                                        alt="calendarOne"
                                    />
                                    <Text
                                        className="font-normal text-gray_900_87 w-auto"
                                        as="h5"
                                        variant="h5"
                                    >
                                        Check-in
                                    </Text>
                                </div>
                                <Line className="bg-gray_900_6c h-px rotate-[-180deg] w-full" />
                            </div>
                            <div className="flex flex-col gap-3 items-start justify-start w-[45%]">
                                <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                    <Img
                                        src="images/img_calendar1.svg"
                                        className="h-5 w-5"
                                        alt="calendarOne_One"
                                    />
                                    <Text
                                        className="font-normal text-gray_900_87 w-auto"
                                        as="h5"
                                        variant="h5"
                                    >
                                        Check-out
                                    </Text>
                                </div>
                                <Line className="bg-gray_900_6c h-px rotate-[-180deg] w-full" />
                            </div>
                        </div>
                        <div className="flex flex-1 flex-row gap-5 items-center justify-between w-full">
                            <div className="flex flex-col gap-3 items-start justify-center w-[136px]">
                                <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                        <Img
                                            src="images/img_clock.svg"
                                            className="h-5 w-5"
                                            alt="clock"
                                        />
                                        <Text
                                            className="font-normal text-gray_900_87 w-[63px]"
                                            as="h5"
                                            variant="h5"
                                        >
                                            Time in
                                        </Text>
                                    </div>
                                </div>
                                <Line className="bg-gray_900_6c h-px rotate-[-180deg] w-[92%]" />
                            </div>
                            <div className="flex flex-col gap-3 items-start justify-center w-[136px]">
                                <div className="flex flex-col items-center justify-start w-full">
                                    <div className="flex flex-row gap-2 items-center justify-start w-auto">
                                        <Img
                                            src="images/img_clock.svg"
                                            className="h-5 w-5"
                                            alt="clock_One"
                                        />
                                        <Text
                                            className="font-normal text-gray_900_87 w-[63px]"
                                            as="h5"
                                            variant="h5"
                                        >
                                            Time out
                                        </Text>
                                    </div>
                                </div>
                                <Line className="bg-gray_900_6c h-px rotate-[-180deg] w-[92%]" />
                            </div>
                        </div>
                    </List>
                    <SelectBox
                        className="font-normal mt-[31px] text-base text-gray_900_87 text-left w-[96%] sm:w-full"
                        placeholderClassName="text-gray_900_87"
                        indicator={
                            <Img
                                src="images/img_vector.svg"
                                className="h-[5px] w-2.5"
                                alt="Vector"
                            />
                        }
                        size="sm"
                        isSearchable={false}
                        placeholder="Guests"
                        getOptionLabel={(e) => (
                            <div className="flex items-center">
                                <Img
                                    src="images/img_bipersonfill.svg"
                                    className="h-5 mr-3 w-5"
                                    alt="bi:person-fill"
                                />
                                <span>{e.label}</span>
                            </div>
                        )}
                        isMulti={false}
                        options={dropdownOptionsList}
                        name="dropdown"
                        variant="UnderLineGray9006c"
                    />
                    <Button
                        className="cursor-pointer font-bold h-14 mt-[47px] text-center text-sm text-white_A700 uppercase w-[280px]"
                        shape="CircleBorder28"
                        size="md"
                        variant="FillGray900"
                    >
                        Reserve
                    </Button>
                </div>
            </div>
        </div>
    )
}

Heroreserve.propTypes = {}

export default Heroreserve
