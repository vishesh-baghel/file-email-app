import React, { FC } from "react";

interface ButtonProps {
  content: string;
}

const Button: FC<ButtonProps> = ({ content }) => {
  return (
    <>
      <button>{content}</button>
    </>
  );
};

export default Button;
