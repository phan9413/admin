import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";
const variants = {
  FillGreen7001_2: "bg-green_700",
  FillRed600: "bg-red_600",
  FillGreen700: "bg-green_700",
  FillIndigo400: "bg-indigo_400",
  FillAmber300: "bg-amber_300",
  FillRed6001_2: "bg-red_600",
  FillWhiteA700: "bg-white_A700",
};

const sizes = {
  sm: "lg:pb-[4px] xl:pb-[5px] pb-[6px] 3xl:pb-[7px] pt-[1px] px-[1px]",
  md: "lg:pt-[4px] xl:pt-[5px] pt-[6px] 3xl:pt-[7px]",
};
const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      checked = false,
      errors = [],
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    React.useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}  ${variants[variant] || ""} ${
              sizes[size] || ""
            }`}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);
Radio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    "FillGreen7001_2",
    "FillRed600",
    "FillGreen700",
    "FillIndigo400",
    "FillAmber300",
    "FillRed6001_2",
    "FillWhiteA700",
  ]),
  size: PropTypes.oneOf(["sm", "md"]),
};

Radio.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "",
  size: "",
};

export { Radio };
