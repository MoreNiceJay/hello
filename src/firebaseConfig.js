import firebase from "firebase";
var firebaseConfig = {
  apiKey: "AIzaSyC60otgYXhijMbn9-YhwLvou8-vTg1oGkc",
  authDomain: "banto-new.firebaseapp.com",
  databaseURL: "https://banto-new.firebaseio.com",
  projectId: "banto-new",
  storageBucket: "banto-new.appspot.com",
  messagingSenderId: "79029229331",
  appId: "1:79029229331:web:b1556859aff61c5283ece6",
  measurementId: "G-77EQCPPNQQ"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;

const google_provider = new firebase.auth.GoogleAuthProvider();
const fb_provider = new firebase.auth.FacebookAuthProvider();
const twitter_provider = new firebase.auth.TwitterAuthProvider();
const github_provider = new firebase.auth.GithubAuthProvider();

export { google_provider, fb_provider, twitter_provider, github_provider };
