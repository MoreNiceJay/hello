import React from "react";
import { makeStyles } from "@material-ui/styles";
import close_grey from "../images/close_grey.png";

const AppHeader = props => {
  return (
    <>
      <div className="static">
        <header className="Appheader_header">
          <div className="Appheader_header_button_container">
            <div className="Appheader_header_empty_space" />
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
          <div className="Appheader_text_container">
            <h1 className="Appheader_header__title"> {props.title} </h1>
            <p className="Appheader_header__description">
              {" "}
              {props.description}{" "}
            </p>
          </div>{" "}
          <div className="header__header_column" />{" "}
        </header>
      </div>
    </>
  );
};

export default AppHeader;
