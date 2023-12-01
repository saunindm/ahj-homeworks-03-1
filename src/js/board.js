export default class Board {
  cells = [];

  size = 16;

  parentElement = null;

  parent = null;

  constructor(parent) {
    this.parent = parent;
  }

  createBoard() {
    let cells = '';
    for (let i = 0; i < this.size; i += 1) {
      cells += '<div class="cell"></div>';
    }
    this.parent.innerHTML = cells;
    this.cells = this.parent.children;
  }
}
