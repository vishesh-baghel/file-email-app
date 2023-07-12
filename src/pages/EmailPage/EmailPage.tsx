import { useEffect, useState } from "react";
import emailApi from "../../services/api/emailApi";
import style from "./EmailPage.module.css";
import { Email } from "../../services/model/email";
import { useLocation } from "react-router-dom";
import Button from "../../elements/Button/Button";

export interface EmailPageProps {}

export default function EmailPage(props: EmailPageProps) {
  const [emailId, setEmailId] = useState<string>("");
  const [email, setEmail] = useState<Email>({} as Email);
  const [showReplyTextArea, setShowReplyTextArea] = useState<boolean>(false);
  const location = useLocation();

  useEffect(() => {
    const emailId = location.pathname.split("/")[2];
    setEmailId(emailId);
    getEmailById(emailId);
  }, [emailId, location.pathname]);

  const getEmailById = (emailId: string) => {
    if (emailApi.getOne) {
      emailApi.getOne(emailId).then((email) => {
        setEmail(email);
        console.log(email);
      });
    }
  };

  const handleReplyButton = () => {
    setShowReplyTextArea(!showReplyTextArea);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <span className={style.from}>From : {email.from}</span>
        <span className={style.subject}>Subject : {email.subject}</span>
        <span className={style.date}>Date : {email.date}</span>
      </div>
      <div className={style.content}>
        <div className={style.body}>{email.body}</div>
        <div className={style.footer}>Attachments : {email.attachments}</div>
        <div className={style.replyButton}>
          <Button content={"Reply"} onClick={handleReplyButton} />
        </div>
        <div className={style.replyContainer}>
          {showReplyTextArea && (
            <>
              <div className={style.replyBody}>
                <textarea
                  className={style.replyTextArea}
                  placeholder={`Reply to ${email.from}`}
                />
              </div>
              <div className={style.replyAttachments}>
                <input type="file" />
              </div>
              <div className={style.sendButton}>
                <Button content={"Send"} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
