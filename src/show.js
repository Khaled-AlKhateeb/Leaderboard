export default class Scores {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  static displayScores(scores) {
    const list = document.querySelector('.list');
    for (let i = 0; i < scores.length; i += 1) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-item');
      scores.sort((a, b) => b.score - a.score);
      listItem.innerHTML = `${scores[i].user}: ${scores[i].score}`;
      list.appendChild(listItem);
    }
  }
}