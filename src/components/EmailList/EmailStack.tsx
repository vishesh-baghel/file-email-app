import style from "./EmailStack.module.css";
import emailApi from "../../services/api/email";
import { useState, useEffect } from "react";
import { Email } from "../../services/model/email";

export interface EmailStackProps {
  emails?: Email[];
  selectAll?: boolean;
}

interface EmailItemProps {
  email: Email;
  selected: boolean;
  onSelect: (emailId: string, selected: boolean) => void;
}

const EmailItem = (props: EmailItemProps) => {
  const handleEmailItemCheckbox = () => {
    props.onSelect(props.email.id, !props.selected);
  };

  return (
    <div className={style.emailItemContainer}>
      <div className={style.emailItemCheckbox}>
        <input
          type="checkbox"
          checked={props.selected}
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
  const [emailList, setEmailList] = useState<Email[]>([]);
  const [selectedEmails, setSelectedEmails] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleEmailSelect = (emailId: string, selected: boolean) => {
    let updatedSelectedEmails: string[];

    if (selected) {
      updatedSelectedEmails = [...selectedEmails, emailId];
    } else {
      updatedSelectedEmails = selectedEmails.filter((id) => id !== emailId);
    }

    setSelectedEmails(updatedSelectedEmails);
    if (props.emails) {
      setSelectAll(updatedSelectedEmails.length === props.emails.length);
    }
  };

  const handleSelectAll = () => {
    let allEmailIds: string[] = [];
    if (props.emails) {
    allEmailIds = props.emails.map((email) => email.id);
    }

    if (selectAll) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(allEmailIds);
    }

    setSelectAll(!selectAll);
  };

  useEffect(() => {
    getEmails();
  }, []);

  const getEmails = () => {
    if (emailApi.getAll) {
      return emailApi.getAll().then((response) => {
        setEmailList(response);
      });
    }
  };

  return (
    <div className={style.container}>
      {emailList.map((email) => {
        return (
          <>
            <EmailItem
              key={email.id}
              email={email}
              selected={selectedEmails.includes(email.id)}
              onSelect={handleEmailSelect}
            />
          </>
        );
      })}
    </div>
  );
}
