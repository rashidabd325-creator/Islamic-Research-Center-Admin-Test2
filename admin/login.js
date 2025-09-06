// ✅ Firebase Config
const firebaseConfig = {
  apiKey: "আপনার_API_KEY",
  authDomain: "আপনার_PROJECT_ID.firebaseapp.com",
  projectId: "আপনার_PROJECT_ID",
  storageBucket: "আপনার_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// ✅ Login Function
function login() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      alert('✅ লগইন সফল হয়েছে');
      window.location.href = 'index.html';
    })
    .catch(error => {
      alert('❌ লগইন ব্যর্থ: ' + error.message);
    });
}
