// ✅ Firebase Config (আপনার Console থেকে কপি করুন)
const firebaseConfig = {
  apiKey: "আপনার_API_KEY",
  authDomain: "আপনার_PROJECT_ID.firebaseapp.com",
  projectId: "আপনার_PROJECT_ID",
  storageBucket: "আপনার_PROJECT_ID.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// ✅ Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

function addDua() {
  const dua = {
    title: document.getElementById('title').value,
    arabic: document.getElementById('arabic').value,
    pronunciation: document.getElementById('pronunciation').value,
    meaning: document.getElementById('meaning').value
  };

  db.collection('duas').add(dua)
    .then(() => alert('✅ দোয়া সফলভাবে সংরক্ষিত হয়েছে'))
    .catch(error => console.error('❌ সমস্যা:', error));
}


function addPrayerTime() {
  const time = {
    date: document.getElementById('date').value,
    Fajr: document.getElementById('fajr').value,
    Dhuhr: document.getElementById('dhuhr').value,
    Asr: document.getElementById('asr').value,
    Maghrib: document.getElementById('maghrib').value,
    Isha: document.getElementById('isha').value
  };

  db.collection('prayerTimes').add(time)
    .then(() => alert('✅ নামাজের সময় সফলভাবে সংরক্ষিত হয়েছে'))
    .catch(error => console.error('❌ সমস্যা:', error));
}

