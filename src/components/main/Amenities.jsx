import React from 'react';
import PropTypes from 'prop-types';

import { Button, Img, Input, Line, Text, List } from "..";
import AmButtonMore from '../AmButtonMore';

const amenities = [
  [
    { src: 'images/img_frame.svg', alt: 'frame', text: 'Tennis' },
    { src: 'images/img_frame_gray_900.svg', alt: 'frame_One', text: 'Swimming pool' },
    { src: 'images/img_frame_gray_900_32x32.svg', alt: 'frame_Two', text: 'Wellness room' },
    { src: 'images/img_frame_32x32.svg', alt: 'frame_Three', text: 'Сoffee machine' },
  ],
  [
    { src: 'images/img_frame_1.svg', alt: 'frame', text: 'Fitness Center' },
    { src: 'images/img_frame_2.svg', alt: 'frame_One', text: 'Event space' },
    { src: 'images/img_frame_3.svg', alt: 'frame_Two', text: 'Basketball' },
    { src: 'images/img_frame_4.svg', alt: 'frame_Three', text: 'Air conditioner' },
  ],
  [
    { src: 'images/img_frame_5.svg', alt: 'frame', text: 'Wardrobe' },
    { src: 'images/img_frame_6.svg', alt: 'frame_One', text: 'Smoking area' },
    { src: 'images/img_frame_7.svg', alt: 'frame_Two', text: 'Restaurant' },
    { src: 'images/img_frame_8.svg', alt: 'frame_Three', text: 'Cleaning services' },
  ],
];

function Amenities(props) {
  return (
    <div className="flex md:flex-col flex-row font-helveticaneue md:gap-10 items-start justify-between mt-6 w-full">
      <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[11px] w-[66%] md:w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="flex flex-col items-center justify-start w-full">
            <div className="flex flex-col gap-[19px] items-start justify-start w-full">
              <div className="flex flex-col relative w-full">
                <Line className="bg-gray_900 h-px mx-auto rotate-[-180deg] w-full" />
                <Line className="bg-gray_900 h-2 mb-auto ml-[34px] mt-[-1px] rotate-[-180deg] w-px z-[1]" />
                <Line className="bg-gray_900 h-2 mb-auto ml-[299px] mt-[-8px] rotate-[-180deg] w-px z-[1]" />
                <Line className="bg-gray_900 h-2 mb-auto ml-auto mr-[249px] mt-[-8px] rotate-[-180deg] w-px z-[1]" />
              </div>
              <div className="flex flex-row gap-[31px] items-center justify-start w-[15%] md:w-full">
                <Text
                  className="font-medium text-gray_900"
                  as="h5"
                  variant="h5"
                >
                  02
                </Text>
                <Text
                  className="font-medium text-gray_900"
                  as="h5"
                  variant="h5"
                >
                  Amenities
                </Text>
              </div>
            </div>
          </div>
        </div>
        <List
          className="sm:flex-col flex-row md:gap-10 gap-[136px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 mt-[74px] w-[96%]"
          orientation="horizontal"
        >
          {amenities.map((amenityGroup, index) => (
            <div key={index} className="flex flex-col gap-8 items-start justify-start w-auto">
              {amenityGroup.map((amenity, idx) => (
                <div key={idx} className="flex flex-row gap-5 items-center justify-start w-max">
                  <Img
                    src={amenity.src}
                    className="h-8 w-8"
                    alt={amenity.alt}
                  />
                  <Text
                    className="font-normal text-center text-gray_900 w-auto"
                    as="h4"
                    variant="h4"
                  >
                    {amenity.text}
                  </Text>
                </div>
              ))}
            </div>
          ))}
        </List>
        <AmButtonMore
          className="flex flex-col items-center justify-start mt-[72px] sm:w-full"
          viewallsolution="more Amenities"
        />
      </div>
          <div
              className="bg-cover bg-no-repeat flex md:flex-1 flex-col h-[126px] items-center justify-start p-6 sm:px-5 w-[29%] md:w-full"
              style={{ backgroundImage: "url('images/img_info.svg')" }}
          >
              <div className="flex flex-row gap-4 items-start justify-start w-[96%] md:w-full">
                  <Img
                      src="images/img_frame_9.svg"
                      className="h-8 w-8"
                      alt="frame"
                  />
                  <Text
                      className="font-medium leading-[160.00%] text-gray_900 w-[85%] sm:w-full"
                      as="h5"
                      variant="h5"
                  >
                      If you book a private office for more than a day, then you
                      will have 2 free hours of meeting room available
                  </Text>
              </div>
          </div>
    </div>
  );
}

Amenities.propTypes = {}

export default Amenities;
