import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import moment from "moment";
import AppHeader from "../../components/AppHeader";
import { Redirect } from "react-router-dom";
import rentFail from "../../images/rent_fail.png";
import arrow from "../../images/arrowForRentFail.png";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({}));

function BatteryRentFailForWeb(props) {
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
          <img src={rentFail} className="rentSuccessImage" alt="testA" />

          <p className="batteryRentCompleteText">대여에 실패했습니다</p>
          <p className="batteryRentCompleteText">
            고객센터로 문의하기 →
            {/* <img src={arrow} className="rentFailArrow" alt="testA" /> */}
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

export default BatteryRentFailForWeb;
