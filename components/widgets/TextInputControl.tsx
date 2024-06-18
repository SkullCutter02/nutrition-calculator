import React, { HTMLInputTypeAttribute } from "react";

interface Props {
  placeholder: string;
  name: string;
  backgroundColor?: string;
  borderColor?: string;
  borderColorFocus?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  fontWeight?: string;
  width?: string;
  minWidth?: string;
  required?: boolean;
  inputType?: HTMLInputTypeAttribute;
  register?: any;
  error?: {
    message?: string;
  };
}

const PrimaryTextInput: React.FC<Props> = ({
  placeholder,
  name,
  backgroundColor = "var(--secondaryBackgroundColor)",
  borderColor = "var(--borderColor)",
  borderColorFocus = borderColor,
  padding = "17px 25px",
  margin = "0",
  borderRadius = "200px",
  fontSize = "0.8rem",
  fontWeight = "normal",
  width = "100%",
  minWidth = "0",
  required = true,
  inputType = "text",
  register,
  error,
}) => {
  return (
    <>
      <div>
        <input
          className={error?.message && "invalid"}
          type={inputType}
          name={name}
          placeholder={placeholder}
          required={required}
          {...(register && register(name))}
        />
        <p className="err-msg">{error?.message}</p>
      </div>

      <style jsx>{`
        div {
          margin: ${margin};
          width: ${width};
          min-width: ${minWidth};
        }

        input {
          background: ${backgroundColor};
          padding: ${padding};
          box-shadow: 0 0 0 1px ${borderColor};
          border-radius: ${borderRadius};
          font-size: ${fontSize};
          font-weight: ${fontWeight};
          width: 100%;
          border: none;
          outline: none;
        }

        input:focus {
          box-shadow: 0 0 0 1px ${borderColorFocus};
        }

        input.invalid {
          border-color: var(--errorColor);
        }

        .err-msg {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default PrimaryTextInput;
