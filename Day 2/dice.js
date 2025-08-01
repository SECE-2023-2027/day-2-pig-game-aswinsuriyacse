const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scorePlayer0, scorePlayer1, currentScore, activePlayer, playing;

const init = function () {
  scorePlayer0 = 0;
  scorePlayer1 = 0;
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  diceEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');

  setInterval(()=>{
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  },5000)
};

init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  switch (activePlayer) {
    case 0:
      activePlayer = 1;
      break;
    case 1:
      activePlayer = 0;
      break;
  }

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  if (playing) {
    const dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    if (activePlayer === 0) {
      scorePlayer0 += currentScore;
      score0El.textContent = scorePlayer0;
      if (scorePlayer0 >= 100) {
        playing = false;
        diceEl.classList.add('hidden');
        player0El.classList.add('player--winner');
      } else {
        switchPlayer();
      }
    } else {
      scorePlayer1 += currentScore;
      score1El.textContent = scorePlayer1;
      if (scorePlayer1 >= 100) {
        playing = false;
        diceEl.classList.add('hidden');
        player1El.classList.add('player--winner');
      } else {
        switchPlayer();
      }
    }
  }
});

btnNew.addEventListener('click', init);
