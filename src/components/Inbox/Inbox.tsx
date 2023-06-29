import * as React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import style from "./Inbox.module.css";
import EmailStack from "../EmailList/EmailStack";
import RefreshIcon from "@mui/icons-material/Refresh";
import Button from "../../elements/Button/Button";

export interface InboxProps {
  searchPlaceholderText?: string;
  setSearchPlaceholderText?: React.Dispatch<React.SetStateAction<string>>;
}

export default function Inbox(props: InboxProps) {
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/") {
      props.setSearchPlaceholderText &&
        props.setSearchPlaceholderText("Search Inbox");
    }
  });

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div className={style.selectAllCheckbox}>
          <input type="checkbox" />
        </div>
        <div className={style.refreshButton}>
          <Button content={<RefreshIcon fontSize="small" />} />
        </div>
      </div>
      <EmailStack />
    </div>
  );
}
