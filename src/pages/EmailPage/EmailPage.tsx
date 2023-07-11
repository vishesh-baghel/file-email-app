import { useEffect, useState } from "react";
import emailApi from '../../services/api/emailApi';
import style from "./EmailPage.module.css";
import { Email } from "../../services/model/email";

export interface EmailPageProps {}

export default function EmailPage(props: EmailPageProps) {
  const [emailId, setEmailId] = useState<string>('');
  const [email, setEmail] = useState<Email>({} as Email);

  useEffect(() => {
    setEmailId(window.location.pathname.split("/").pop() || "");
    getEmailById(emailId);
  }, [ emailId ]);

  const getEmailById = (emailId: string) => {
    if (emailApi.getOne) {
      emailApi.getOne(emailId).then((email) => {
        setEmail(email);
        console.log(email);
      })
    }
  }

  return <div className={style.container}>
    <div className={style.header}>
    <span className={style.from}>From : {email.from}</span>
    <span className={style.subject}>Subject : {email.subject}</span>
    <span className={style.date}>Date : {email.date}</span>
    </div>
    <div className={style.body}>{email.body}</div>
    <div className={style.footer}>{email.attachments}</div>
  </div>;
}
