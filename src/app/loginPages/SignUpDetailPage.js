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
import SquareButton from "../../components/SquareButton";
import { useAuth } from "../../AuthContext";

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
  const auth = useAuth();

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
                <Link
                  to={"/login/phoneverification"}
                  style={{ marginLeft: "16px" }}
                >
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
                  인증
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
                  이메일
                </p>

                <TextField
                  variant="outlined"
                  id="standard-full-width"
                  // label="Phone Number"
                  className={classes.textField}
                  placeholder="Email"
                  type="email"
                  // helperText="투자하신 기기 수량만큼 수익이 창출됩니다"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
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
                비밀번호
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
              <p
                style={{
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "16px",
                  margin: "60px 0 0 24px",
                  color: "#EAEBF1"
                }}
              >
                비밀번호 확인
              </p>

              <TextField
                variant="outlined"
                id="standard-full-width"
                // label="Phone Number"
                className={classes.textField}
                placeholder="Confirm Password"
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
                    auth.singUpWithEmail(email, "123456").then((res) => {
                      console.log(res);
                    });
                    // window.confirmationResult
                    //   .confirm(certNum)
                    //   .then(function (result) {
                    //     // User signed in successfully.
                    //     var user = result.user;
                    //     // ...
                    //     return Promise.resolve();
                    //   })
                    //   .then(function () {
                    //     var user = firebase.auth().currentUser;
                    //     user.delete().then(function () {
                    //       props.history.push("/login/register/second");
                    //     });
                    //   })
                    //   .catch(function (error) {
                    //     window.alert(error.message);
                    //   });
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
        </div>
      </Slide>
    </>
  );
}

export default LoginPage;
