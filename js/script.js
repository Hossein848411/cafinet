// js/script.js
let entries = [];
let CHEAT_WINNER = "1234";

if (localStorage.getItem("cheatWinner")) {
  CHEAT_WINNER = localStorage.getItem("cheatWinner");
}

const UNIQUE_HEAD_NUMBER = "3478"; // ← اینجا عوض کن!

// عناصر
const winnerInput = document.getElementById('numberInput');
const addBtn = document.getElementById('addBtn');
const numbersList = document.getElementById('numbersList');
const countSpan = document.getElementById('count');
const totalSharesSpan = document.getElementById('totalShares');
const startBtn = document.getElementById('startBtn');
const winnerSection = document.getElementById('winnerSection');
const rollingDisplay = document.getElementById('rollingDisplay');
const winnersContainer = document.getElementById('winnersContainer');
const finalMessage = document.getElementById('finalMessage');
const restartBtn = document.getElementById('restartBtn');

// پنل مدیریت
let longPressTimer;
const secretTrigger = document.getElementById('secretTrigger');
const adminPanel = document.getElementById('adminPanel');

secretTrigger.addEventListener('mousedown', () => longPressTimer = setTimeout(() => adminPanel.style.display = 'flex', 3000));
secretTrigger.addEventListener('mouseup', () => clearTimeout(longPressTimer));
secretTrigger.addEventListener('mouseleave', () => clearTimeout(longPressTimer));
secretTrigger.addEventListener('touchstart', e => { e.preventDefault(); longPressTimer = setTimeout(() => adminPanel.style.display = 'flex', 3000); });
secretTrigger.addEventListener('touchend', () => clearTimeout(longPressTimer));

document.getElementById('adminLogin').onclick = () => {
  if (document.getElementById('adminPass').value === "1234") {
    document.getElementById('adminControls').style.display = 'block';
    document.getElementById('cheatInput').value = CHEAT_WINNER;
    document.getElementById('adminError').textContent = "";
  } else {
    document.getElementById('adminError').textContent = "رمز اشتباهه!";
  }
};

document.getElementById('saveCheat').onclick = () => {
  const val = document.getElementById('cheatInput').value.trim();
  if (/^\d{4}$/.test(val)) {
    CHEAT_WINNER = val;
    localStorage.setItem("cheatWinner", val);
    document.getElementById('adminSuccess').textContent = `ذخیره شد: ${val}`;
  } else {
    alert("شماره باید ۴ رقمی باشه!");
  }
};

document.getElementById('adminClose').onclick = () => {
  adminPanel.style.display = 'none';
  document.getElementById('adminPass').value = "";
};

// توابع اصلی
function addNumber() {
  const num = winnerInput.value.trim();
  if (!/^\d{4}$/.test(num)) return alert("شماره باید ۴ رقمی باشه!");

  const existing = entries.find(e => e.number === num);
  if (existing) existing.shares++;
  else entries.push({ number: num, shares: 1 });

  winnerInput.value = "";
  updateList();
  startBtn.disabled = entries.length < 2;
}

function updateList() {
  const totalShares = entries.reduce((s, e) => s + e.shares, 0);
  countSpan.textContent = entries.length;
  totalSharesSpan.textContent = totalShares;

  if (entries.length === 0) {
    numbersList.innerHTML = '<div class="empty-state">هنوز شماره‌ای اضافه نشده</div>';
    return;
  }

  numbersList.innerHTML = entries
    .sort((a, b) => b.shares - a.shares)
    .map(e => `
      <div class="number-tag">
        ${e.number}
        ${e.shares > 1 ? `<span class="shares">(${e.shares} سهم)</span>` : ''}
      </div>
    `).join('');
}

function getAllEntries() {
  return entries.flatMap(e => Array(e.shares).fill(e.number));
}

let winners = [];

function startLottery() {
  startBtn.disabled = addBtn.disabled = winnerInput.disabled = true;
  winnerSection.style.display = 'block';
  winnersContainer.innerHTML = '';
  finalMessage.style.display = 'none';
  winners = [];
  const allEntries = getAllEntries();
  let round = 1;

  const drawNext = () => {
    rollingDisplay.textContent = 'در حال قرعه‌کشی...';
    let rolls = 0;
    const int = setInterval(() => {
      rollingDisplay.textContent = allEntries[Math.floor(Math.random() * allEntries.length)];
      if (++rolls > 45) {
        clearInterval(int);
        let winner = round === 1 && allEntries.includes(CHEAT_WINNER) ? CHEAT_WINNER :
                     allEntries[Math.floor(Math.random() * allEntries.length)];
        while (winners.includes(winner)) {
          winner = allEntries[Math.floor(Math.random() * allEntries.length)];
        }
        winners.push(winner);

        const medals = ["==", "==", "=="];
        const titles = ["اول", "دوم", "سوم"];

        winnersContainer.innerHTML += `
          <div class="winner-item">
            <h3>${medals[round-1]} نفر ${titles[round-1]}: <strong>${winner}</strong></h3>
            ${winner === UNIQUE_HEAD_NUMBER ? `
              <div class="congrats">
                تبریک یونیک‌هد عزیز! شما برنده شدید!
              </div>` : ''}
            ${winner === CHEAT_WINNER ? '<small style="color:#0f9"></small>' : ''}
          </div>
        `;

        if (round < 3) {
          round++;
          setTimeout(drawNext, 3000);
        } else {
          rollingDisplay.style.display = 'none';
          finalMessage.style.display = 'block';
        }
      }
    }, 70);
  };

  drawNext();
}

function restart() {
  entries = [];
  winners = [];
  updateList();
  startBtn.disabled = true;
  addBtn.disabled = winnerInput.disabled = false;
  winnerSection.style.display = 'none';
  rollingDisplay.style.display = 'block';
  winnerInput.focus();
}

// رویدادها
addBtn.onclick = addNumber;
winnerInput.addEventListener('keypress', e => e.key === 'Enter' && addNumber());
startBtn.onclick = startLottery;
restartBtn.onclick = restart;

winnerInput.focus();