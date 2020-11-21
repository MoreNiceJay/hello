import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import moment from "moment";
import AppHeader from "../../components/AppHeader";
import { Redirect } from "react-router-dom";
import rentSucess from "../../images/rent_success.png";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({}));

function BatteryRentCompleteForWeb(props) {
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
    // if (window.webkit == undefined && window.androidHandlers == undefined) {
    //   window.alert("모바일로 접속해주세요");
    //   window.location.href = "https://banto.io";
    // }
  }, []);

  return (
    <>
      <header></header>
      <body className="allBlack">
        <div className="rentSucessContainer">
          <img src={rentSucess} className="rentSuccessImage" alt="testA" />

          <p className="batteryRentCompleteText">대여가 완료됐습니다!</p>
        </div>
        <div className="kakaoPayRegisterButtonContainer">
          <button
            className="kakaoPayRegisterButton"
            onClick={() => {
              sessionStorage.clear();
              window.location.href = "https://banto.io";
            }}
          >
            완료
          </button>
        </div>
      </body>
    </>
  );
}

export default BatteryRentCompleteForWeb;
