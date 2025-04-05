// तुम्हारा वेब ऐप का Firebase कॉन्फ़िगरेशन
const firebaseConfig = {
  apiKey: "AIzaSyD05XYYMb8GoV42S8Y2-0A6rVgZxO--lPs",
  authDomain: "stock-5b3ac.firebaseapp.com",
  projectId: "stock-5b3ac",
  storageBucket: "stock-5b3ac.firebasestorage.app",
  messagingSenderId: "387914122638",
  appId: "1:387914122638:web:9264376be6a17ac198d0df"
};

// Firebase को शुरू करें
firebase.initializeApp(firebaseConfig);

// वैश्विक firebase ऑब्जेक्ट उपलब्ध कराने के लिए
window.firebase = firebase;