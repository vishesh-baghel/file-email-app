import style from "./Toolbar.module.css";
import AttachmentIcon from "@mui/icons-material/Attachment";
import CancelOutlined from "@mui/icons-material/CancelOutlined";
import { useRef } from "react";

export interface ToolbarProps {
  className?: string;
  selectedFiles: FileList | null;
  setSelectedFiles: React.Dispatch<React.SetStateAction<FileList | null>>;
}

export default function Toolbar(props: ToolbarProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileRemoval = (indexToRemove: number) => {
    if (inputRef.current && inputRef.current.files) {
      const files = Array.from(inputRef.current.files);
      files.splice(indexToRemove, 1);
      const updatedFileList = new DataTransfer();
      files.forEach((file) => updatedFileList.items.add(file));
      inputRef.current.files = updatedFileList.files;
      props.setSelectedFiles(updatedFileList.files);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      props.setSelectedFiles(files);
    }
  };

  return (
    <div className={props.className}>
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
            ref={inputRef}
            multiple
            type="file"
            onChange={handleFileSelect}
          />
        </div>
        <div>tools</div>
      </div>
      <div className={style.attachmentContainer}>
        {props.selectedFiles &&
          Array.from(props.selectedFiles).map((file, index) =>
            AttachmentItem(index, file, handleFileRemoval)
          )}
      </div>
    </div>
  );
}

function AttachmentItem(
  index: number,
  file: File,
  handleFileRemoval: (indexToRemove: number) => void
) {
  const convertToMegaBytes = (bytes: number) => {
    const megaBytes = bytes / (1024 * 1024);
    return megaBytes.toFixed(2);
  };

  return (
    <div className={style.attachmentItem} key={index}>
      <span className={style.attachmentName}>{file.name}</span>
      <span className={style.attachmentSize}>{`${convertToMegaBytes(
        file.size
      )} MB`}</span>
      <span className={style.attachmentDelete}>
        <CancelOutlined
          fontSize="small"
          onClick={() => {
            handleFileRemoval(index);
          }}
        />
      </span>
    </div>
  );
}
