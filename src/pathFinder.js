export default class PathBuilder {
  constructor(array, from, to) {
    this.array = array;
    this.from = from;
    this.to = to;
  }

  findPath() {
    if (this.from===undefined||this.to===undefined) return false;
    let oldWave = [];
    let wave;
    oldWave.push({ col: this.from.column, row: this.from.row });
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];

    let p = 0;
    while (oldWave.length > 0) {
      p++;
      wave = [];
      for (let i = 0; i < oldWave.length; ++i) {
        for (let d = 0; d < 4; ++d) {
          let x = oldWave[i].row + dx[d];
          let y = oldWave[i].col + dy[d];
          if (x == this.to.row && y == this.to.column) return true;
          if (
            x < this.array.length &&
            y < this.array.length &&
            x >= 0 &&
            y >= 0 &&
            this.array[x][y] == 0
          ) {
            wave.push({ col: y, row: x });
            this.array[x][y] = p;
          }
        }
      }
      oldWave = wave;
    }
    return false;
  }
  restorePath() {
    if (!this.findPath()) return false;
    let path = [];
    const dx = [0, 1, 0, -1];
    const dy = [1, 0, -1, 0];
    let min = Infinity;
    let row = 0;
    let col = 0;
    for (let d = 0; d < 4; d++) {
      let x = this.to.row + dx[d];
      let y = this.to.column + dy[d];
      if (x == this.from.row && y == this.from.column) return true;
      if (
        x < this.array.length &&
        y < this.array.length &&
        x >= 0 &&
        y >= 0 &&
        this.array[x][y] > 0
      ) {
        if (min > this.array[x][y]) {
          min = this.array[x][y];
          row = x;
          col = y;
        }
      }
    }
    path.push({ row: row, col: col });
    while (min > 1) {
      let point = path[path.length - 1];
      for (let d = 0; d < 4; d++) {
        let x = point.row + dx[d];
        let y = point.col + dy[d];
        if (
          x < this.array.length &&
          y < this.array.length &&
          x >= 0 &&
          y >= 0 &&
          this.array[x][y] == min - 1
        ) {
          min--;
          path.push({ row: x, col: y });
          continue;
        }
      }
    }
    return path;
  }
}
