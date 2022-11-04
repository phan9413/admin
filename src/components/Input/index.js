import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineIndigo51: "bg-white_A700 border border-indigo_51 border-solid",
  OutlineIndigo511_2: "border border-indigo_51 border-solid",
  FillDeeporange300: "bg-deep_orange_300",
  FillGray51: "bg-gray_51",
  srcOutlineBluegray200:
    "bg-white_A700 border border-bluegray_200 border-solid",
  srcFillGray51: "bg-gray_51",
  srcOutlineBlack9000c: "bg-white_A700 shadow-bs",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  CustomBorderBL4:
    "rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px]",
  RoundedBorder8: "rounded-radius8",
  srcRoundedBorder4: "rounded-radius4",
};
const sizes = {
  sm: "lg:pb-[4px] xl:pb-[5px] pb-[6px] 3xl:pb-[7px] xl:pt-[11px] pt-[13px] 3xl:pt-[15px] lg:pt-[9px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px]",
  md: "lg:pb-[15px] xl:pb-[19px] pb-[22px] 3xl:pb-[26px] lg:pt-[12px] xl:pt-[15px] pt-[17px] 3xl:pt-[20px] lg:px-[12px] xl:px-[15px] px-[17px] 3xl:px-[20px]",
  lg: "lg:p-[13px] xl:p-[16px] p-[19px] 3xl:p-[22px]",
  xl: "lg:pb-[11px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pt-[14px] xl:pt-[18px] pt-[21px] 3xl:pt-[25px] lg:px-[11px] xl:px-[14px] px-[16px] 3xl:px-[19px]",
  "2xl": "lg:p-[16px] xl:p-[20px] p-[23px] 3xl:p-[27px]",
  smSrc: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  mdSrc:
    "lg:pb-[11px] xl:pb-[14px] pb-[16px] 3xl:pb-[19px] lg:pt-[15px] xl:pt-[19px] pt-[22px] 3xl:pt-[26px] lg:px-[11px] xl:px-[14px] px-[16px] 3xl:px-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "CustomBorderBL4",
    "RoundedBorder8",
    "srcRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "OutlineIndigo51",
    "OutlineIndigo511_2",
    "FillDeeporange300",
    "FillGray51",
    "srcOutlineBluegray200",
    "srcFillGray51",
    "srcOutlineBlack9000c",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "2xl", "smSrc", "mdSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
