import PropTypes from "prop-types";
import React from "react";
import { TypeChevronDown } from "./TypeChevronDown";
import "./style.css";

export const SelectField = ({
  size,
  isDisabled,
  labelHidden,
  variation,
  className,
  text = "Label",
  text1 = "Placeholder",
  inputType = "text",
  inputType1 = "text",
}) => {
  return (
    <div className={`select-field ${size} ${className}`}>
      {!labelHidden && <div className="label">{text}</div>}

      <div className="input-group">
        {variation === "default" && (
          <div className={`input is-disabled-${isDisabled} size-0-${size}`}>
            <input className="placeholder" placeholder={text1} type={inputType} />
            <TypeChevronDown className={`${size === "small" ? "class" : "class-2"}`} />
          </div>
        )}

        {variation === "quiet" && (
          <>
            <div className="div">
              <input className="placeholder-2" placeholder={text1} type={inputType1} />
              <TypeChevronDown className={`${size === "small" ? "class" : "class-2"}`} />
            </div>
            <img
              className="border"
              alt="Border"
              src={
                size === "default" && !labelHidden
                  ? "border-2.svg"
                  : !labelHidden && size === "small"
                  ? "border-4.svg"
                  : labelHidden && size === "large"
                  ? "image.svg"
                  : size === "default" && labelHidden
                  ? "border-3.svg"
                  : size === "small" && labelHidden
                  ? "border-5.svg"
                  : "border.svg"
              }
            />
          </>
        )}
      </div>
    </div>
  );
};

SelectField.propTypes = {
  size: PropTypes.oneOf(["large", "small", "default"]),
  isDisabled: PropTypes.bool,
  labelHidden: PropTypes.bool,
  variation: PropTypes.oneOf(["quiet", "default"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  inputType: PropTypes.string,
  inputType1: PropTypes.string,
};
