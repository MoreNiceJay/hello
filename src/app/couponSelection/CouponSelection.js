import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../../styles.css";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import AppHeader from "../../components/AppHeader";
const axios = require("axios");

const useStyles = makeStyles(theme => ({
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

function CouponSelection(props) {
  const classes = useStyles(props);

  const [data, setData] = useState([]);
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
        .post("https://www.serverbatty.com/partners/getCouponList", {
          // .post("https://mulli.world/partners/getCouponList", {
          USER_ID: id
        })
        .then(res => {
          setData(res.data);
        });
    });
  }, [userID]);

  const dummyData = [
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    }
  ];
  //쿠폰이 사용가능한지 알려줌
  //리턴값: ableToUse, dDay
  //사용가능 dDay = 만료일자, 사용불가dDay = 사용가능한 날짜
  function dDayCalculatorFromNow(start_time, end_time) {
    const startTime = moment(start_time);
    const endTime = moment(end_time);

    //스타트 타임이 아직 오늘이 안됐으면 하늘색 처리(dda) 이후 사용가능
    if (moment(start_time).isAfter(moment())) {
      return {
        ableToUse: false,
        dDay: (
          <span className={classes.coupon_notAbletoUse}>
            {String(startTime.diff(moment(), "days")) + "일 이후 사용가능"}
          </span>
        )
      };
    }
    //오늘부터 엔드 타임이 몇일 남앗는지 계산하기
    // console.log(String(moment.duration(timeLeft.diff(moment)).asDays()));
    return {
      ableToUse: true,
      dDay: <span>{"D-" + String(endTime.diff(moment(), "days"))}</span>
    };
  }

  return (
    <>
      <AppHeader title="쿠폰을 선택하세요" />
      <main className="banto_blackBackground_withAppHeader">
        {data.map((object, i) => (
          <ul className={classes.coupon__list}>
            <hr className={classes.coupon__divider} />
            <li
              className={classes.coupon__coupon}
              onClick={() => {
                window.webkit.messageHandlers.couponTapped.postMessage(
                  JSON.stringify(object)
                );
              }}
            >
              <div className={classes.coupon__column}>
                <div className={classes.coupon__content}>
                  <span className={classes.coupon__name}>
                    {" "}
                    {object.coupon_title}{" "}
                  </span>{" "}
                  <span className={classes.coupon__discount}>
                    {object.discount_price +"원 할인"}{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className={classes.coupon__column}>
                <div className={classes.coupon__leftday}>
                  {
                    dDayCalculatorFromNow(object.start_time, object.end_time)
                      .dDay
                  }
                  {/* {() => {
										const dDay = dDayCalculatorFromNow(object.start_time, object.end_time);
										console.log(dDay.dDay);
										if (dDay.ableToUse) {
											return <span> {dDay.dDay}</span>;
										}
										return <span> {dDay.dDay}</span>;
									}}{' '} */}
                </div>{" "}
              </div>{" "}
            </li>{" "}
            <hr className={classes.coupon__divider} />
          </ul>
        ))}
      </main>
    </>
  );
}

export default CouponSelection;
