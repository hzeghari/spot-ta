import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const PrivateOfficePageFooter = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="absolute flex flex-col items-start justify-start right-[14%] top-[10%]">
          <Text
            className="font-helveticaneue font-medium text-gray_900"
            as="h6"
            variant="h6"
          >
            {props?.privateoffice}
          </Text>
          <Text
            className="font-helveticaneue font-medium mt-[21px] text-gray_900"
            as="h6"
            variant="h6"
          >
            {props?.coworkingspace}
          </Text>
          <Text
            className="font-helveticaneue font-medium mt-[18px] text-gray_900"
            as="h6"
            variant="h6"
          >
            {props?.virtualoffice}
          </Text>
          <Text
            className="font-helveticaneue font-medium mt-[21px] text-gray_900"
            as="h6"
            variant="h6"
          >
            {props?.meetingroom}
          </Text>
          <Text
            className="font-helveticaneue font-medium mt-[18px] text-gray_900"
            as="h6"
            variant="h6"
          >
            {props?.partners}
          </Text>
        </div>
        <Img
          src="images/img_logo.svg"
          className="h-[52px] mt-10"
          alt="logo_One"
        />
        <div className="absolute h-[428px] inset-[0] justify-center m-auto w-full">
          <div className="absolute flex flex-col md:gap-10 gap-72 inset-x-[0] items-end justify-start mx-auto top-[0] w-full">
            <div className="flex flex-col relative w-full">
              <Line className="bg-gray_900 h-px mx-auto w-full" />
              <Line className="bg-gray_900 h-2 mb-auto ml-auto mr-[319px] mt-[-1px] rotate-[90deg] w-px z-[1]" />
            </div>
            <Img src="images/img_devider.svg" className="h-2" alt="devider" />
          </div>
          <Line className="absolute bg-gray_900 h-[428px] inset-y-[0] left-[37%] my-auto w-px" />
          <div className="absolute flex flex-col items-start justify-start right-[41%] top-[9%]">
            <Text
              className="font-helveticaneue text-gray_900 tracking-[-0.44px]"
              as="h3"
              variant="h3"
            >
              {props?.solutions}
            </Text>
            <Text
              className="font-helveticaneue mt-[25px] text-gray_900 tracking-[-0.44px]"
              as="h3"
              variant="h3"
            >
              {props?.locations}
            </Text>
            <Text
              className="font-helveticaneue mt-6 text-gray_900 tracking-[-0.44px]"
              as="h3"
              variant="h3"
            >
              {props?.contactus}
            </Text>
            <Text
              className="font-helveticaneue mt-[27px] text-gray_900 tracking-[-0.44px]"
              as="h3"
              variant="h3"
            >
              {props?.language}
            </Text>
          </div>
          <Text
            className="absolute font-helveticaneue font-normal leading-[160.00%] left-[0] text-gray_900_99 top-[37%] w-1/5 sm:w-full"
            as="h6"
            variant="h6"
          >
            {props?.intheblogyou}
          </Text>
          <div className="absolute bottom-[23%] flex sm:flex-col flex-row gap-4 items-center justify-between left-[0] w-[31%]">
            <Input
              wrapClassName="sm:w-full"
              className="font-helveticaneue font-medium p-0 placeholder:text-gray_900_87 text-base text-gray_900_87 text-left w-full"
              name="groupFour"
              placeholder="Your Email"
              shape="CircleBorder32"
              size="sm"
              variant="OutlineGray900"
            ></Input>
            <div className="flex flex-col h-16 items-center justify-start w-16">
              <div className="bg-gray_900 flex flex-row h-16 items-center justify-end p-[17px] rounded-[50%] w-16">
                <Text
                  className="font-bold font-helveticaneue my-[3px] text-center text-white_A700 uppercase"
                  as="h4"
                  variant="h4"
                >
                  {props?.g}
                </Text>
                <Text
                  className="font-bold font-helveticaneue my-[3px] text-center text-white_A700 uppercase"
                  as="h4"
                  variant="h4"
                >
                  {props?.o}
                </Text>
              </div>
            </div>
          </div>
          <div className="absolute bottom-[10%] flex flex-row sm:gap-10 items-center justify-between right-[0] w-[49%]">
            <div className="flex flex-col gap-2.5 items-start justify-start">
              <Text
                className="font-helveticaneue font-medium text-gray_900"
                as="h6"
                variant="h6"
              >
                {props?.privacypolicy}
              </Text>
              <Text
                className="font-helveticaneue font-medium text-gray_900"
                as="h6"
                variant="h6"
              >
                {props?.termsandconditions}
              </Text>
            </div>
            <div className="flex flex-row gap-4 items-center justify-between w-[38%]">
              <Button
                className="flex h-12 items-center justify-center rounded-[50%] w-12"
                size="smIcn"
                variant="icbOutlineGray900"
              >
                <Img
                  src="images/img_ufacebookf.svg"
                  className="h-6"
                  alt="ufacebookf"
                />
              </Button>
              <Button
                className="flex h-12 items-center justify-center rounded-[50%] w-12"
                size="smIcn"
                variant="icbOutlineGray900"
              >
                <Img
                  src="images/img_ulinkedin.svg"
                  className="h-6"
                  alt="ulinkedin"
                />
              </Button>
              <Button
                className="flex h-12 items-center justify-center rounded-[50%] w-12"
                size="smIcn"
                variant="icbOutlineGray900"
              >
                <Img
                  src="images/img_uinstagram.svg"
                  className="h-6"
                  alt="uinstagram"
                />
              </Button>
              <Button
                className="flex h-12 items-center justify-center rounded-[50%] w-12"
                size="smIcn"
                variant="icbOutlineGray900"
              >
                <Img
                  src="images/img_frame_gray_900_48x48.svg"
                  className="h-6"
                  alt="frame_One"
                />
              </Button>
            </div>
          </div>
          <Text
            className="absolute bottom-[9%] font-helveticaneue font-medium left-[0] text-gray_900"
            as="h6"
            variant="h6"
          >
            {props?.p2022spotbusinesOne}
          </Text>
        </div>
      </div>
    </>
  );
};

PrivateOfficePageFooter.defaultProps = {
  privateoffice: "Private office",
  coworkingspace: "Co-working space",
  virtualoffice: "Virtual office",
  meetingroom: "Meeting room",
  partners: "Partners",
  solutions: "Solutions",
  locations: "Locations",
  contactus: "Contact us",
  language: "Enterprise ",
  intheblogyou:
    "In the blog you will find fascinating articles about the life of our this is worxpace, also about future",
  g: "G",
  o: "o",
  privacypolicy: "Privacy Policy",
  termsandconditions: "Terms & Conditions",
  p2022spotbusinesOne: "© 2022 Spotbusiness All rights reserved.",
};

export default PrivateOfficePageFooter;
