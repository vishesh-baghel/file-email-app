import Button from "../../elements/Button/Button";
import style from "./Compose.module.css";
import Toolbar from "../../components/Toolbar/Toolbar";
import { useState } from "react";
import { CancelOutlined } from "@mui/icons-material";
import emailApi from "../../services/api/emailApi";
import { Email } from "../../services/model/email";

export interface ComposeProps {}

interface FormValues {
  to: string[];
  cc?: string[];
  bcc?: string[];
  subject: string;
  message: string;
}

const initialValues: FormValues = {
  to: [],
  cc: [],
  bcc: [],
  subject: "",
  message: "",
};

export default function Compose(props: ComposeProps) {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [showCc, setShowCc] = useState<boolean>(false);
  const [showBcc, setShowBcc] = useState<boolean>(false);
  const [emailIds, setEmailIds] = useState<string[]>([]);
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [to, setTo] = useState<string>("");
  const [cc, setCc] = useState<string>("");
  const [bcc, setBcc] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleEmailIdSelector = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const emailId = event.target.value;
    if (emailId.endsWith(" ")) {
      setEmailIds([...emailIds, emailId.trim()]);
    }
  };

  const handleDiscardButton = () => {
    setFormValues(initialValues);
  };
  // more comments
  const handleSendButton = () => {
    formValues.to = to.split(" ");
    formValues.cc = cc.split(" ");
    formValues.bcc = bcc.split(" ");
    formValues.subject = subject;
    formValues.message = message;
    // more comments
    const email: Email = {
      id: "",
      from: "me",
      to: formValues.to,
      cc: formValues.cc,
      bcc: formValues.bcc,
      subject: formValues.subject,
      message: formValues.message,
      attachments: [],
      read: false,
      starred: false,
      date: new Date(),
      folder: "sent",
    };

    if (emailApi.post) {
      emailApi.post(email).then(() => {
        setFormValues(initialValues);
      });
    }
  };

  const handleSaveToDraftButton = () => {
    formValues.to = to.split(" ");
    formValues.cc = cc.split(" ");
    formValues.bcc = bcc.split(" ");
    formValues.subject = subject;
    formValues.message = message;

    const email: Email = {
      id: "",
      from: "me",
      to: formValues.to,
      cc: formValues.cc,
      bcc: formValues.bcc,
      subject: formValues.subject,
      message: formValues.message,
      attachments: [],
      read: false,
      starred: false,
      date: new Date(),
      folder: "drafts",
    };

    if (emailApi.post) {
      emailApi.post(email).then(() => {
        setFormValues(initialValues);
      });
    }
  };
  // sdfs
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3 className={style.heading}>New Message</h3>
        <div className={style.inputs}>
          <input
            className={style.to}
            value={to}
            type="text"
            placeholder="To"
            onChange={(event) => {
              setTo(event.target.value);
              handleEmailIdSelector(event);
            }}
          />
          <div className={style.emailId}>
            {emailIds.map((emailId) => (
              <div className={style.emailIdTag}>
                <span>{emailId}</span>
                <span
                  className={style.emailIdTagClose}
                  onClick={() => {
                    setEmailIds(emailIds.filter((id) => id !== emailId));
                  }}
                >
                  <CancelOutlined />
                </span>
              </div>
            ))}
          </div>
          <button
            className={style.ccButton}
            onClick={() => {
              setShowCc(!showCc);
            }}
          >
            Cc
          </button>
          <button
            className={style.bccButton}
            onClick={() => {
              setShowBcc(!showBcc);
            }}
          >
            Bcc
          </button>
          {showCc && (
            <input
              className={style.cc}
              value={cc}
              type="text"
              placeholder="Cc"
              onChange={(event) => {
                setCc(event.target.value);
              }}
            />
          )}
          {showBcc && (
            <input
              className={style.bcc}
              value={bcc}
              type="text"
              placeholder="Bcc"
              onChange={(event) => {
                setBcc(event.target.value);
              }}
            />
          )}
          <input
            className={style.subject}
            value={subject}
            type="text"
            placeholder="Subject"
            onChange={(event) => {
              setSubject(event.target.value);
            }}
          />
        </div>
      </div>
      <div className={style.body}>
        <textarea
          className={style.message}
          value={message}
          placeholder="Message"
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <Toolbar
          className={style.toolbar}
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
        <div className={style.buttonsContainer}>
          <div className={style.sendButton}>
            <Button content={"Send"} onClick={handleSendButton} />
          </div>
          <div className={style.saveToDraftButton}>
            <Button
              content={"Save to Draft"}
              onClick={handleSaveToDraftButton}
            />
          </div>
          <div className={style.discardButton}>
            <Button content={"Discard"} onClick={handleDiscardButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
