import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import moment from "moment";
import AppHeader from "../../components/AppHeader";
import SelectionCard from "./SelectionCard";
import MainBody from "../../components/MainBody";
const axios = require("axios");

const useStyles = makeStyles((theme) => ({
  main: {
    background: "black",
    backgroundSize: "100px 100px",
    flex: "1 1 auto",
    width: "100%",
    display: "flex",
    zIndex: "2",
    overflow: "auto",
    position: "relative",
    flexDirection: "column"
  },
  friends__header: {
    paddingBottom: "20px"
  },
  friends__plus: {
    padding: "20px 0px",

    margin: "20px 0px",
    fontSize: "14px",
    opacity: "0.5",
    marginBottom: "12px"
  },
  friends__title: {
    fontSize: "14px",
    opacity: "0.5",
    marginBottom: "12px"
  },

  coupon__list: {
    borderLeft: "20px",
    fontSize: "14px",
    marginBottom: "20px"
  },
  header: {
    background: "black",
    display: "block",
    justifyContent: "space-between",
    // marginBottom: '30px',
    alignItems: "center"
  },

  header__header_column: { display: "flex", alignItems: "center" },

  header__title: {
    color: "white",
    fontSize: "25px",
    fontWeight: "normal",
    marginLeft: "25px",
    marginTop: "20px",
    marginBottom: "30px"
  },

  header__icon: { fontSize: "24px", marginLeft: "20px", cursor: "pointer" },

  coupon__name: {
    color: "white",
    display: "block",
    marginBottom: "5px",
    marginLeft: "25px",
    marginTop: "20px",
    fontSize: "14px",
    fontWeight: "300"
  },
  coupon__discount: {
    color: "white",
    display: "block",
    marginBottom: "10px",
    marginLeft: "25px",
    fontSize: "18px"
  },
  coupon__leftday: {
    color: "#66FFA6",
    padding: "5px 10px",
    borderRadius: "15px",
    fontSize: "14px",
    marginRight: "25px"
  },
  coupon__column: { display: "flex", alignItems: "center" },
  coupon__content: { display: "block", marginBottom: "5px" },
  coupon__coupon: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },
  coupon__divider: {
    color: "white",
    backgroundColor: "white",
    height: "1px",
    borderColor: "white",
    marginLeft: "20px",
    opacity: "0.18"
  },
  header_backButton: {
    marginTop: "60px",
    marginLeft: "20px",
    border: "none"
  },
  coupon_notAbletoUse: {
    color: "#34ebe8",

    fontSize: "14px"
  }
}));

function UseMyCoupon(props) {
  const classes = useStyles(props);

  const data = [];
  const [userID, setUserID] = useState("");
  function getID(callback) {
    // new Promise() 추가
    return new Promise(function (resolve, reject) {
      window.getUserIdFromNativeOnTheComponentJS = function (id) {
        setUserID(id);
        resolve(id);
      };
    });
  }
  window.getUserIdFromNativeOnTheComponentJS = function (id) {};

  return (
    <>
      <AppHeader title="간편결제 방법을 선택하세요" />
      {/* <main className="banto_blackBackground_withAppHeader"> */}
      <SelectionCard />
      {/* </main> */}
    </>
  );
}

export default UseMyCoupon;
