import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import moment from "moment";
import AppHeader from "../../components/AppHeader";
import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import NewWindow from "react-new-window";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({}));

function KakaoPayRegisterForWeb(props) {
  const classes = useStyles(props);

  const [data, setData] = useState("");
  const [userID, setUserID] = useState("");
  const userId = sessionStorage.getItem("userId");
  function getID(callback) {
    return new Promise(function (resolve, reject) {
      window.getUserIdFromNativeOnTheComponentJS = function (id) {
        setUserID(id);
        resolve(id);
      };
    });
  }

  function registerKakaoPay(userId) {
    axios
      .post("https://mulli.world/simpleRent/registerKakaoPay", {
        USER_ID: userId
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
        // window.alert(res.data.next_redirect_app_url);
        // window.location.href = res.data.next_redirect_app_url;
        // window.open(res.data.next_redirect_app_url);

        window.location.href = res.data.next_redirect_app_url;
      });
  }
  useEffect(() => {
    if (!sessionStorage.getItem("userId")) {
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
          <p className="kakaoPayRegisterTitle">결제 수단 등록</p>
          <p className="kakaoPayRegisterDescription">
            결제를 위해 카카오페이를 등록합니다
          </p>
        </div>
        <div className="kakaoPayRegisterButtonContainer">
          <button
            className="kakaoPayRegisterButton"
            onClick={() => {
              registerKakaoPay(userId);
            }}
          >
            등록하기
          </button>
        </div>
      </body>

      {/* {data.next_redirect_app_url && 
       (window.location.href = data.next_redirect_app_url)} */}
    </>
  );
}

export default KakaoPayRegisterForWeb;
