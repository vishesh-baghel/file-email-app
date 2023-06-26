import * as React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import style from "./Outbox.module.css";
import EmailStack from "../EmailList/EmailStack";

export interface OutboxProps {
  searchPlaceholderText?: string;
  setSearchPlaceholderText?: React.Dispatch<React.SetStateAction<string>>;
}

export default function Outbox(props: OutboxProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/outbox") {
      props.setSearchPlaceholderText &&
        props.setSearchPlaceholderText("Search Outbox");
    }
  });

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>Outbox</div>
      </div>
      <EmailStack />
    </div>
  );
}
