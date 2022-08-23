import React from "react";
import { FieldError } from "react-hook-form";

const ErrorField = ({ error }: { error?: FieldError }): null | JSX.Element => {
  return (
    <p className="text-danger text-left mb-2">
      {error?.message ? error.message : ""}
    </p>
  );
};

export default ErrorField;
