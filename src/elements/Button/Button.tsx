import React, { FC } from "react";
import { Link } from "react-router-dom";
import style from "./Button.module.css"; // omre
interface ButtonProps {
  content: string | JSX.Element;
  link?: string;
  onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ content, link, onClick }) => {
  return (
    <>
      {link ? (
        <Link to={link} className={style.link}>
          <button className={style.text} onClick={onClick}>
            {content}
          </button>
        </Link>
      ) : (
        <button className={style.text} onClick={onClick}>
          {content}
        </button>
      )}
    </>
  );
};

export default Button;
