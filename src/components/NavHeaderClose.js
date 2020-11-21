import React from "react";
import { makeStyles } from "@material-ui/styles";
import close_grey from "../images/close_grey.png";

const NavHeaderClose = props => {
  return (
    <>
      <div className="static">
        <header className="Nav_header">
          <div className="Nav_header_button_container">
            <div className="Nav_header_empty_space" />
            <button
              type="button"
              className="Appheader_header_button"
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
                src={close_grey}
                alt="backButton"
              />
            </button>{" "}
          </div>
        </header>
      </div>
    </>
  );
};

export default NavHeaderClose;
