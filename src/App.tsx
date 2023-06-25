import React from "react";
import style from "./App.module.css";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import Inbox from "./components/Inbox/Inbox";
import { Routes, Route } from "react-router-dom";
import Outbox from "./components/Outbox/Outbox";
import Compose from "./pages/Compose/Compose";
import Drafts from "./pages/Drafts/Drafts";

function App() {
  return (
    <div className={style.container}>
      <Header />
      <div className={style.content}>
        <div className={style.leftContent}>
          <SidePanel />
        </div>
        <div className={style.rightContent}>
          <Routes>
            <Route path="/" element={<Inbox />} />
            <Route path="/outbox" element={<Outbox />} />
            <Route path="/compose" element={<Compose />} />
            <Route path="/drafts" element={<Drafts />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
