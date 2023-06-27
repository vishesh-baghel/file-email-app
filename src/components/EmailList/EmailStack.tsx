import * as React from "react";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import style from "./EmailStack.module.css";
import emailList from "../../data";

export interface EmailStackProps {}

interface EmailItemProps {
  sender?: string;
  subject?: string;
  body?: string;
  dateOrTime?: string;
}

const EmailItem = (props: EmailItemProps) => {
  return (
    <div className={style.emailItemContainer}>
      <div className={style.emailItemCheckbox}>
        <CheckBoxOutlineBlankIcon fontSize="small" />
      </div>
      <div className={style.emailItemSender}>{props.sender}</div>
      <div className={style.emailItemSubject}>{props.subject}</div>
      <div className={style.emailItemBody}>{props.body}</div>
      <div className={style.emailItemDateOrTime}>{props.dateOrTime}</div>
    </div>
  );
};

export default function EmailStack(props: EmailStackProps) {
  return (
    <div className={style.container}>
      {emailList.map((email) => {
        return (
          <EmailItem
            sender={email.sender}
            subject={email.subject}
            body={email.body}
            dateOrTime={email.dateOrTime}
          />
        );
      })}
    </div>
  );
}
