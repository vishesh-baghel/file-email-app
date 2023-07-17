import Button from "../../elements/Button/Button";
import style from "./Compose.module.css";
import Toolbar from "../../components/Toolbar/Toolbar";
import { useState } from "react";
import { CancelOutlined } from "@mui/icons-material";

export interface ComposeProps {}

interface FormValues {
  to: string;
  cc?: string;
  bcc?: string;
  subject: string;
  message: string;
}

const initialValues: FormValues = {
  to: "",
  cc: "",
  bcc: "",
  subject: "",
  message: "",
};

export default function Compose(props: ComposeProps) {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [showCc, setShowCc] = useState<boolean>(false);
  const [showBcc, setShowBcc] = useState<boolean>(false);
  const [emailIds, setEmailIds] = useState<string[]>([]);
  const [formValues, setFormValues] = useState<FormValues>(initialValues);

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

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3 className={style.heading}>New Message</h3>
        <div className={style.inputs}>
          <input
            className={style.to}
            type="text"
            placeholder="To"
            onChange={handleEmailIdSelector}
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
            <input className={style.cc} type="text" placeholder="Cc" />
          )}
          {showBcc && (
            <input className={style.bcc} type="text" placeholder="Bcc" />
          )}
          <input className={style.subject} type="text" placeholder="Subject" />
        </div>
      </div>
      <div className={style.body}>
        <textarea className={style.message} placeholder="Message" />
        <Toolbar
          className={style.toolbar}
          selectedFiles={selectedFiles}
          setSelectedFiles={setSelectedFiles}
        />
        <div className={style.buttonsContainer}>
          <div className={style.sendButton}>
            <Button content={"Send"} />
          </div>
          <div className={style.saveToDraftButton}>
            <Button content={"Save to Draft"} />
          </div>
          <div className={style.discardButton}>
            <Button content={"Discard"} onClick={handleDiscardButton} />
          </div>
        </div>
      </div>
    </div>
  );
}
