import * as React from "react";
import style from "./Inbox.module.css";
import EmailList from "../EmailList/EmailList";

export interface InboxProps {}

export default function Inbox(props: InboxProps) {
  return (
    <div className={style.container}>
      <div className={style.header}>Inbox</div>
      <EmailList />
    </div>
  );
}
