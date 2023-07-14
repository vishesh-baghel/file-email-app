import * as React from "react";
import style from "./Drafts.module.css";
import EmailStack from "../../components/EmailStack/EmailStack";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

export interface DraftsProps {
  searchPlaceholderText?: string;
  setSearchPlaceholderText?: React.Dispatch<React.SetStateAction<string>>;
}

export default function Drafts(props: DraftsProps) {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/drafts") {
      props.setSearchPlaceholderText &&
        props.setSearchPlaceholderText("Search Drafts");
    }
  });

  return (
    <div className={style.container}>
      <div className={style.header}>
        <div>Drafts</div>
      </div>
      <EmailStack />
    </div>
  );
}
