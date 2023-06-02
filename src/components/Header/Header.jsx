import React from "react";
import PropTypes from "prop-types";
import { Button, Img, Line, Text, List } from "..";

function Header(props) {
  return (
    <>
    
    <Line className="bg-gray_900 h-px mb-[-20px] w-full" />
    <header className="flex items-center justify-between w-full p-5">
      <Img
        src="images/img_logo.svg"
        className="h-[52px]"
        alt="logo"
      />
      
      <div className="flex items-center justify-end w-full">
        <div className="grid grid-cols-2 gap-10">
          <div className="flex flex-col items-start gap-3">
            <Line className="bg-gray_900 h-2 w-px" />
            <Button
              className="bg-transparent cursor-pointer font-medium text-center text-gray_900 text-sm"
              size="sm"
            >
              Solutions
            </Button>
            
            <Button
              className="bg-transparent cursor-pointer font-medium text-center text-gray_900 text-sm"
              size="sm"
            >
              Locations
            </Button>
          </div>
          <div className="flex flex-col items-start gap-3">
            <Line className="bg-gray_900 h-2 w-px" />
            <Button
              className="bg-transparent cursor-pointer font-medium text-center text-gray_900 text-sm"
              size="sm"
            >
              Contact us
            </Button>
            
            <Button
              className="bg-transparent cursor-pointer font-medium text-center text-gray_900 text-sm"
              size="sm"
            >
              Enterprise
            </Button>
          </div>
          {/* <div className="flex flex-col items-start gap-3">
            <Line className="bg-gray_900 mt-[-65px] h-2 w-px" />
            <a href="/#" className="font-bold text-gray_900 uppercase">
              <Text as="h6" variant="h6">
                Log IN
              </Text>
            </a>
          </div> */}
        </div>
      </div>
      <div className="flex items-center gap-10">
        <Line className="bg-gray_900 mt-[-65px] h-2 w-px" />
        <a href="/#" className="font-bold text-gray_900 uppercase w-[100px]">
          <Text as="h6" variant="h6">
            Log IN
          </Text>
        </a>
        <div className="flex items-center gap-2">
          <div className="bg-gray_900 h-3 my-[3px] rounded-[50%] w-3"></div>
          <Text
            className="font-bold text-gray_900 uppercase w-[100px]"
            as="h6"
            variant="h6"
          >
            Book a visit
          </Text>
        </div>
      </div>
    </header>
    </>
  );
}

Header.propTypes = {};

export default Header;
