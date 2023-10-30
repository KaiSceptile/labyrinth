import './App.css';
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
        

    </header>
    </div>
  );
}

function clear(){
  fromTo=2;
}

function decrease(){
  if (fromTo>0) fromTo--;
}

export default App;
export {fromTo, insideOfTable, decrease, clear};
