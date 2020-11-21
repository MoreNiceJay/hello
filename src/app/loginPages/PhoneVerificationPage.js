import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// import { HeaderInfo } from "../../components/HeaderInfo.js";
// import { NavBar } from "../../components/NavBar.js";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import { useGlobal } from "../../globalContext";
import { useAuth } from "../../AuthContext";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Slide from "@material-ui/core/Slide";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import SquareButton from "../../components/SquareButton";
import firebase from "../../firebaseConfig.js";
import Countdown from "react-countdown";

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
  const [bSent, setBSent] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setLoding] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [certNum, setCertNum] = React.useState("");

  const auth = useAuth();
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  React.useEffect(() => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
        "recaptcha-container",
        {
          size: "invisible",
          callback: function (response) {}
        }
      );
    }
  }, []);
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      setBSent(false);
      return null;
    } else {
      // Render a countdown
      return (
        <span>
          {minutes}:{seconds}
        </span>
      );
    }
  };
  const phoneInit = () => {
    let number = auth.phoneNumber.replace("0", "");
    number = "+82" + number;
    console.log(number);

    firebase
      .auth()

      .signInWithPhoneNumber(number, window.recaptchaVerifier)
      .then(function (e) {
        setOpen(true);
        console.log(e);
        window.confirmationResult = e;
        e.confirm(code)
          .then(function (result) {
            console.log("유우져", result.user, "user");

            return Promise.resolve();
          })
          .then(function () {
            var user = firebase.auth().currentUser;

            user.delete().then(function () {
              console.log("확인되었습니다");
            });
          })
          .catch((error) => {
            console.log(error.message);
            console.log(error.code);
            window.alert(error.message);
          });
      })
      .catch((error) => {
        console.log(error.message);
        console.log(error.code);
        window.alert(error.message);
      });
  };

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
            <div
              style={{
                display: "flex",
                flexDirection: "rows",
                justifyContent: "space-between"
              }}
            >
              <div style={{ display: "flex", flexDirection: "rows" }}>
                <Link to={"/login/login"} style={{ marginLeft: "16px" }}>
                  <img src={require("../../images/back.png")} />
                </Link>
                <p
                  style={{
                    marginLeft: "16px",
                    fontFamily: "Noto Sans CJK KR",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    fontSize: "18px",
                    lineHeight: "27px",
                    /* identical to box height */

                    display: "flex",
                    alignItems: "center",
                    color: "#EAEBF1"

                    /* Light */
                  }}
                >
                  휴대전화 인증
                </p>
              </div>
              <Link to={"/login/login"} style={{ marginRight: "12px" }}>
                <img src={require("../../images/close.png")} />
              </Link>
            </div>

            <div className={classes.emptySpace} />
            {/* <div className={classes.headerSpace}> */}
            {/* <span className={classes.headerTitle}>로그인</span> */}
            {/* <span /> */}
            {/* </div> */}
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
                    color: "#EAEBF1"
                  }}
                >
                  전화번호
                </p>

                <TextField
                  variant="outlined"
                  id="standard-full-width"
                  // label="Phone Number"
                  className={classes.textField}
                  placeholder="Phone Number"
                  type="email"
                  // helperText="투자하신 기기 수량만큼 수익이 창출됩니다"
                  value={auth.phoneNumber}
                  onChange={(e) => {
                    auth.setUserPhoneNumber(e.target.value);
                  }}
                  style={{
                    margin: "0 24px",
                    marginTop: "12px",
                    width: "calc(100% - 64px)"
                  }}
                  InputProps={{
                    classes: {
                      input: classes.input
                    }
                  }}
                  inputProps={{
                    style: {
                      paddingLeft: "0px",
                      fontSize: "26px",
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      color: "#00E676",
                      boxSizing: "border-box",
                      marginTop: "10px"
                    }
                  }}
                  // FormHelperTextProps={{
                  //   style: {
                  //     marginTop: "12px",
                  //     fontSize: "14px"
                  //   }
                  // }}
                />
              </div>
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  margin: "60px 0 0 24px",
                  color: "#EAEBF1"
                }}
              >
                인증번호
              </p>

              <TextField
                variant="outlined"
                id="standard-full-width"
                // label="Phone Number"
                className={classes.textField}
                placeholder="Password"
                type="password"
                // helperText="투자하신 기기 수량만큼 수익이 창출됩니다"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  margin: "0 24px",
                  marginTop: "12px",
                  width: "calc(100% - 64px)"
                }}
                InputProps={{
                  classes: {
                    input: classes.input
                  }
                }}
                inputProps={{
                  style: {
                    paddingLeft: "0px",
                    fontSize: "26px",
                    fontFamily: "Montserrat",
                    fontWeight: "bold",
                    color: "#00E676",
                    boxSizing: "border-box",
                    marginTop: "10px"
                  }
                }}
                // FormHelperTextProps={{
                //   style: {
                //     marginTop: "12px",
                //     fontSize: "14px"
                //   }
                // }}
              />

              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "rows",
                  alignItems: "center"
                }}
              >
                {bSent && (
                  <Countdown
                    date={Date.now() + 180000}
                    renderer={renderer}
                    zeroPadTime={2}
                  />
                )}
                <Button
                  variant="outlined"
                  onClick={() => {
                    if (!!!auth.phoneNumber) {
                      window.alert("전화번호를 입력해주세요");
                      return;
                    }
                    setBSent(true);
                    phoneInit();
                  }}
                  style={{
                    height: "32px",
                    margin: "24px 32px 24px 14px",
                    borderRadius: "8px",
                    border: "2px solid #000A12",
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "normal",
                    fontSize: "12px",
                    background: "#000A12",
                    color: "white"
                  }}
                >
                  {bSent ? "재전송" : "인증번호 전송"}
                </Button>
              </div>
            </section>
            <section>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "40px"
                }}
              >
                <SquareButton
                  // disabled={!(!!certNum && !!context.getRegisterInfo.phoneNumber)}
                  onClick={() => {
                    // phoneInit();
                    window.confirmationResult
                      .confirm("123456")
                      .then(function (result) {
                        // User signed in successfully.
                        var user = result.user;
                        // ...
                        return Promise.resolve();
                      })
                      .then(function () {
                        var user = firebase.auth().currentUser;
                        user.delete().then(function () {
                          props.history.push("/login/signupdetail");
                        });
                      })
                      .catch(function (error) {
                        window.alert(error.message);
                      });
                  }}
                  //     return Promise.resolve();
                  //   })
                  //   .then(function () {
                  //     var user = firebase.auth().currentUser;

                  //     user.delete().then(function () {
                  //       console.log("확인되었습니다");
                  //     });
                  //   })
                  //   .catch((error) => {
                  //     console.log(error.message);
                  //     console.log(error.code);
                  //     window.alert(error.message);
                  //   });

                  text="NEXT"
                />
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
          <div id="recaptcha-container"></div>
        </div>
      </Slide>
    </>
  );
}

export default LoginPage;
