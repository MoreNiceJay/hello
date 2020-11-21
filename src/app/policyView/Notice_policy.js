import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const NoticePolicy = props => {
  return (
    <>
      <head>
        <title>문자 알림 수신 동의</title>
        <link rel="stylesheet" href="https://stackedit.io/style.css" />
      </head>

      <div className="stackedit__html">
        <h3>
          <strong>문자 알림 수신 동의</strong>
        </h3>
        <p>
          <strong>목적 </strong>
        </p>
        <p>
          (주)반토 주식회사는 회사가 운영하는 반토 서비스에서 이용자 맞춤형
          서비스를 문자(SMS 또는 카카오 알림톡), 푸시를 통해 이용자에게
          제공합니다
        </p>
        <p>
          문자 알림 수신 동의는 필수 이며, 미동의 시 서비스 사용이 불가합니다
        </p>
        <p>
          문자, 푸시 알림으로 제공 되는 정보
          <br />
        </p>
        <li>잔여 반납 시간</li>
        <li>반납 확인</li>
        <li>분실 잔여 시간</li>
      </div>
    </>
  );
};

export default NoticePolicy;
