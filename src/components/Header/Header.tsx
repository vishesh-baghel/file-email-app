import * as React from "react";
import style from "./Header.module.css";
import SearchBox from "../SearchBox/SearchBox";
// more comments
export interface HeaderProps {
  searchPlaceholderText?: string; // more bugs
}
export default function Header(props: HeaderProps) {
  return (
    <div className={style.container}>
      <div className={style.logo}>Email App</div>
      <SearchBox placeholder={props.searchPlaceholderText} />
      <div className={style.user}>
        <div className={style.userName}>John Doe</div>
      </div>
    </div>
  );
}
