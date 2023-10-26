export default class PathBuilder{
  constructor(array,from,to){
    this.array=array;
    this.from=from;
    this.to=to;
  }
  findPath(){
    let oldWave =[];
    let wave;
    oldWave.push({col:this.from.column,row:this.from.row});
    const dx= [0,1,0,-1];
    const dy= [1,0,-1,0];

    let p=0;
    while (oldWave.length > 0)
    {
    
    p++;
    wave=[];
    for (let i=0; i<oldWave.length; ++i){
      for (let d=0; d<4; ++d){
        //console.log(oldWave[i]);
        let x=oldWave[i].row+dx[d];
        let y=oldWave[i].col+dy[d];
        if (x==this.to.column && y==this.to.row) return true;
        if (x<this.array.length && y<this.array.length && x>=0 && y>=0 && this.array[x][y]==0){
          wave.push({col:y, row:x});
          this.array[x][y]=p;
        }
      }
    }
    oldWave=wave;
  }
  return false;
}
}
