import style from "./EmailStack.module.css";
import React, { useState } from "react";
import { Email } from "../../services/model/email";

export interface EmailStackProps {
  emails?: Email[];
  selectedEmails?: React.Dispatch<React.SetStateAction<string[]>>;
  showToolbar?: React.Dispatch<React.SetStateAction<boolean>>;
  emailItemCSS?: string;
  setEmailItemCSS?: React.Dispatch<React.SetStateAction<string>>;
  selectAll?: boolean;
}

interface EmailItemProps {
  email: Email;
  selectAll?: boolean;
  emailItemCSS?: string;
  setEmailItemCSS?: React.Dispatch<React.SetStateAction<string>>;
  onSelect: (emailId: string, selected: boolean) => void;
}

const EmailItem = (props: EmailItemProps) => {
  const [selected, setSelected] = useState(false);

  const handleEmailItemCheckbox = () => {
    props.onSelect(props.email.id, !selected);

    // setSelected(!selected && props.selectAll ? true : !selected);
    setSelected(!selected);
    if (selected) {
      props.setEmailItemCSS && props.setEmailItemCSS(style.emailItemContainerOpened);
    } else {
      props.setEmailItemCSS && props.setEmailItemCSS(style.emailItemContainer);
    }
  };

  console.log(props.emailItemCSS);

  return (
    <div className={props.emailItemCSS} >
      <div className={style.emailItemCheckbox}>
        <input
          type="checkbox"
          checked={selected}
          onChange={handleEmailItemCheckbox}
        />
      </div>
      <div className={style.emailItemSender}>{props.email.from}</div>
      <div className={style.emailItemSubject}>{props.email.subject}</div>
      <div className={style.emailItemBody}>{props.email.body}</div>
      <div className={style.emailItemDateOrTime}>{props.email.date}</div>
    </div>
  );
};

export default function EmailStack(props: EmailStackProps) {
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  // const [selectAll, setSelectAll] = useState(props.selectAll ? true : false);

  const handleEmailSelect = (emailId: string, selected: boolean) => {
    let updatedSelectedEmails: string[];

    if (selected) {
      updatedSelectedEmails = [...selectedEmails, emailId];
    } else {
      updatedSelectedEmails = selectedEmails.filter((id) => id !== emailId);
    }

    setSelectedEmails(updatedSelectedEmails);
    props.selectedEmails && props.selectedEmails(updatedSelectedEmails);
    props.showToolbar && props.showToolbar(updatedSelectedEmails.length > 0);
    // if (props.emails) {
    //   setSelectAll(updatedSelectedEmails.length === props.emails.length);
    // }
  };

  // const handleSelectAll = () => {
  //   let allEmailIds: string[] = [];
  //   if (props.emails) {
  //     allEmailIds = props.emails.map((email) => email.id);
  //   }

  //   if (selectAll) {
  //     setSelectedEmails([]);
  //   } else {
  //     setSelectedEmails(allEmailIds);
  //   }

  //   setSelectAll(!selectAll);
  // };

  return (
    <div className={style.container}>
      {props.emails &&
        props.emails.map((email) => {
          return (
            <>
              <EmailItem
                key={email.id}
                email={email}
                onSelect={handleEmailSelect}
                emailItemCSS={props.emailItemCSS}
                setEmailItemCSS={props.setEmailItemCSS}
              />
            </>
          );
        })}
    </div>
  );
}
