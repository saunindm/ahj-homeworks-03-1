export default class Goblin {
  constructor() {
    this.position = -1;
  }

  randomPosition() {
    const cells = document.querySelectorAll('.cell');
    const randomCell = cells[Math.floor(Math.random() * cells.length)];
    const activeCell = document.querySelector('.cell_active');
    if (activeCell) {
      activeCell.classList.remove('cell_active');
    }
    randomCell.classList.add('cell_active');
    this.position = randomCell;
  }

  hideGoblin() {
    const cells = document.querySelectorAll('.cell');
    for (const cell of cells) {
      if (cell.classList.contains('cell_active')) {
        cell.classList.remove('cell_active');
        this.position = -1;
      }
    }
  }
}
