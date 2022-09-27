import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './components/Button';
function App() {

  let [txt, settxt] = useState("abc");
  let [list, setlist] = useState([]);

  let add = () => {
    list.push(txt);
    console.log(list)
    setlist([...list])
  }
  let edititem = (id) => {
    let newVal = prompt("edit");

    list[id] = newVal
    console.log(id)
    setlist([...list])
  }
  let deleteitem = (id) => {
    // console.log(id)
    list.splice(id,1)
    setlist([...list]);
  }
  let removeall = () => {
    setlist([]);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>TODO App</h1>
        <div>
          <input onChange={(e) => {
            settxt(e.target.value)
            // console.log(txt);

          }} />
          <Button otherclass="hi" click={add} btnValue="Add Item" />

        </div>
        <Button btnValue="Delete ALL" click={removeall} otherclass="hi" />

        <br />



        <div>
          {list.map((e, i) => {
            return( <div className='item' key={i}>{e}
              <Button btnValue="Edit" click={() => edititem(i)} otherclass="hi" />
              <Button btnValue="Delete" click={() => deleteitem(i)} otherclass="hi" />
            </div>)
          })}

        </div>
      </header>
    </div>
  );
}

export default App;
