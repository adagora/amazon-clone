import firebase from "firebase";

const firebase = firebase.initializeApp({
        apiKey: "AIzaSyAi-dawa4pihqk2oHOdialBCWZN0kfExYw",
        authDomain: "clone-57b64.firebaseapp.com",
        databaseURL: "https://clone-57b64.firebaseio.com",
        projectId: "clone-57b64",
        storageBucket: "clone-57b64.appspot.com",
        messagingSenderId: "122950922360",
        appId: "1:122950922360:web:8eae41bebe5b11686cbd8d",
        measurementId: "G-9LMVSVCZF0"
      });

      const auth = firebase.auth();

      export { auth };
