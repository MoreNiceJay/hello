import { makeStyles } from "@material-ui/core/styles";
import React, { useEffect, useState } from "react";
import moment from "moment";
import AppHeader from "../../components/AppHeader";
import { Redirect } from "react-router-dom";
const axios = require("axios");

const useStyles = makeStyles(theme => ({}));

function KakaoPayRegistration(props) {
  const classes = useStyles(props);

  const [data, setData] = useState("");
  const [userID, setUserID] = useState("");
  function getID(callback) {
    return new Promise(function(resolve, reject) {
      window.getUserIdFromNativeOnTheComponentJS = function(id) {
        setUserID(id);
        resolve(id);
      };
    });
  }

  useEffect(() => {
    if (window.webkit != undefined) {
      window.webkit.messageHandlers.buttonSelected.postMessage(
        "buttonSelected"
      );
    }
    if (window.androidHandlers != undefined) {
      window.androidHandlers.buttonSelected("buttonSelected");
    }
    getID().then(id => {
      axios
        // .post("https://mulli.world/banto/registerKakaoPay", {
        .post("https://www.serverbatty.com/banto/registerKakaoPay", {
          USER_ID: id
        })
        .then(res => {
          setData(res.data);
        });
    });
  }, []);

  const dummyData = [
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    }
  ];

  return (
    <>
      {data.next_redirect_app_url &&
        (window.location.href = data.next_redirect_app_url)}
    </>
  );
}

export default KakaoPayRegistration;
