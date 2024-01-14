import { useEffect, useState } from "react"; // more
import emailApi from "../../services/api/emailApi";
import style from "./EmailPage.module.css";
import { Email } from "../../services/model/email";
import { useLocation } from "react-router-dom"; // more
import Button from "../../elements/Button/Button";
import Toolbar from "../../components/Toolbar/Toolbar"; // more comments
// more
export interface EmailPageProps {}
// new
const intialEmail: Email = {
  id: "", // ohw many time do I have to do this??
  from: "",
  to: [],
  cc: [],
  bcc: [],
  subject: "",
  message: "",
  date: new Date(),
  folder: "",
  read: false,
  starred: false,
  important: false,
  labels: [],
  attachments: [],
};

export default function EmailPage(props: EmailPageProps) {
  const [email, setEmail] = useState<Email>(intialEmail);
  const [showReplyTextArea, setShowReplyTextArea] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const location = useLocation();

  useEffect(() => {
    const emailId = location.pathname.split("/")[2];
    getEmailById(emailId);
  }, [location.pathname]);

  const getEmailById = (emailId: string) => {
    if (emailApi.getOne) {
      emailApi.getOne(emailId).then((email) => {
        setEmail(email);
      });
    }
  };

  const handleReplyButton = () => {
    setShowReplyTextArea(!showReplyTextArea);
    console.log(email.from);
  };

  return (
    <div className={style.container}>
      <div className={style.header}>
        <span className={style.subject}>{email.subject}</span>
        <span className={style.from}>{email.from}</span>
        <span className={style.date}>{email.date.getDate()}</span>
      </div>
      <div className={style.content}>
        <div className={style.body}>{}</div>
        <div className={style.footer}>
          Attachments :{" "}
          {email.attachments && email.attachments.length > 0 ? "Yes" : "No"}
        </div>
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
              <Toolbar
                selectedFiles={selectedFiles}
                setSelectedFiles={setSelectedFiles}
              />
              <div className={style.sendButton}>
                <Button content="Send" />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
