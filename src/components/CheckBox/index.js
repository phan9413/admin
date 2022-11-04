import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray40087: "outline outline-[0.7px] outline-bluegray_400_87",
};

const sizes = {
  sm: "p-[4px]",
  md: "lg:pt-[4px] xl:pt-[6px] pt-[7px] 3xl:pt-[8px]",
};

const CheckBox = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      errors = [],
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}  ${variants[variant] || ""} ${
              sizes[size] || ""
            }`}
            ref={ref}
            type="checkbox"
            name={name}
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

CheckBox.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf(["OutlineBluegray40087"]),
  size: PropTypes.oneOf(["sm", "md"]),
};
CheckBox.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "",
  size: "",
};

export { CheckBox };
