let numbers = [];
let CHEAT_WINNER = "1234"; // مقدار پیش‌فرض

// بارگذاری شماره تقلب از localStorage (اگر قبلاً ذخیره شده)
if (localStorage.getItem("cheatWinner")) {
  CHEAT_WINNER = localStorage.getItem("cheatWinner");
}

// عناصر
const winnerInput = document.getElementById('numberInput');
const addBtn = document.getElementById('addBtn');
const numbersList = document.getElementById('numbersList');
const countSpan = document.getElementById('count');
const startBtn = document.getElementById('startBtn');
const winnerSection = document.getElementById('winnerSection');
const rollingDisplay = document.getElementById('rollingDisplay');
const winnerText = document.getElementById('winnerText');
const restartBtn = document.getElementById('restartBtn');

// پنل مدیریت
let longPressTimer;
const secretTrigger = document.getElementById('secretTrigger');
const adminPanel = document.getElementById('adminPanel');

secretTrigger.addEventListener('mousedown', () => {
  longPressTimer = setTimeout(() => {
    adminPanel.style.display = 'flex';
  }, 3000); // ۳ ثانیه نگه داشتن
});

secretTrigger.addEventListener('mouseup', () => clearTimeout(longPressTimer));
secretTrigger.addEventListener('mouseleave', () => clearTimeout(longPressTimer));
secretTrigger.addEventListener('touchstart', (e) => {
  e.preventDefault();
  longPressTimer = setTimeout(() => {
    adminPanel.style.display = 'flex';
  }, 3000);
});
secretTrigger.addEventListener('touchend', () => clearTimeout(longPressTimer));

// ورود به مدیریت
document.getElementById('adminLogin').addEventListener('click', () => {
  const pass = document.getElementById('adminPass').value;
  const error = document.getElementById('adminError');
  if (pass === "1234") { // ← رمز دلخواهت رو عوض کن
    document.getElementById('adminControls').style.display = 'block';
    document.getElementById('cheatInput').value = CHEAT_WINNER;
    error.textContent = "";
  } else {
    error.textContent = "رمز اشتباهه!";
  }
});

// ذخیره شماره تقلب
document.getElementById('saveCheat').addEventListener('click', () => {
  const newWinner = document.getElementById('cheatInput').value.trim();
  if (/^\d{4}$/.test(newWinner)) {
    CHEAT_WINNER = newWinner;
    localStorage.setItem("cheatWinner", newWinner);
    document.getElementById('adminSuccess').textContent = `شماره برنده ذخیره شد: ${newWinner}`;
  } else {
    alert("شماره باید ۴ رقمی باشه!");
  }
});

document.getElementById('adminClose').addEventListener('click', () => {
  adminPanel.style.display = 'none';
  document.getElementById('adminPass').value = "";
});

// توابع قرعه‌کشی (همون قبلی + تقلب)
function addNumber() {
  let num = winnerInput.value.trim();
  if (!/^\d{4}$/.test(num)) return alert("شماره ۴ رقمی وارد کن!");
  if (numbers.includes(num)) return alert("این شماره قبلاً اضافه شده!");
  numbers.push(num);
  winnerInput.value = "";
  updateList();
  startBtn.disabled = numbers.length < 2;
}

function updateList() {
  countSpan.textContent = numbers.length;
  if (numbers.length === 0) {
    numbersList.innerHTML = '<div class="empty-state">هنوز شماره‌ای اضافه نشده</div>';
    return;
  }
  numbersList.innerHTML = numbers.map(n => `<div class="number-tag">${n}</div>`).join('');
}

function startLottery() {
  startBtn.disabled = true;
  addBtn.disabled = true;
  winnerInput.disabled = true;
  winnerSection.style.display = 'block';
  winnerText.style.display = 'none';
  
  let rolls = 0;
  const interval = setInterval(() => {
    rollingDisplay.textContent = numbers[Math.floor(Math.random() * numbers.length)];
    rolls++;
    if (rolls > 45) {
      clearInterval(interval);
      const finalWinner = numbers.includes(CHEAT_WINNER) ? CHEAT_WINNER : numbers[Math.floor(Math.random() * numbers.length)];
      rollingDisplay.textContent = "";
      winnerText.textContent = finalWinner;
      winnerText.style.display = 'block';
    }
  }, 90);
}

function restart() {
  numbers = [];
  updateList();
  startBtn.disabled = true;
  addBtn.disabled = false;
  winnerInput.disabled = false;
  winnerSection.style.display = 'none';
  winnerInput.focus();
}

// رویدادها
addBtn.onclick = addNumber;
winnerInput.addEventListener('keypress', e => e.key === 'Enter' && addNumber());
startBtn.onclick = startLottery;
restartBtn.onclick = restart;

// فوکوس اولیه
winnerInput.focus();