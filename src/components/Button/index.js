import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  CircleBorder28: "rounded-radius28",
  CircleBorder24: "rounded-radius24035",
  CircleBorder20: "rounded-radius20",
  RoundedBorder10: "rounded-radius10",
  icbRoundedBorder4: "rounded-radius4",
  icbCircleBorder20: "rounded-radius20",
  icbCircleBorder24: "rounded-radius24",
  icbCircleBorder28: "rounded-radius28",
  icbCircleBorder16: "rounded-radius16",
  icbCircleBorder31: "rounded-radius31",
  icbCircleBorder40: "rounded-radius40",
  icbRoundedBorder6: "rounded-radius6665",
};
const variants = {
  FillGray105: "bg-gray_105 text-indigo_400",
  FillDeeporange300: "bg-deep_orange_300 text-white_A700",
  OutlineBluegray200:
    "bg-white_A700 border border-bluegray_200 border-solid shadow-bs text-bluegray_800",
  FillGray51: "bg-gray_51 text-bluegray_800",
  FillWhiteA700: "bg-white_A700 text-deep_orange_300",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  OutlineIndigo51: "border border-indigo_51 border-solid text-bluegray_800",
  FillIndigo400: "bg-indigo_400 text-white_A700",
  FillRed600: "bg-red_600 text-white_A700",
  FillGreen700: "bg-green_700 text-white_A700",
  FillAmber300: "bg-amber_300 text-white_A700",
  OutlineBluegray900:
    "border border-bluegray_900 border-solid text-bluegray_900",
  FillRed54: "bg-red_54 text-deep_orange_300",
  FillBlack90066: "bg-black_900_66 text-white_A700",
  FillRed40019: "bg-red_400_19 text-red_600",
  FillIndigo40019: "bg-indigo_400_19 text-indigo_400",
  FillDeeporange50: "bg-deep_orange_50 text-deep_orange_300",
  icbOutlineIndigo51: "border border-indigo_51 border-solid",
  icbFillWhiteA700: "bg-white_A700",
  icbFillGray103: "bg-gray_103",
  icbFillYellow50: "bg-yellow_50",
  icbFillGray104: "bg-gray_104",
  icbFillGray52: "bg-gray_52",
  icbFillGray51: "bg-gray_51",
  icbFillRed55: "bg-red_55",
  icbOutlineGreen700: "border-2 border-green_700 border-solid",
  icbOutlineBlack9000c: "bg-white_A700 shadow-bs",
  icbOutlineWhiteA700:
    "bg-deep_orange_300 outline outline-[4px] outline-white_A700",
  icbOutlineBluegray400:
    "bg-white_A700 outline outline-[0.9px] outline-bluegray_400",
  icbOutlineDeeporange300:
    "bg-white_A700 outline outline-[0.9px] outline-deep_orange_300",
  icbOutlineBluegray800:
    "bg-white_A700 outline outline-[0.9px] outline-bluegray_800",
  icbFillDeeporange300: "bg-deep_orange_300",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  md: "p-[11px] 3xl:p-[13px] lg:p-[7px] xl:p-[9px]",
  lg: "lg:p-[12px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  xl: "lg:p-[14px] xl:p-[18px] p-[21px] 3xl:p-[25px]",
  smIcn: "p-[2px]",
  mdIcn: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  lgIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  xlIcn: "xl:p-[11px] p-[13px] 3xl:p-[15px] lg:p-[9px]",
  "2xlIcn": "lg:p-[12px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  "3xlIcn": "lg:p-[18px] xl:p-[23px] p-[26px] 3xl:p-[31px]",
};

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
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
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
    "RoundedBorder4",
    "CircleBorder28",
    "CircleBorder24",
    "CircleBorder20",
    "RoundedBorder10",
    "icbRoundedBorder4",
    "icbCircleBorder20",
    "icbCircleBorder24",
    "icbCircleBorder28",
    "icbCircleBorder16",
    "icbCircleBorder31",
    "icbCircleBorder40",
    "icbRoundedBorder6",
  ]),
  variant: PropTypes.oneOf([
    "FillGray105",
    "FillDeeporange300",
    "OutlineBluegray200",
    "FillGray51",
    "FillWhiteA700",
    "FillBluegray900",
    "OutlineIndigo51",
    "FillIndigo400",
    "FillRed600",
    "FillGreen700",
    "FillAmber300",
    "OutlineBluegray900",
    "FillRed54",
    "FillBlack90066",
    "FillRed40019",
    "FillIndigo40019",
    "FillDeeporange50",
    "icbOutlineIndigo51",
    "icbFillWhiteA700",
    "icbFillGray103",
    "icbFillYellow50",
    "icbFillGray104",
    "icbFillGray52",
    "icbFillGray51",
    "icbFillRed55",
    "icbOutlineGreen700",
    "icbOutlineBlack9000c",
    "icbOutlineWhiteA700",
    "icbOutlineBluegray400",
    "icbOutlineDeeporange300",
    "icbOutlineBluegray800",
    "icbFillDeeporange300",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "3xlIcn",
  ]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
