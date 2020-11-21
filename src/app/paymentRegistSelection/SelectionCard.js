import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import addImage from "../../images/add.png";

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

  hello: {
    background: "grey",
    position: "absolute",
    textAlign: "center",
    width: "100%",
    top: "20%",
    left: "0"
  },
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center,",
    justifyContent: "space-around",
    position: "relative"
  },
  creditCardCard: {
    // background: "white",
    // backgroundColor: "#4CAF50" /* Green */,
    // border: "none",
    // color: "white",
    // padding: "16px 32px",
    // textAlign: "center",
    // textDecoration: "none",
    // display: "inlineBlock",
    // fontSize: "16px",
    // margin: "4px 2px",
    // transitionDuration: "0.4s",
    // cursor: "pointer",
    display: "inline",
    backgroundColor: "black",
    color: "#CDCDD1",
    border: "2px solid #CDCDD1",
    borderRadius: "25px",
    boxSizing: "border-box",
    width: "42%",
    left: "20px",
    position: "absolute"
  },
  kakaopayCard: {
    // background: "white",
    // backgroundColor: "#4CAF50" /* Green */,
    // border: "none",
    // color: "white",
    // padding: "16px 32px",
    // textAlign: "center",
    // textDecoration: "none",
    // display: "inlineBlock",
    // fontSize: "16px",
    // margin: "4px 2px",
    // transitionDuration: "0.4s",
    // cursor: "pointer",
    display: "inline",
    backgroundColor: "black",
    color: "#CDCDD1",
    border: "2px solid #CDCDD1",
    borderRadius: "25px",
    boxSizing: "border-box",
    width: "42%",
    right: "20px",

    position: "absolute"
  },
  not_text_group: { paddingTop: "59%", justifyContent: "center" },
  text_group: {
    justifyContent: "center"
  },
  nono: {},

  add_icon: {
    marginBottom: "46px",
    marginLeft: "auto",
    marginRight: "auto",
    display: "block"
  },
  title_span: {
    fontSize: "18px",
    marginBottom: "20px"
  }
}));

const dummy = [{ title: "신용카드" }, { title: "카카오페이" }];
const SelectionCard = props => {
  const classes = useStyles(props);

  return (
    <>
      <div className="selectionCard_main">
        <button
          type="button"
          className={classes.creditCardCard}
          onClick={() => {
            console.log("헬로");
            window.webkit.messageHandlers.creditCardSelected.postMessage(
              "creditCardSelected"
            );
          }}
        >
          <div className={classes.not_text_group} />
          <div className={classes.text_group}>
            <img src={addImage} className={classes.add_icon} alt="add" />
            <div>
              <div className={classes.title_span}>신용카드</div>
            </div>
          </div>
        </button>

        <a href="/kakaopayregistration">
          <button
            className={classes.kakaopayCard}
            // onClick={() => {
            //   console.log("헬로");
            //   // window.webkit.messageHandlers.kakaoPaySelected.postMessage(
            //   // "kakaoPaySelected"
            //   // );
            // }}
          >
            <div className={classes.not_text_group} />
            <div className={classes.text_group}>
              <img src={addImage} className={classes.add_icon} alt="add" />
              <div>
                <div className={classes.title_span}>카카오페이</div>
              </div>
            </div>
          </button>
        </a>
      </div>
    </>
  );
};

export default SelectionCard;
