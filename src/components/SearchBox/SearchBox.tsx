import * as React from "react";
import style from "./SearchBox.module.css";
import Button from "../../elements/Button/Button";
// more comments
export interface SearchBoxProps {
  placeholder?: string;
}

export default function SearchBox(props: SearchBoxProps) {
  return (
    <div className={style.container}>
      <input
        className={style.searchInput}
        type="text"
        placeholder={props.placeholder}
      />
      <div className={style.searchButton}>
        <Button content="Search" />
      </div>
    </div>
  );
}

// adding one

// more bugs
