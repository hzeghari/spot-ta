import React from "react";

import { Img, Text } from "..";

const AmButtonMore = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-row gap-3 items-center justify-start w-auto">
          <Text
            className="font-bold font-helveticaneue text-gray_900 uppercase w-auto"
            as="h4"
            variant="h4"
          >
            {props?.viewallsolution}
          </Text>
          <Img
            src="images/img_arrowright.svg"
            className="h-3.5"
            alt="arrowright"
          />
        </div>
      </div>
    </>
  );
};

AmButtonMore.defaultProps = { viewallsolution: "more Amenities" };

export default AmButtonMore;
