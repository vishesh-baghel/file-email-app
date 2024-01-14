import * as React from "react";
import style from "./SidePanel.module.css";
import Button from "../../elements/Button/Button";

export interface SidePanelProps {} // more commetns

export default function SidePanel(props: SidePanelProps) {
  return (
    // more
    <div className={style.container}>
      <div className={style.buttons}>
        <div className={style.button}>
          <Button content="Compose" link="/compose" />
        </div>
        <div className={style.button}>
          <Button content="Inbox" link="/" />
        </div>
        <div className={style.button}>
          <Button content="Outbox" link="/outbox" />
        </div>
        <div className={style.button}>
          <Button content="Drafts" link="/drafts" />
        </div>
      </div>
      <div className={style.footer}></div>
    </div>
  );
}
