import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import { useSelector, useDispatch } from "react-redux";

import moment from "moment";
import AppHeader from "../../components/AppHeader";
import { Redirect } from "react-router-dom";
import Kakao from "../../kakao";
import KakaoPayRegisterForWeb from "../kakaopayRegisterForWeb/KakaoPayRegisterForWeb";
import queryString from "query-string";
import logo from "../../images/logo.png";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({}));

function LoginPageForWeb({ match }) {
  const [data, setData] = useState("");
  const [userId, setUserId] = useState("");
  const [bMarketingAgreed, setMarketingAgreed] = useState(false);
  const [stationName, setStationName] = useState("");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    // if (window.webkit == undefined && window.androidHandlers == undefined) {
    //   window.alert("모바일로 접속해주세요");
    //   window.location.href = "https://banto.io";
    // }

    var query = window.location.search;

    const params = new URLSearchParams(query);
    const stationId = params.get("stationId"); // bar
    if (stationId === null) {
      window.alert("올바른 접근이 아닙니다. QR을 스캔해주세요");
      //     //   window.location.href = "https://banto.io";
    }
    sessionStorage.setItem("stationId", stationId);
    axios
      .post("https://mulli.world/simpleRent/getStoreNameByStationId", {
        stationId
      })
      .then((res) => {
        console.log(res.data.storeName.result);
        if (res.data.storeName.result === true) {
          setStationName(res.data.storeName.storeName);
          console.log(res.data.storeName.storeName);
          sessionStorage.setItem("stationName", res.data.storeName.storeName);
        } else if (res.data.storeName.result === false) {
          window.alert("등록되지 않은 스테이션입니다.");
          //     //   window.location.href = "https://banto.io";
        }
      });

    window.Kakao.init("86d0fb152d4eb19ea7bb774cd3c7809c");
    window.Kakao.Auth.createLoginButton({
      container: "#create-kakao-login-btn",
      success: function (authObj) {
        console.log(JSON.stringify(authObj));
        const accessToken = authObj.access_token;
        console.log(accessToken);
        setLoading(true);

        axios
          .all([
            axios.post("https://mulli.world/simpleRent/getKakaoInfo", {
              accessKey: accessToken
            }),
            axios.post("https://mulli.world/simpleRent/getKakaoPolicy", {
              accessKey: accessToken
            })
          ])

          .then(
            axios.spread((firstRes, secondRes) => {
              if (!firstRes.data.kakao_account.has_phone_number) {
                window.alert(
                  "카카오ID에 휴대번호 정보가 없습니다.반토 앱을 사용해 주세요"
                );
                //   window.location.href = "https://banto.io";
              }
              let phoneNumber = firstRes.data.kakao_account.phone_number;
              phoneNumber = phoneNumber.substring(3);
              phoneNumber = phoneNumber.replace(" ", "");
              phoneNumber = phoneNumber.replace(/-/gi, "");
              phoneNumber = "0" + phoneNumber;

              const kakaoId = firstRes.data.id;
              console.log(secondRes.data.allowed_service_terms);
              console.log(secondRes.data.allowed_service_terms.length);
              const marketingAgreed =
                secondRes.data.allowed_service_terms.length;
              console.log(firstRes.data.kakao_account.phone_number);
              const bMarketingPolicyAgreed = 4 ? true : false;
              setMarketingAgreed(bMarketingPolicyAgreed);
              return axios.post(
                "https://mulli.world/simpleRent/loginWithKakaoId",
                {
                  kakaoId,
                  phoneNumber
                }
              );
            })
          )
          .then((res) => {
            console.log(res);
            console.log(res.data);
            console.log(res.data);

            setUserId(res.data.userId);
            sessionStorage.setItem("userId", String(res.data.userId));

            setUserId(res.data.userId);
            return axios.post(
              "https://mulli.world/simpleRent/updateUserAgreedPolicy",
              {
                userId: res.data.userId,
                bMarketingPolicyAgreed: bMarketingAgreed
              }
            );
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      }
    });
  }, []);

  useEffect(() => {
    if (userId !== "") {
      axios
        .all([
          axios.post("https://mulli.world/simpleRent/checkKakaoUserPayment", {
            userId
          }),
          axios.post("https://mulli.world/simpleRent/checkKakaoUserRenting", {
            userId
          })
        ])
        .then(
          axios.spread((firstRes, secondRes) => {
            console.log(firstRes.data);
            console.log("1st", firstRes.data);
            console.log("2st", secondRes.data);
            const bPayment = firstRes.data.payment.result;
            const bRenting = secondRes.data.result;
            console.log(sessionStorage.getItem("userId"));
            console.log(bRenting);
            if (bRenting) {
              sessionStorage.clear();
              window.location.href = "/batteryisrentingforweb";
            } else if (!bPayment) {
              window.location.href = "/kakaopayregisterforweb";
            } else {
              console.log("일로왔음");
              window.location.href = "/purchaseforweb";
            }
          })
        );
    }
    setLoading(true);
  }, [userId]);

  return (
    <>
      <div className="allBlack">
        <p className="loginPageTitle">반토 보조배터리 대여 서비스</p>
        <p className="loginPageStore">{stationName}</p>
        <div id="create-kakao-login-btn" />
        <img src={logo} className="loginPageLogo" alt="logo" />
        <div> {match.params.stationId}</div>
      </div>
    </>
  );
}

export default LoginPageForWeb;
