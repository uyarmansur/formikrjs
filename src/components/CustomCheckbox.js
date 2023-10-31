import { useField } from "formik";
import React from "react";

function CustomCheckbox({ className, span, ...props }) {
  const [field, meta] = useField(props);
  console.log(field.value);
  return (
    <>
      <div className={className}>
        <input
          {...field}
          {...props}
          className={meta.error ? "inputError" : ""}
        />
        <span>{span}</span>
      </div>
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}

export default CustomCheckbox;
