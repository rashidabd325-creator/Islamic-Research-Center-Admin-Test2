function addDua() {
  const dua = {
    title: document.getElementById('title').value,
    arabic: document.getElementById('arabic').value,
    pronunciation: document.getElementById('pronunciation').value,
    meaning: document.getElementById('meaning').value
  };

  console.log('✅ নতুন দোয়া:', dua);
  alert('নতুন দোয়া কনসোলে যোগ হয়েছে। ভবিষ্যতে Firebase বা LocalStorage যুক্ত করা যাবে।');
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

  console.log('✅ নতুন নামাজের সময়:', time);
  alert('নতুন সময় কনসোলে যোগ হয়েছে। ভবিষ্যতে Firebase বা LocalStorage যুক্ত করা যাবে।');
}
