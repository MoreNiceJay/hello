import React from "react";
import { makeStyles } from "@material-ui/styles";
import close_grey from "../images/close_grey.png";
import backButton from "../images/backButton.png";

const AppHeaderWithBack = props => {
  return (
    <>
      <div className="static">
        <header className="AppheaderWithBack_header">
          <div className="AppHeaderWithBack_container">
            <button
              type="button"
              className="AppheaderWithBack_header_button"
              style={{}}
              onClick={() => {
                if (window.androidHandlers != undefined) {
                  window.androidHandlers.goBackButton("goBackButton");
                }
                if (window.webkit != undefined) {
                  window.webkit.messageHandlers.goBackButton.postMessage(
                    "goBackButton"
                  );
                }
              }}
            >
              <img
                className="Appheader_backButton_img"
                src={backButton}
                alt="backButton"
              />
            </button>{" "}
            <span className="AppheaderWithBack_title">약관 동의</span>
            <span />
          </div>
          <div className="heade_header_column" />{" "}
        </header>
      </div>
    </>
  );
};

export default AppHeaderWithBack;
