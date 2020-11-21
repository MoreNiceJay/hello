import React, { useEffect, useState } from "react";

import { makeStyles } from "@material-ui/styles";

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
function Hi(props) {
  const classes = useStyles(props);
  const dummyData = [
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
    {
      coupon_id: "981003d8-86d1-11ea-bc55-0242ac130003",
      coupon_title: "Welcom coupon",
      start_time: "2020-04-26 21:19:51",
      end_time: "2020-04-27 21:19:51",
      discount_price: "1350"
    },
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
      <header className={classes.header}>
        <div className={classes.header__header_column}>
          <button
            type="button"
            className={classes.header_backButton}
            onClick={() => {
              if (window.androidHandlers != undefined) {
                window.androidHandlers.callAndroid("android call");
              }
              if (window.webkit != undefined) {
                window.webkit.messageHandlers.goBackButton.postMessage(
                  "goBackButton"
                );
              }
            }}
          >
            <img src="/assets/images/banto/backButton.png" alt="backButton" />
          </button>{" "}
        </div>{" "}
        <div className={classes.header__header_column}>
          <h1 className={classes.header__title}> 쿠폰 </h1>{" "}
        </div>{" "}
        <div className={classes.header__header_column}>
          <span className={classes.header__icon}>
            <i className="fas fa-search"> </i>{" "}
          </span>
          <span className={classes.header__icon}>
            <i className="fas fa-cog"> </i>{" "}
          </span>{" "}
        </div>{" "}
      </header>{" "}
      <main className={classes.main}>
        {dummyData.map((object, i) => (
          <ul className={classes.coupon__list}>
            <hr className={classes.coupon__divider} />
            <li
              className={classes.coupon__coupon}
              // onClick={() => {
              // 	console.log(coupons.coupon_id);
              // 	// setToggle(!isToggled);
              // 	// window.webkit.messageHandlers.couponTapped.postMessage(`${object.coupon_id}`);
              // 	// alert(`${object.coupon_id}`);
              // }}
            >
              <div className={classes.coupon__column}>
                <div className={classes.coupon__content}>
                  <span className={classes.coupon__name}>
                    {" "}
                    {object.coupon_title}{" "}
                  </span>{" "}
                  <span className={classes.coupon__discount}>
                    {object.discount_price}{" "}
                  </span>{" "}
                </div>{" "}
              </div>{" "}
              <div className={classes.coupon__column}>
                <div className={classes.coupon__leftday}>
                  D-36
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

export default Hi;
