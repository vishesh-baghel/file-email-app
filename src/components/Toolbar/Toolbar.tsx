import style from "./Toolbar.module.css";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CancelOutlined from "@mui/icons-material/CancelOutlined";

export interface AddDocsProps {
  inputRef: React.RefObject<HTMLInputElement>;
  handleFileSelect: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectedFiles: FileList | null;
  handleFileRemoval: (indexToRemove: number) => void;
}

export default function AddDocs(props: AddDocsProps) {
  const convertToMegaBytes = (bytes: number) => {
    const megaBytes = bytes / (1024 * 1024);
    return megaBytes.toFixed(2);
  };

  return (
    <>
      <div className={style.replyToolbar}>
        <div>
          <label htmlFor="file-upload" className={style.attachmentButton}>
            <span className="icon">
              <AttachmentIcon />
            </span>
          </label>
          <input
            id="file-upload"
            className={style.hidden}
            ref={props.inputRef}
            multiple
            type="file"
            onChange={props.handleFileSelect}
          />
        </div>
        <div>tools</div>
      </div>
      <div className={style.attachmentContainer}>
        {props.selectedFiles &&
          Array.from(props.selectedFiles).map((file, index) => (
            <div className={style.attachmentItem} key={index}>
              <span className={style.attachmentName}>{file.name}</span>
              <span className={style.attachmentSize}>{`${convertToMegaBytes(
                file.size
              )} MB`}</span>
              <span className={style.attachmentDelete}>
                <CancelOutlined
                  fontSize="small"
                  onClick={() => {
                    props.handleFileRemoval(index);
                  }}
                />
              </span>
            </div>
          ))}
      </div>
    </>
  );
}
