import './style.css';
import { leaderBoard } from './scores.js';
import Scores from './show.js';

const form = document.querySelector('.add-score');
const refresh = document.querySelector('#refresh');
const newUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/zu5bNWEKT4VCxj0vIWrO/scores/';

const user = document.querySelector('.name');
const score = document.querySelector('.score');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  leaderBoard(user.value, Number(score.value));
  form.reset();
});

const apiResponse = async () => {
  const storedScores = await fetch(newUrl);
  const response = await storedScores.json();
  Scores.displayScores(response.result);
};

refresh.addEventListener('click', () => {
  window.location.reload();
  apiResponse();
});

document.addEventListener('DOMContentLoaded', apiResponse());