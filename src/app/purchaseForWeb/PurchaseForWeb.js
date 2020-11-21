import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import moment from "moment";
import AppHeader from "../../components/AppHeader";
import { Redirect } from "react-router-dom";

const axios = require("axios");

const useStyles = makeStyles((theme) => ({}));

function PurchaseForWeb(props) {
  const classes = useStyles(props);
  const userId = sessionStorage.getItem("userId");

  const defaultPriceInfo = {
    data: {
      default_price: 0,
      default_time: 0,
      extra_price: 0,
      extra_term: 0,
      max_extra_time: 0,
      max_extra_price: 0,
      discount_price: 0
    }
  };
  const [priceInfo, setPriceInfo] = useState(defaultPriceInfo);
  const [isLoading, setLoading] = useState(true);
  const [paymentInfo, setPaymentInfo] = useState("");
  function getID(callback) {
    return new Promise(function (resolve, reject) {
      window.getUserIdFromNativeOnTheComponentJS = function (id) {
        resolve(id);
      };
    });
  }
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  useEffect(() => {
    // if (window.webkit == undefined && window.androidHandlers == undefined) {
    //   window.alert("모바일로 접속해주세요");
    //   window.location.href = "https://banto.io";
    // }

    setLoading(true);
    if (!sessionStorage.getItem("userId")) {
      window.alert("잘못된 접근 방법입니다. 다시 시도해 주세요");
      sessionStorage.clear();
      window.location.href = "https://banto.io";
    }
    axios
      .post("https://mulli.world/banto/calculatePriceInfo", {
        COUPON_ID: "",
        STATION_ID: sessionStorage.getItem("stationId"),
        BATTERY_ID: ""
      })
      .then((res) => {
        setPriceInfo(res);
        return axios.post(
          "https://mulli.world/simpleRent/checkKakaoUserPayment",
          {
            userId: sessionStorage.getItem("userId")
          }
        );
      })
      .then((res) => {
        if (res.data.payment.payment === "kakaoPay") {
          setPaymentInfo("카카오페이");
        } else if (res.data.payment.payment === "creditCard") {
          setPaymentInfo("신용카드");
        }

        setLoading(false);
      });
  }, []);

  const purchase = (userId, stationId, powerBankId) => {
    axios
      .post("https://mulli.world/simpleRent/getABatteryIdInStation", {
        stationId: sessionStorage.getItem("stationId")
      })
      .then((res) => {
        return axios.post("https://mulli.world/banto/PURCHASE", {
          USER_ID: sessionStorage.getItem("userId"),
          STATION_ID: sessionStorage.getItem("stationId"),
          POWER_BANK_ID: res.data.batteryInfo.powerBank,
          COUPON_SEQ: ""
        });
      })

      .then((res) => {
        if (res.data.RESULT === "SUCCESS") {
          sessionStorage.clear();

          window.location.href = "/batteryrentcompleteforweb";
        } else {
          sessionStorage.clear();

          window.location.href = "/batteryrentfailforweb";
        }
        console.log(res);
      })
      .catch(function (error) {
        if (error.response) {
          sessionStorage.clear();

          window.location.href = "/batteryrentfailforweb";
        }
      });
  };

  return (
    <>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <>
          <head></head>
          <body className="allBlack">
            <div className="purchaseForWebTitlePriceInfoContainer">
              <p className="purchaseForWebTitlePriceInfoTag">기본결제금액</p>
              <p className="purchaseForWebTitlePriceInfo">
                {numberWithCommas(priceInfo.data.default_price)}
              </p>
            </div>

            <div className="purchaseForWebDetailInfoContainer">
              <div className="purchaseForWebDetailPaymentInfoContainer">
                <p className="purchaseForWebPaymentInfoTag">결제방법</p>
                <p className="purchaseForWebPaymentInfo">{paymentInfo}</p>
              </div>
              <div className="purchaseForWebPaymentDetailInfoBoxContainer">
                <div className="purchaseForWebPaymentDetailInfoTopPart">
                  <p className="purchaseForWebPaymentDetailInfoTopPartText1">
                    *최종 결제내역은 보조배터리 반납 후 확인할 수 있습니다.
                  </p>
                  <p className="purchaseForWebPaymentDetailInfoTopPartText2">
                    *미반납 시({priceInfo.data.max_extra_time}시간) 이후
                    {numberWithCommas(priceInfo.data.max_extra_price)}원의
                    연체료가 부가 되오니 꼭 반납을 해주시기 바랍니다.
                  </p>
                </div>
                <div className="purchaseForWebPaymentDetailInfoDivider" />
                <div className="purchaseForWebPaymentDetailInfoBottomPart">
                  <div className="purchaseDetailLittleContainer">
                    <p className="purchaseDetailLittleTextTag">할인금액</p>
                    <p className="purchaseDetailLittleText">
                      {numberWithCommas(priceInfo.data.discount_price)}원
                    </p>
                  </div>
                  <div className="purchaseDetailLittleContainer">
                    <p className="purchaseDetailLittleTextTag">
                      기본 제공 시간 및 금액
                    </p>
                    <p className="purchaseDetailLittleText">
                      {priceInfo.data.default_time}시간/
                      {numberWithCommas(priceInfo.data.default_price)}원
                    </p>
                  </div>
                  <div className="purchaseDetailLittleContainer">
                    <p className="purchaseDetailLittleTextTag">추가 사용시 </p>
                    <p className="purchaseDetailLittleText">
                      {priceInfo.data.extra_term}시간/
                      {priceInfo.data.extra_price}원
                    </p>
                  </div>
                  <div className="purchaseDetailLittleContainer">
                    <p className="purchaseDetailLittleTextTag">매장명</p>
                    <p className="purchaseDetailLittleText">
                      {sessionStorage.getItem("stationName")}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="purchaseForWebEmptySpace" />
            <div className="purchaseForWebButtonContainer">
              <button
                className="purchaseForWebButton"
                onClick={() => {
                  purchase();
                }}
              >
                대여하기
              </button>
            </div>
          </body>
        </>
      )}
    </>
  );
}

export default PurchaseForWeb;
