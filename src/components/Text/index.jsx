import React from "react";

const variantClasses = {
  h1: "font-medium sm:text-5xl md:text-5xl text-[64px]",
  h2: "font-medium md:text-3xl sm:text-[28px] text-[32px]",
  h3: "font-medium text-[22px] sm:text-lg md:text-xl",
  h4: "text-lg",
  h5: "text-base",
  h6: "text-sm",
};

const Text = ({ children, className = "", variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
