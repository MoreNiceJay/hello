import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "./AuthContext";

import App from "./App";
import EventList from "./app/eventList/EventList";
// event popups
import Event555 from "./app/popUps/event_555";
import WelcomeEvent from "./app/popUps/welcomeEvent";
// event detailpages
import DetailPage from "./app/detailPages/DetailPage";
import WelcomeEventDetailPage from "./app/detailPages/WelcomeEventDetailPage";

import PaymentRegistSelection from "./app/paymentRegistSelection/PaymentRegistSelection";
import KakaoPayRegistration from "./app/kakaoPayRegistration/KakaoPayRegistration";
import CouponSelection from "./app/couponSelection/CouponSelection";
import CouponList from "./app/couponList/CouponList";
import PolicyAgreement from "./app/policyAgreement/PolicyAgreement";
import Service_policy from "./app/policyView/Service_policy";
import Private_policy from "./app/policyView/Private_policy";
import Notice_policy from "./app/policyView/Notice_policy";
import Marketing_policy from "./app/policyView/Marketing_policy";
// import LoginPageForWeb from "./app/loginPageForWeb/LoginPageForWeb";
// import KakaoPayRegisterForWeb from "./app/kakaopayRegisterForWeb/KakaoPayRegisterForWeb";
// import PurchaseForWeb from "./app/purchaseForWeb/PurchaseForWeb";
// import BatteryRentCompleteForWeb from "./app/batteryRentCompleteForWeb/BatteryRentCompleteForWeb";
// import BatteryRentFailForWeb from "./app/batteryRentFailForWeb/BatteryRentFailForWeb";
// import BatteryIsRentingForWeb from "./app/batteryIsRentingForWeb/BatteryIsRentingForWeb";
// logins
// logins
import LoginPage from "./app/loginPages/LoginPage";
import PhoneVerificationPage from "./app/loginPages/PhoneVerificationPage";
import SignUpDetailPage from "./app/loginPages/SignUpDetailPage";
import SignUpPage from "./app/loginPages/SignUpPage.js";
import FindPassword from "./app/loginPages/FindPassword.js";

import Reducer from "./reducers/Reducer";
import Hi from "./app/hi/Hi";

import WebFont from "webfontloader";
WebFont.load({
  google: {
    families: [
      "Titillium Web:300,400,700",
      "sans-serif",
      "Noto Sans KR : 300 400 700",
      "Roboto"
    ]
  }
});
const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <AuthProvider>
      <React.StrictMode>
        <Switch>
          <Route Z exact path="/" component={App} />
          <Route exact path="/eventlist" component={EventList} />
          {/* event PopUps */}
          <Route exact path="/event555" component={Event555} />
          <Route exact path="/welcomeevent" component={WelcomeEvent} />
          {/* event detail pages */}
          <Route exact path="/detailPage" component={DetailPage} />
          <Route
            exact
            path="/welcomeeventdetailpage"
            component={WelcomeEventDetailPage}
          />

          <Route
            exact
            path="/paymentregistselection"
            component={PaymentRegistSelection}
          />
          <Route
            exact
            path="/kakaopayregistration"
            component={KakaoPayRegistration}
          />
          <Route exact path="/policyagreement" component={PolicyAgreement} />
          <Route exact path="/couponselection" component={CouponSelection} />
          <Route exact path="/couponlist" component={CouponList} />
          <Route exact path="/hi" component={Hi} />
          <Route
            exact
            path="/policy/service_policy"
            component={Service_policy}
          />
          <Route
            exact
            path="/policy/private_policy"
            component={Private_policy}
          />
          <Route exact path="/policy/notice_policy" component={Notice_policy} />

          <Route
            exact
            path="/policy/marketing_policy"
            component={Marketing_policy}
          />
          {/* <Route exact path="/loginpage" component={LoginPageForWeb} />
      <Route exact path="/loginpage/:stationId" component={LoginPageForWeb} />
      <Route
        exact
        path="/kakaopayregisterforweb"
        component={KakaoPayRegisterForWeb}
      />
      <Route
        exact
        path="/batteryrentcompleteforweb"
        component={BatteryRentCompleteForWeb}
      />
      <Route
        exact
        path="/batteryrentfailforWeb"
        component={BatteryRentFailForWeb}
      />
      <Route exact path="/purchaseforweb" component={PurchaseForWeb} />
      <Route
        exact
        path="/batteryisrentingforweb"
        component={BatteryIsRentingForWeb}
      /> */}
          {/* login */}
          <Route exact path="/login/login" component={LoginPage} />
          <Route
            exact
            path="/login/phoneverification"
            component={PhoneVerificationPage}
          />
          <Route
            exact
            path="/login/signupdetail"
            component={SignUpDetailPage}
          />
          <Route exact path="/login/signup" component={SignUpPage} />
          <Route exact path="/login/findpassword" component={FindPassword} />
        </Switch>
      </React.StrictMode>
    </AuthProvider>
  </BrowserRouter>,

  rootElement
);
