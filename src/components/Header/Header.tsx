import * as React from "react";
import style from "./Header.module.css";
import SearchBox from "../SearchBox/SearchBox";

export interface HeaderProps {}

export default function Header(props: HeaderProps) {
  return (
    <div className={style.container}>
      <div className={style.logo}>Email App</div>
      <SearchBox placeholder="Search mails in your inbox" />
      <div className={style.user}>
        <div className={style.userName}>John Doe</div>
      </div>
    </div>
  );
}
