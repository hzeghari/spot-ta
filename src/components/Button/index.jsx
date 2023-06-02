import React from "react";
import PropTypes from "prop-types";

const shapes = {
  CircleBorder28: "rounded-[28px]",
  icbCircleBorder24: "rounded-[24px]",
  icbCircleBorder28: "rounded-[28px]",
};
const variants = {
  FillGray900: "bg-gray_900 text-white_A700",
  icbOutlineGray900: "border border-gray_900 border-solid",
  icbFillWhiteA700: "bg-white_A700",
};
const sizes = { sm: "", md: "p-[19px]", smIcn: "p-3", mdIcn: "p-4" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "CircleBorder28",
    "icbCircleBorder24",
    "icbCircleBorder28",
  ]),
  variant: PropTypes.oneOf([
    "FillGray900",
    "icbOutlineGray900",
    "icbFillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md", "smIcn", "mdIcn"]),
};

Button.defaultProps = { className: "", shape: "", variant: "", size: "" };
export { Button };
