import TopBar from "../components/TopBar";
import Page from "./Page";
import React from "react";

function Main({children}: React.PropsWithChildren) {
  return (
    <>
      <div className="topbar-wrapper">
        <TopBar/>
      </div>
      <div className="page-wrapper">
        <Page>
          {children}
        </Page>
      </div>
    </>
  )
}

export default Main;