import React from "react";
const variantClasses = {
  h1: "font-bold lg:text-[19px] xl:text-[24px] text-[28px] 3xl:text-[33px]",
  h2: "font-bold lg:text-[17px] xl:text-[21px] text-[24px] 3xl:text-[28px]",
  h3: "font-medium lg:text-[14px] xl:text-[17px] text-[20px] 3xl:text-[24px]",
  h4: "lg:text-[12px] xl:text-[16px] text-[18px] 3xl:text-[21px]",
  h5: "lg:text-[11px] xl:text-[14px] text-[16px] 3xl:text-[19px]",
  h6: "xl:text-[12px] text-[14px] 3xl:text-[16px] lg:text-[9px]",
  body1: "xl:text-[10px] text-[12px] 3xl:text-[14px] lg:text-[8px]",
  body2: "font-medium text-[10px] 3xl:text-[12px] lg:text-[7px] xl:text-[8px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
