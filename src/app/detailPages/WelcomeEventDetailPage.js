import React, { useEffect, useState } from "react";
import WelcomeCoupon from "../../images/welcomeCoupon.png";
import NavHeader from "../../components/NavHeaderClose";
import { MdBatteryChargingFull } from "react-icons/md";
const axios = require("axios");

function WelcomeEventDetailPage(props) {
  const [userID, setUserID] = useState("");

  function getID() {
    return new Promise(function (resolve, reject) {
      window.getUserIdFromNativeOnTheComponentJS = function (id) {
        setUserID(id);
        resolve(id);
      };
    });
  }

  return (
    <>
      <NavHeader />
      <main className="banto_whiteBackground_withNav">
        <section className="DetailPage_titleSection">
          "환영합니다" 이벤트
          <p className="DetailPage_brand">Banto</p>
        </section>
        <img src={WelcomeCoupon} className="DetailPage_img" alt="testA" />
        <section className="DetailPage_details">
          <div className="DetailPage_details_textContainer">
            <p className="DetailPage_details_title">이벤트 내용</p>
            <p className="DetailPage_details_details_title">■기간</p>
            <p className="DetailPage_details_description">
              이벤트가 조기 종료될 수 있습니다
            </p>
            <p className="DetailPage_details_details_title">■대상</p>
            <p className="DetailPage_details_description">모든 고객</p>
            <p className="DetailPage_details_details_title">■내용</p>
            <p className="DetailPage_details_description">
              모든 가입고객님과 신규 고객님께 2시간 무료 이용권과 반값 할인
              쿠폰을 드립니다.
            </p>
            <p className="DetailPage_details_details_title">■유의사항</p>
            <p className="DetailPage_details_description">
              -1인 1회 제공(2시간 무료 이용권 + 반값 할인 쿠폰) <br />
              -쿠폰 유효기간 만료 주의 <br /> -기본 시간만료(2시간) 이후 추가
              금액 발생 (시간당 300원)
              <br /> -분실시 배터리 비용 발생 (20,400원)
            </p>
          </div>
        </section>
      </main>

      <div className="banto_whiteBottomMargin" />
      <button
        className="DetailPage_bottomButton"
        type="button"
        onClick={async () => {
          if (window.webkit != undefined) {
            await window.webkit.messageHandlers.buttonSelected.postMessage(
              "buttonSelected"
            );
          }
          if (window.androidHandlers != undefined) {
            await window.androidHandlers.buttonSelected("buttonSelected");
          }
          getID().then((id) => {
            axios
              .post("https://www.serverbatty.com/banto/everydayEvent", {
                // .post("https://mulli.world/banto/everydayEvent", {
                USER_ID: id
              })
              .then((res) => {
                window.alert(res.data.REASON);

                if (window.androidHandlers != undefined) {
                  window.androidHandlers.goBackButton("goBackButton");
                }
                if (window.webkit != undefined) {
                  window.webkit.messageHandlers.goBackButton.postMessage(
                    "goBackButton"
                  );
                }
              });
          });
        }}
      >
        쿠폰받기
      </button>
    </>
  );
}

export default WelcomeEventDetailPage;
