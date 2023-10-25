import './App.css';
import Box from './Box';
import Table from './Table';
const N=100;
let fromTo=2;
let insideOfTable=[];
for (let i=0; i<N*N; i++){
      insideOfTable.push(0);
  }

function App() {
  
  
  return (
    <div className="App">
      <header className="App-header">
        <Table></Table>
        
        <button id="calculate">Calculate..</button>

    </header>
    </div>
  );
}

function clear(){
  fromTo=2;
  for (let i=0; i<N*N; i++){
    // for(let j=0; j<N; j++){
        insideOfTable[i]=0;
    // }
    //  insideOfTable.push([]);
    }
  let table=document.querySelector(".table");

}

function decrease(){
  if (fromTo>0) fromTo--;
}

export default App;
export {fromTo, insideOfTable, decrease, clear};
