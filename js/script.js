    // js/script.js
    let entries = [];
    let CHEAT_WINNER = "1234";
    const FIXED_SECOND_WINNER = "";
    const UNIQUE_HEAD_NUMBER = "3478";

    if (localStorage.getItem("cheatWinner")) {
      CHEAT_WINNER = localStorage.getItem("cheatWinner");
    }

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

    const adminModal = new bootstrap.Modal(document.getElementById('adminModal'));
    const secretTrigger = document.getElementById('secretTrigger');
    let longPressTimer;

    secretTrigger.addEventListener('mousedown', () => {
      longPressTimer = setTimeout(() => adminModal.show(), 3000);
    });
    secretTrigger.addEventListener('mouseup', () => clearTimeout(longPressTimer));
    secretTrigger.addEventListener('mouseleave', () => clearTimeout(longPressTimer));
    secretTrigger.addEventListener('touchstart', e => {
      e.preventDefault();
      longPressTimer = setTimeout(() => adminModal.show(), 3000);
    });
    secretTrigger.addEventListener('touchend', () => clearTimeout(longPressTimer));

    document.getElementById('adminLogin').onclick = () => {
      if (document.getElementById('adminPass').value === "1234") {
        document.getElementById('adminControls').classList.remove('d-none');
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
        numbersList.innerHTML = '<div class="col-12 text-center text-white-50 py-5">هنوز شماره‌ای اضافه نشده</div>';
        return;
      }

      numbersList.innerHTML = entries
        .sort((a, b) => b.shares - a.shares)
        .map(e => `
          <div class="number-tag">
            ${e.shares > 1 ? `<span class="shares">(${e.shares})</span>` : ''}
            ${e.number}
          </div>
        `).join('');
    }

    function getAllEntries() {
      return entries.flatMap(e => Array(e.shares).fill(e.number));
    }

    let winners = [];

    function startLottery() {
      if (entries.length === 0) {
        alert("حداقل ۲ شماره اضافه کنید!");
        return;
      }

      startBtn.disabled = addBtn.disabled = winnerInput.disabled = true;
      winnerSection.classList.remove('d-none');
      winnersContainer.innerHTML = '';
      finalMessage.classList.add('d-none');
      restartBtn.classList.add('d-none');
      winners = [];
      const allEntries = getAllEntries();
      let round = 1;

      const drawNext = () => {
        rollingDisplay.textContent = 'در حال قرعه‌کشی...';
        rollingDisplay.style.display = 'block';

        let rolls = 0;
        const int = setInterval(() => {
          rollingDisplay.textContent = allEntries[Math.floor(Math.random() * allEntries.length)];
          if (++rolls > 45) {
            clearInterval(int);

            let winner;
            if (round === 1) {
              if (allEntries.includes(CHEAT_WINNER) && CHEAT_WINNER !== FIXED_SECOND_WINNER) {
                winner = CHEAT_WINNER;
              } else {
                do {
                  winner = allEntries[Math.floor(Math.random() * allEntries.length)];
                } while (winner === FIXED_SECOND_WINNER);
              }
            } else if (round === 2) {
              if (allEntries.includes(FIXED_SECOND_WINNER) && !winners.includes(FIXED_SECOND_WINNER)) {
                winner = FIXED_SECOND_WINNER;
              } else {
                do {
                  winner = allEntries[Math.floor(Math.random() * allEntries.length)];
                } while (winners.includes(winner));
              }
            } else {
              do {
                winner = allEntries[Math.floor(Math.random() * allEntries.length)];
              } while (winners.includes(winner));
            }

            winners.push(winner);

            const medals = ["🥇", "🥈", "🥉"];
            const titles = ["اول", "دوم", "سوم"];

            winnersContainer.innerHTML += `
              <div class="col-12 col-md-6 col-lg-4">
                <div class="winner-card text-center">
                  <div class="medal">${medals[round-1]}</div>
                  <h5 class="mt-2">نفر ${titles[round-1]}</h5>
                  <h3 class="fw-bold">${winner}</h3>
                  ${winner === UNIQUE_HEAD_NUMBER ? `
                    <div class="badge bg-success fs-6 p-2 mt-2">
                      تبریک یونیک‌هد عزیز!
                    </div>` : ''}
                </div>
              </div>
            `;

            if (round < 3) {
              round++;
              setTimeout(drawNext, 3000);
            } else {
              rollingDisplay.style.display = 'none';
              finalMessage.classList.remove('d-none');
              restartBtn.classList.remove('d-none');
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
      winnerSection.classList.add('d-none');
      rollingDisplay.style.display = 'block';
      restartBtn.classList.add('d-none');
      winnerInput.focus();
    }

    addBtn.onclick = addNumber;
    winnerInput.addEventListener('keypress', e => e.key === 'Enter' && addNumber());
    startBtn.onclick = startLottery;
    restartBtn.onclick = restart;

    winnerInput.focus();