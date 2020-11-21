import React, { useEffect, useState } from "react";
import freeCoupon from "../../images/freeCoupon.png";
import NavHeader from "../../components/NavHeaderClose";
import { MdBatteryChargingFull } from "react-icons/md";
const axios = require("axios");

function DetailPage(props) {
  const [userID, setUserID] = useState("");

  function getID() {
    return new Promise(function(resolve, reject) {
      window.getUserIdFromNativeOnTheComponentJS = function(id) {
        setUserID(id);
        resolve(id);
      };
    });
  }

  const applyEvent = () => {
    //1565858600954_01094552438
  };

  const dummyData = {
    title: "선착순 이벤트!",
    description: "매일매일 999명에게 무료 쿠폰이!",
    address: "https://ewz0w.csb.app/",
    explanation: "적립가능"
  };

  return (
    <>
      <NavHeader />
      <main className="banto_whiteBackground_withNav">
        <section className="DetailPage_titleSection">
          매일 365명은 무료 충전 이벤트
          <MdBatteryChargingFull />
          <p className="DetailPage_brand">Banto</p>
        </section>
        <img src={freeCoupon} className="DetailPage_img" alt="testA" />
        <section className="DetailPage_details">
          <div className="DetailPage_details_textContainer">
            <p className="DetailPage_details_title">이벤트 내용</p>
            <p className="DetailPage_details_details_title">■기간</p>
            <p className="DetailPage_details_description">
              모든 쿠폰 발급시까지
            </p>
            <p className="DetailPage_details_details_title">■대상</p>
            <p className="DetailPage_details_description">매일 선착순 365명</p>
            <p className="DetailPage_details_details_title">■내용</p>
            <p className="DetailPage_details_description">
              매일 365명께 무료 충전 기회를 드립니다. 쿠폰을 발급 받아 대여시에
              적용하시면 2시간 동안 무료로 이용하실 수 있습니다.
            </p>
            <p className="DetailPage_details_details_title">■유의사항</p>
            <p className="DetailPage_details_description">
              -1일 1회 제공 <br />
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
          getID().then(id => {
            axios
              .post("https://www.serverbatty.com/banto/everydayEvent", {
                // .post("https://mulli.world/banto/everydayEvent", {
                USER_ID: id
              })
              .then(res => {
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

export default DetailPage;
