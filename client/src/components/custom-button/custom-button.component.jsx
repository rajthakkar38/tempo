import React from "react";
import "./custom-button.component.scss";

export const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...other
}) => {
  return (
    <button
      className={`${inverted ? "inverted" : ""} ${
        isGoogleSignIn ? "google-sign-in" : ""
      } custom-button`}
      {...other}
    >
      {children}
    </button>
  );
};
