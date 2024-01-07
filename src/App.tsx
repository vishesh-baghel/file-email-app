import style from "./App.module.css";
import Header from "./components/Header/Header";
import SidePanel from "./components/SidePanel/SidePanel";
import Inbox from "./components/Inbox/Inbox";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Outbox from "./components/Outbox/Outbox";
import Compose from "./pages/Compose/Compose";
import Drafts from "./pages/Drafts/Drafts";
import EmailPage from "./pages/EmailPage/EmailPage";

/**
 * checking the new feature.  new comment
 * @returns
 */
function App() {
  const [searchPlaceholder, setSearchPlaceholder] = useState("");

  return (
    <div className={style.container}>
      <header className={style.header}>
        <Header searchPlaceholderText={searchPlaceholder} />
      </header>
      <body className={style.content}>
        <div className={style.leftContent}>
          <SidePanel />
        </div>
        <div className={style.rightContent}>
          <Routes>
            <Route
              path="/"
              element={
                <Inbox
                  searchPlaceholderText={searchPlaceholder}
                  setSearchPlaceholderText={setSearchPlaceholder}
                />
              }
            />
            <Route
              path="/outbox"
              element={
                <Outbox
                  searchPlaceholderText={searchPlaceholder}
                  setSearchPlaceholderText={setSearchPlaceholder}
                />
              }
            />
            {/* one more comment */}
            <Route
              path="/drafts"
              element={
                <Drafts
                  searchPlaceholderText={searchPlaceholder}
                  setSearchPlaceholderText={setSearchPlaceholder}
                />
              }
            />
            <Route path="/compose" element={<Compose />} />
            <Route path="/email/:id" element={<EmailPage />} />
          </Routes>
        </div>
      </body>
    </div>
  );
}

export default App;
