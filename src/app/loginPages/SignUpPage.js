import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { HeaderInfo } from "../../components/HeaderInfo.js";
// import { NavBar } from "../../components/NavBar.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { useGlobal } from "../../globalContext";
// import { useAuth } from "../../AuthContext";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles((theme) => ({
  emptySpace: { width: "100%", height: "44px" },
  headerSpace: {
    display: "flex",
    // alignItems: "center",
    width: "100%",
    height: "60px"
  },
  headerTitle: {
    fontSize: "36px",
    fontWeight: "bold",
    marginLeft: "24px",
    color: "#EAEBF1"
  },
  textField: {
    "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
      border: "none"
    }
  },
  input: {
    "&::placeholder": {
      color: "#313139",
      fontSize: "26px",
      fontFamily: "Montserrat"
    }
  }
}));

function LoginPage(props) {
  const classes = useStyles(props);
  // const context = useGlobal();
  // const auth = useAuth();
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setLoding] = React.useState(false);
  return (
    <>
      <Slide
        direction="left"
        in={true}
        timeout={{ enter: "0.15s", exit: "5s" }}
        mountOnEnter
        unmountOnExit
      >
        <div style={{ backgroundColor: "#0B0B0C", height: "100vh" }}>
          <header>
            <div className={classes.emptySpace} />
            <div>
              <Link to={"/login/login"} style={{ marginLeft: "16px" }}>
                <img src={require("../../images/back.png")} />
              </Link>
            </div>

            <div className={classes.emptySpace} />

            <div className={classes.headerSpace}>
              <span className={classes.headerTitle}>회원가입</span>
              <span />
            </div>
          </header>

          <main style={{ backgroundColor: "#0B0B0C" }}>
            <section className={classes.section}>
              <div className={classes.amount}>
                {/* <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "14px",
                    opacity: "0.8",
                    letterSpacing: "5px",
                    margin: "16px 0 0 24px"
                  }}
                >
                  1/8
                </p> */}
                <p
                  style={{
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "16px",
                    margin: "0 0 0 24px",
                    paddingTop: "16px",
                    color: "#EAEBF1",
                    opacity: "0.8"
                  }}
                >
                  가입방식을 선택해주세요
                </p>
              </div>
            </section>
            <section>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto",
                  marginTop: "140px"
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    props.history.push("/login/signupdetail");
                  }}
                  style={{
                    width: "calc(100% - 32px)",
                    height: "64px",
                    margin: "24px auto",
                    borderRadius: "15px",
                    border: "2px solid #000A12",
                    fontFamily: "Noto Sans CJK KR",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "18px",
                    backgroundColor: "#EAEBF1"
                  }}
                >
                  반토 회원가입
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setLoding(true);

                    // auth
                    //   .singInWithEmail(email, password)
                    //   .then((user) => {
                    //     console.log("로그인");

                    //     console.log("유저오니", user);
                    //     setLoding(false);
                    //     props.history.push("/main");
                    //   })
                    //   .catch((error) => {
                    //     setLoding(false);

                    //     window.alert(error.message);
                    //   });
                  }}
                  style={{
                    width: "calc(100% - 32px)",
                    height: "64px",
                    margin: "24px auto",
                    borderRadius: "15px",
                    backgroundColor: "#000A12",
                    border: "2px solid #FFD95A",
                    fontFamily: "Noto Sans CJK KR",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "#FFD95A"
                  }}
                >
                  <img
                    src={require("../../images/kakaotalk 1.png")}
                    style={{ marginRight: "8px" }}
                    alt="카카오"
                  />{" "}
                  카카오로 시작하기
                </Button>

                {/* {auth.isLogin ?? (
                  <Link
                    onClick={() => {
                      auth.signOut();
                      console.log("싸인아웃");
                    }}
                  >
                    로그아웃
                  </Link>
                )} */}
              </div>
            </section>
          </main>
          <footer></footer>
          {isLoading && (
            <CircularProgress
              style={{
                position: "fixed",
                transitionDelay: { isLoading } ? "800ms" : "0ms",
                left: "calc(50% - 15px)",
                top: "49%"
              }}
            />
          )}
        </div>
      </Slide>
    </>
  );
}

export default LoginPage;
