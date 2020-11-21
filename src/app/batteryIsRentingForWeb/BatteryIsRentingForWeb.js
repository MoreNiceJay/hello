import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import moment from "moment";
import AppHeader from "../../components/AppHeader";
import { Redirect } from "react-router-dom";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({}));

function BatteryIsRentingForWeb(props) {
  const classes = useStyles(props);

  const [data, setData] = useState("");
  const [userID, setUserID] = useState("");
  function getID(callback) {
    return new Promise(function (resolve, reject) {
      window.getUserIdFromNativeOnTheComponentJS = function (id) {
        setUserID(id);
        resolve(id);
      };
    });
  }

  useEffect(() => {
    if (sessionStorage.getItem("userId")) {
      window.alert("다시 로그인해 주세요");
      sessionStorage.clear();
      window.location.href = "/loginpage";
    }
  }, []);

  return (
    <>
      <header></header>
      <body className="allBlack">
        <div className="kakaoPayRegisterTextContainer">
          <p className="kakaoPayRegisterTitle">배터리를 이미 대여중입니다</p>
          <p className="kakaoPayRegisterDescription">
            한개의 배터리만 대여 가능합니다.
          </p>
        </div>
        <div className="kakaoPayRegisterButtonContainer">
          <button
            className="kakaoPayRegisterButton"
            onClick={() => {
              sessionStorage.clear();
              window.location.href = "https://banto.io";
            }}
          >
            확인
          </button>
        </div>
      </body>
    </>
  );
}

export default BatteryIsRentingForWeb;
