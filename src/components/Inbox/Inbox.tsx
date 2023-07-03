import * as React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./Inbox.module.css";
import EmailStack from "../EmailList/EmailStack";
import RefreshIcon from "@mui/icons-material/Refresh";
import Button from "../../elements/Button/Button";
import emailApi from '../../services/api/email';
import { Email } from '../../services/model/email';

export interface InboxProps {
  searchPlaceholderText?: string;
  setSearchPlaceholderText?: React.Dispatch<React.SetStateAction<string>>;
}

export default function Inbox(props: InboxProps) {
  const location = useLocation();
  const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false);
  const [emailList, setEmailList] = useState<Email[]>([]);

  useEffect(() => {
    if (location.pathname === "/" && props.setSearchPlaceholderText) {
      props.setSearchPlaceholderText("Search mail");
    }
  });

  const handleSelectAllCheckbox = () => {
    setSelectAllChecked(!selectAllChecked);
  };

  const handleRefreshbutton = () => {
    getEmails();
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
      <div className={style.header}>
        <div className={style.selectAllCheckbox}>
          <input
            type="checkbox"
            checked={selectAllChecked}
            onChange={handleSelectAllCheckbox}
          />
        </div>
        <div className={style.refreshButton}>
          <Button content={<RefreshIcon fontSize="small" />} onClick={handleRefreshbutton} />
        </div>
      </div>
      <EmailStack selectAll={selectAllChecked} emails={emailList}/>
    </div>
  );
}
