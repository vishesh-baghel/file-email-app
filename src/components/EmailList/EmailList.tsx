import * as React from "react";
import style from "./EmailList.module.css";

export interface EmailListProps {}

export default function EmailList(props: EmailListProps) {
  return (
    <div className={style.container}>
      <h1>Email List with some more words</h1>
    </div>
  );
}
