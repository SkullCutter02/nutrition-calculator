import React from "react";

interface Props {
  placeholder: string;
  name: string;
  backgroundColor?: string;
  borderColor?: string;
  padding?: string;
  margin?: string;
  borderRadius?: string;
  fontSize?: string;
  width?: string;
  height?: string;
  minWidth?: string;
  required?: boolean;
  register?: any;
  error?: {
    message?: string;
  };
}

const PrimaryTextArea: React.FC<Props> = ({
  placeholder,
  name,
  backgroundColor = "var(--secondaryBackgroundColor)",
  borderColor = "var(--borderColor)",
  padding = "17px",
  margin = "0",
  borderRadius = "0",
  fontSize = "0.8rem",
  width = "100%",
  height = "150px",
  minWidth = "0",
  required = true,
  register,
  error,
}) => {
  return (
    <>
      <div>
        <textarea
          className={error?.message && "invalid"}
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

        textarea {
          background: ${backgroundColor};
          border: 2px solid ${borderColor};
          padding: ${padding};
          border-radius: ${borderRadius};
          font-size: ${fontSize};
          width: 100%;
          height: ${height};
        }

        textarea.invalid {
          border-color: var(--errorColor);
        }

        .err-msg {
          margin-top: 10px;
        }
      `}</style>
    </>
  );
};

export default PrimaryTextArea;
