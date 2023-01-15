import React from "react";
import "./Button.scss";

export interface ButtonProps {
  type: "button" | "submit" | "reset";
  className?: string;
  title?: string;
  loading?: boolean;
  icon?: string;
  disabled?: boolean;
  onClick?: (e: any) => void;
  loadingComponent?: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  return (
    <div>
      <button
        type={props.type}
        className={`button ${props.className || ""}`}
        onClick={(e) => {
          props.onClick && props.onClick(e);
        }}
        disabled={props.disabled}
      >
        {props.icon && (
          <img className="icon-img" src={props.icon} alt="icon-button" />
        )}

        {props.loading ? (
          props.loadingComponent ? (
            <p className="image-center">{props.loadingComponent}</p>
          ) : (
            "...loading"
          )
        ) : (
          <p className="btn__title">{props.title}</p>
        )}
      </button>
    </div>
  );
};

export default Button;
