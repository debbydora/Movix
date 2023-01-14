import React from "react";
import "./Form.scss";

export interface FormProps {
  children?: React.ReactNode;
  onSubmit?: (e: any) => void;
  title?: string;
  description?: string;
}
const Form = (props: FormProps) => {
  return (
    <div className="form">
      <div className="form-container-heading">
        <p className="title">{props.title}</p>
        <p className="description">{props.description}</p>
      </div>
      <form
        className="form-container__content"
        onSubmit={(e) => props.onSubmit && props.onSubmit(e)}
      >
        {props.children}
      </form>
    </div>
  );
};

type InputProps = {
  name?: string;
  value?: string;
  className?: string;
  label?: string;
  inputClassName?: string;
  onChange?: (e: any) => void;
  placeHolder?: string;
  error?: string;
  required?: boolean;
  type?: string;
  allowShowPassword?: boolean;
};

function Input({
  value,
  name,
  placeHolder,
  onChange,
  error,
  className,
  inputClassName,
  label,
  required,
  type,
  allowShowPassword,
}: InputProps) {
  const [showPassword, setShowPassword] = React.useState(false);
  const inputProps = {
    name,
    value,
    required,
    className: `input ${inputClassName ? inputClassName : ""}`,
    onChange: (e: any) => onChange && onChange(e),
    placeholder: placeHolder,
    autoComplete: "off",
  };

  return (
    <div
      className={`form-container__contentInput ${className ? className : ""}`}
    >
      <small>{label}</small>
      {type === "password" && allowShowPassword ? (
        <div className="password-eye-wrap">
          <input {...inputProps} type={showPassword ? "text" : "password"} />
          <img
            src={require("../../../assets/images/Vector.svg").default}
            alt="show password"
            className="pointer"
            onMouseDown={() => setShowPassword(true)}
            onMouseUp={() => setShowPassword(false)}
          />
        </div>
      ) : (
        <input {...inputProps} />
      )}

      {error ? <p>{error}</p> : ""}
    </div>
  );
}
Form.Input = Input;

export default Form;
