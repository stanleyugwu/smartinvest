import React from "react";
import { FieldError } from "react-hook-form";

export type ErrorFieldProps = {
  error?: FieldError;
} & React.HTMLAttributes<HTMLParagraphElement>

const ErrorField = ({
  error,
  ...others
}: ErrorFieldProps): null | JSX.Element => {
  return (
    <p
      className="text-danger text-left mb-2"
      {...(others)}
    >
      {error?.message ? error.message : ""}
    </p>
  );
};

export default ErrorField;
