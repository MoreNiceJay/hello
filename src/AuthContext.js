import React, { useEffect, useState } from "react";
import firebase from "./firebaseConfig";
import moment from "moment";
export const AuthContext = React.createContext();
export function useAuth() {
  return React.useContext(AuthContext);
}
//2.

//3.
export const AuthProvider = ({ children }) => {
  let db = firebase.firestore();
  let userRef = db.collection("Users");
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [bUserInfoAdded, setBUserInfoAdded] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  var auth = firebase.auth();
  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        // Sign-out successful.
        setUserStatus();
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  const setUserPhoneNumber = (phoneNumber) => {
    setPhoneNumber(() => {
      return phoneNumber;
    });
  };

  // 디비 관련 함수 (유저가 아님 TODO: 나중에 옮기기)
  const createStoreApplication = () => {
    const applicationRef = db.collection("Applications");
    applicationRef.add({
      progress: "discussing",
      userId: user.email,
      createdAt: moment().format()
    });
  };

  //디비 관련 함수 끝
  const updateExtraProfiles = (
    name,
    birthdate,
    bank,
    accountNumber,
    accountHolder,
    bBusinessLicense,
    businessLicenseImg
  ) => {
    return new Promise((resolve, reject) => {
      var postData = {
        bExtraProfileUpdated: true,
        name,
        birthdate,
        bank,
        accountNumber,
        accountHolder,
        bBusinessLicense,
        businessLicenseImg
      };
      userRef.doc(user.email).update(postData);
    });
  };

  const sendPasswordResetEmail = (email) => {
    return new Promise((resolve, reject) => {
      auth
        .sendPasswordResetEmail(email)
        .then(function () {
          resolve();
        })
        .catch(function (error) {
          reject(error);
        });
    });
  };

  const sendEmailVerfication = () => {
    user
      .sendEmailVerification()
      .then(function () {
        // Email sent.
      })
      .catch(function (error) {
        // An error happened.
      });
  };
  const singUpWithEmail = (email, password) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          setUserStatus();
          userRef.doc(email).set({ bExtraProfileUpdated: false });
          resolve(userRef.doc(email));
        })
        .catch((error) => {
          reject(error);
          console.log(error);
          // ...
        });
    });
  };
  const singInWithEmail = (email, password) => {
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((value) => {
          setUserStatus();

          resolve(user);
        })
        .catch(function (error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // window.alert(errorMessage);
          // ...
          console.log(errorCode);
          console.log(errorMessage);

          reject(error);
        });
    });
  };

  const setUserStatus = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
        // ...

        console.log("로그인!", displayName, email, emailVerified, uid);
        console.log("로그인!", user);
        setUser(user);
        setIsLogin(true);
      } else {
        // User is signed out.
        // ...
        setUser(null);
        setIsLogin(false);

        console.log("로그아웃...");
      }
    });
  };

  const updateUserPhoneNumber = (phoneNumber) => {
    var user = firebase.auth().currentUser;

    user
      .updateProfile({
        photoURL: "https://example.com/jane-q-user/profile.jpg"
      })
      .then(function () {
        // Update successful.
      })
      .catch(function (error) {
        // An error happened.
      });
  };

  useEffect(() => {
    setUserStatus();
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogin,
        bUserInfoAdded,
        phoneNumber,
        setUserPhoneNumber,
        signOut,
        sendPasswordResetEmail,
        sendEmailVerfication,
        singUpWithEmail,
        singInWithEmail,
        setUserStatus,
        updateExtraProfiles,

        // 디비 업데이트 함수
        createStoreApplication
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
