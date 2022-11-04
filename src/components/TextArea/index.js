import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineIndigo51: "bg-white_A700 border border-indigo_51 border-solid",
};
const shapes = { RoundedBorder4: "rounded-radius4" };
const sizes = {
  sm: "lg:pb-[24px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pt-[14px] xl:pt-[17px] pt-[20px] 3xl:pt-[24px] lg:px-[14px] xl:px-[17px] px-[20px] 3xl:px-[24px]",
};
const TextArea = React.forwardRef(
  (
    {
      className,
      name,
      placeholder,
      children,
      shape,
      variant,
      size,
      errors,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={`${className} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
          name={name}
          placeholder={placeholder}
          {...restProps}
        />
        {!!errors && <ErrorMessage errors={errors} />}

        {children}
      </>
    );
  }
);
TextArea.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4"]),
  variant: PropTypes.oneOf(["OutlineIndigo51"]),
  size: PropTypes.oneOf(["sm"]),
};
TextArea.defaultProps = {
  className: "",
  name: "",
  placeholder: "",
  shape: "RoundedBorder4",
  variant: "OutlineIndigo51",
  size: "sm",
};
export { TextArea };
