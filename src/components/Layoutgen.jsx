import React, { Children } from "react";
import PropTypes from "prop-types";

import Footer from "./Footer/Footer";

const Layoutgen = ({ children }) => {
  return (
    <div className="bg-white_A700 flex flex-col font-helveticaneue items-center justify-end mx-auto p-3 w-full">
      <div className="flex flex-col items-start justify-start max-w-[1312px] mt-3 mx-auto md:px-5 w-full">
        {children}
      </div>
    </div>
  );
};

Layoutgen.propTypes = {};

export default Layoutgen;
