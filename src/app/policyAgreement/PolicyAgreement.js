import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../../styles.css";
import policyDisagree_img from "../../images/policyDisagree_img.png";
import policyAgree_img from "../../images/policyAgree_img.png";
import nextAble_img from "../../images/nextAble_img.png";
import nextDisabled_img from "../../images/nextDisabled_img.png";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppHeader from "../../components/AppHeader";
import AppHeaderWithBack from "../../components/AppHeaderWithBack";

const axios = require("axios");

export default function PolicyAgreement() {
  const [allAgree, setAllAgree] = useState({ checked: false });
  const [serviceAgree, setServiceAgree] = useState({ checked: false });
  const [privateAgree, setPrivateAgree] = useState({ checked: false });
  const [textAgree, setTextAgree] = useState({ checked: false });
  const [marketingAgree, setMarketingAgree] = useState({ checked: false });
  const [finalButtonPass, setFinalButtonPass] = useState({ pass: false });

  const [policyUrl, setPolicyUrl] = useState(
    "https://bantoweb.xyz/policy/service_policy"
  );
  const [policyType, setPolicyType] = useState("service");
  const [userId, setUserId] = useState("");
  const pType = {
    service: "service",
    private: "private",
    notice: "notice",
    marketing: "marketing"
  };

  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  function getID(callback) {
    return new Promise(function(resolve, reject) {
      window.getUserIdFromNativeOnTheComponentJS = function(id) {
        resolve(id);
      };
    });
  }

  React.useEffect(() => {
    if (policyType === pType.service) {
      setPolicyUrl("https://bantoweb.xyz/policy/service_policy");
    }

    if (policyType === pType.private) {
      setPolicyUrl("https://bantoweb.xyz/policy/private_policy");
    }
    if (policyType === pType.notice) {
      setPolicyUrl("https://bantoweb.xyz/policy/notice_policy");
    }
    if (policyType === pType.marketing) {
      setPolicyUrl("https://bantoweb.xyz/policy/marketing_policy");
    }
  }, [policyType]);

  const handleClickOpen = (scrollType, policyT) => () => {
    setPolicyType(policyT);

    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function hello() {
    if (window.webkit != undefined) {
      window.webkit.messageHandlers.buttonSelected.postMessage(
        "buttonSelected"
      );
    }
    if (window.androidHandlers != undefined) {
      window.androidHandlers.buttonSelected("buttonSelected");
    }
    getID().then(id => {
      setUserId(id);
      axios
        .post("https://www.serverbatty.com/banto/UserAgreedPolicy", {
          userId: id
        })
        .then(res => {
          if (marketingAgree.checked) {
            axios.post(
              "https://www.serverbatty.com/banto/UserAgreedMarketingPolicy",
              {
                userId: id
              }
            );
          }
        })
        .then(res => {
          if (window.webkit != undefined) {
            window.webkit.messageHandlers.userAgreed.postMessage("userAgreed");
          }
          if (window.androidHandlers != undefined) {
            window.androidHandlers.userAgreed("userAgreed");
          }
        });
    });
  }

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  useEffect(() => {
    function finalButtonTapped() {
      if (
        textAgree.checked &&
        privateAgree.checked &&
        serviceAgree.checked &&
        !marketingAgree.checked
      ) {
        setFinalButtonPass({ pass: true });
      } else if (
        textAgree.checked &&
        privateAgree.checked &&
        serviceAgree.checked &&
        marketingAgree.checked
      ) {
        setFinalButtonPass({ pass: true });
      } else {
        setFinalButtonPass({ pass: false });
      }
    }
    finalButtonTapped();
  }, [allAgree, serviceAgree, privateAgree, textAgree, marketingAgree]);

  function changedAllAgree() {
    if (allAgree.checked) {
      setAllAgree({ checked: false });
    } else {
      setAllAgree({ checked: true });
      setServiceAgree({ checked: true });
      setPrivateAgree({ checked: true });
      setTextAgree({ checked: true });
      setMarketingAgree({ checked: true });
    }
  }
  function changedServiceAgree() {
    if (serviceAgree.checked) {
      setServiceAgree({ checked: false });
      setAllAgree({ checked: false });
    } else {
      setServiceAgree({ checked: true });
    }
  }
  function changedPrivateAgree() {
    if (privateAgree.checked) {
      setPrivateAgree({ checked: false });
      setAllAgree({ checked: false });
    } else {
      setPrivateAgree({ checked: true });
    }
  }
  function changedTextAgree() {
    if (textAgree.checked) {
      setTextAgree({ checked: false });
      setAllAgree({ checked: false });
    } else {
      setTextAgree({ checked: true });
    }
  }
  function changedMarketingAgree() {
    if (marketingAgree.checked) {
      setMarketingAgree({ checked: false });
      setAllAgree({ checked: false });
    } else {
      setMarketingAgree({ checked: true });
    }
  }

  return (
    <>
      <AppHeaderWithBack
        title="쿠폰함"
        description="쿠폰은 대여시에 적용할 수 있습니다"
      />
      <main className="banto_blackBackground_withAppHeader">
        <div className="agremeentAll_container">
          <button
            className="agree_button"
            type="button"
            onClick={() => {
              changedAllAgree();
            }}
          >
            {allAgree.checked ? (
              <img
                src={policyAgree_img}
                alt=""
                className="disAgree_button_img"
              />
            ) : (
              <img
                src={policyDisagree_img}
                className="agree_button_img"
                alt=""
              />
            )}
          </button>
          <p className="agreeAll_text">모든 약관에 동의</p>
        </div>
        {/**/}
        <div className="agreementEach_container">
          <div className="agreementEach_box">
            <button
              className="agree_button"
              type="button"
              onClick={() => {
                changedServiceAgree();
              }}
            >
              {serviceAgree.checked ? (
                <img
                  src={policyAgree_img}
                  alt=""
                  className="disAgree_button_img"
                />
              ) : (
                <img
                  src={policyDisagree_img}
                  className="agree_button_img"
                  alt=""
                />
              )}
            </button>
            <p
              className="agreeAll_text"
              onClick={handleClickOpen("paper", pType.service)}
            >
              [필수] 서비스 이용 약관 동의
            </p>
          </div>
        </div>
        {/*  */}
        <div className="agreementEach_container">
          <div className="agreementEach_box">
            <button
              className="agree_button"
              type="button"
              onClick={() => {
                changedPrivateAgree();
              }}
            >
              {privateAgree.checked ? (
                <img
                  src={policyAgree_img}
                  alt=""
                  className="disAgree_button_img"
                />
              ) : (
                <img
                  src={policyDisagree_img}
                  className="agree_button_img"
                  alt=""
                />
              )}
            </button>
            <p
              className="agreeAll_text"
              onClick={handleClickOpen("paper", pType.private)}
            >
              [필수] 개인정보 수집 및 이용 동의
            </p>
          </div>
        </div>
        {/*  */}
        <div className="agreementEach_container">
          <div className="agreementEach_box">
            <button
              className="agree_button"
              type="button"
              onClick={() => {
                changedTextAgree();
              }}
            >
              {textAgree.checked ? (
                <img
                  src={policyAgree_img}
                  alt=""
                  className="disAgree_button_img"
                />
              ) : (
                <img
                  src={policyDisagree_img}
                  className="agree_button_img"
                  alt=""
                />
              )}
            </button>
            <p
              className="agreeAll_text"
              onClick={handleClickOpen("paper", pType.notice)}
            >
              [필수] 문자 알림 수신 동의
            </p>
          </div>
        </div>
        <div className="agreementEach_container2">
          <div className="agreementEach_box">
            <button
              className="agree_button"
              type="button"
              onClick={() => {
                changedMarketingAgree();
              }}
            >
              {marketingAgree.checked ? (
                <img
                  src={policyAgree_img}
                  alt=""
                  className="disAgree_button_img"
                />
              ) : (
                <img
                  src={policyDisagree_img}
                  className="agree_button_img"
                  alt=""
                />
              )}
            </button>
            <p
              className="agreeAll_text"
              onClick={handleClickOpen("paper", pType.marketing)}
            >
              [선택] 마케팅 정보 활용 동의
            </p>
          </div>
          <p className="agree_description">
            쿠폰 및 포인트 발행에 있어 적합한 이벤트를 제공하기 위한 서비스에
            활용됩니다.
          </p>
        </div>

        <button
          className="agreeNext_button"
          type="button"
          onClick={() => {
            if (finalButtonPass.pass) {
              window.console.log("ss");
              hello();
            }
          }}
        >
          {finalButtonPass.pass ? (
            <img src={nextAble_img} alt="" className="passButton_img" />
          ) : (
            <img src={nextDisabled_img} className="passButton_img" alt="" />
          )}
        </button>
        {/* next button is over dialogggggggg */}
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            scroll={scroll}
            aria-labelledby="scroll-dialog-title"
            aria-describedby="scroll-dialog-description"
          >
            <DialogTitle id="scroll-dialog-title">약관 내용</DialogTitle>
            <DialogContent dividers={scroll === "paper"}>
              <DialogContentText
                id="scroll-dialog-description"
                ref={descriptionElementRef}
                tabIndex={-1}
              >
                {<iframe src={policyUrl} />}
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                확인
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </main>

      <div className="banto_blackBottomMargin" />
    </>
  );
}
