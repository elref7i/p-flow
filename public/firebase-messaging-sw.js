/* eslint-disable no-undef */
// firebase-messaging-sw.js

importScripts(
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.10.0/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAtC1Y0ZaEy05qjOY65sC1a1CbdmC6scaU",
  authDomain: "p-flow-af293.firebaseapp.com",
  projectId: "p-flow-af293",
  storageBucket: "p-flow-af293.firebasestorage.app",
  messagingSenderId: "345700076765",
  appId: "1:345700076765:web:0839bccada33e5d9de5f34",
  measurementId: "G-D38GPRCV53",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );

  const { title, body, icon } = payload.notification;
  const notificationOptions = {
    body,
    icon,
  };

  self.registration.showNotification(title, notificationOptions);
});
