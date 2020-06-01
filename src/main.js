import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics";

// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALWH29NEZo7f7F9OeUf7g_Oq4kPDDpzM4",
  authDomain: "learning-17c6e.firebaseapp.com",
  databaseURL: "https://learning-17c6e.firebaseio.com",
  projectId: "learning-17c6e",
  storageBucket: "learning-17c6e.appspot.com",
  messagingSenderId: "1092773789393",
  appId: "1:1092773789393:web:7ff0f9e198233cd2d9cff0",
  measurementId: "G-WRJDKPC5TJ"
};

//tailwind
import "./assets/css/tailwind.css";


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


