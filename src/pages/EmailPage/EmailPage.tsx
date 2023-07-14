import { useEffect, useState, useRef } from "react";
import emailApi from "../../services/api/emailApi";
import style from "./EmailPage.module.css";
import { Email } from "../../services/model/email";
import { useLocation } from "react-router-dom";
import Button from "../../elements/Button/Button";
import CancelOutlined from '@mui/icons-material/CancelOutlined';

export interface EmailPageProps {}

export default function EmailPage(props: EmailPageProps) {
  const [emailId, setEmailId] = useState<string>("");
  const [email, setEmail] = useState<Email>({} as Email);
  const [showReplyTextArea, setShowReplyTextArea] = useState<boolean>(false);
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);
  const location = useLocation();
  const inputRef = useRef<HTMLInputElement>(null);
  
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

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      setSelectedFiles(files);
    } 
  };

  const convertToMegaBytes = (bytes: number) => {
    const megaBytes =  bytes / (1024 * 1024);
    return megaBytes.toFixed(2);
  };

  const handleFileRemoval = (indexToRemove: number) => {
    console.log(indexToRemove);
    if (inputRef.current && inputRef.current.files) {
      const files = Array.from(inputRef.current.files);
      files.splice(indexToRemove, 1);
      const updatedFileList = new DataTransfer();
      files.forEach((file) => updatedFileList.items.add(file));
      inputRef.current.files = updatedFileList.files;
    }
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
                <input className={style.attachmentButton} multiple type="file" onChange={handleFileSelect} />
              </div>
              <div className={style.attachmentContainer}>
                {selectedFiles &&
                  Array.from(selectedFiles).map((file, index) => (
                    <div className={style.attachmentItem} key={index}>
                      <span className={style.attachmentName}>{file.name}</span>
                      <span className={style.attachmentSize}>{`${convertToMegaBytes(file.size)} MB`}</span>
                      <span className={style.attachmentDelete}><CancelOutlined fontSize="small" onClick={() => {
                        handleFileRemoval(index);
                      }}/></span>
                    </div>
                  ))}
              </div>
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
