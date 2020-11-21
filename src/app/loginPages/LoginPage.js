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

  React.useEffect(() => {
    if (!window.Kakao.isInitialized()) {
      window.Kakao.init("86d0fb152d4eb19ea7bb774cd3c7809c");
    }
  }, []);

  function loginWithKakao() {
    window.Kakao.Auth.login({
      success: function (authObj) {
        alert(JSON.stringify(authObj));
        console.log(JSON.stringify(authObj));
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function (res) {
            console.log(res);
          }
        });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      }
    });
  }
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
            <div className={classes.headerSpace}>
              <span className={classes.headerTitle}>로그인</span>
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
            </section>
            <section>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "40px",
                  marginRight: "24px",
                  marginLeft: "24px"
                }}
              >
                <Link
                  to="/login/signup"
                  style={{
                    textDecoration: "underline",
                    fontFamily: "Noto Sans CJK KR",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "12px",
                    marginRight: "24px",
                    color: "#EAEBF1",
                    opacity: "0.8"
                  }}
                >
                  회원가입
                </Link>
                <Link
                  to="/login/findpassword"
                  style={{
                    textDecoration: "underline",
                    fontFamily: "Noto Sans CJK KR",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "12px",
                    color: "#EAEBF1",
                    opacity: "0.8"
                  }}
                >
                  비밀번호를 잊으셨나요?
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  margin: "auto"
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => {
                    auth.singInWithEmail(email, "123456").then((res) => {
                      console.log(res);
                    });
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
                  로그인
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => {
                    setLoding(true);
                    loginWithKakao();

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
