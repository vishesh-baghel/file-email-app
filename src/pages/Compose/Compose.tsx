import Button from "../../elements/Button/Button";
import style from "./Compose.module.css";
import Toolbar from "../../components/Toolbar/Toolbar";
import { useState } from "react";

export interface ComposeProps {}

export default function Compose(props: ComposeProps) {
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const [showCc, setShowCc] = useState<boolean>(false);
  const [showBcc, setShowBcc] = useState<boolean>(false);

  return (
    <div className={style.container}>
      <div className={style.header}>
        <h3 className={style.heading}>New Message</h3>
        <div className={style.inputs}>
          <input className={style.to} type="text" placeholder="To" />
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
        <div className={style.sendButton}>
          <Button content={"Send"} />
        </div>
      </div>
    </div>
  );
}
