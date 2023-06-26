import React, { FC } from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.css";

interface ButtonProps {
  content: string | JSX.Element;
  link?: string;
}

const Button: FC<ButtonProps> = ({ content, link }) => {
  return (
    <>
      {link ? (
        <Link to={link} className={style.link}>
          <button className={style.text}>{content}</button>
        </Link>
      ) : (
        <button className={style.text}>{content}</button>
      )}
    </>
  );
};

export default Button;
