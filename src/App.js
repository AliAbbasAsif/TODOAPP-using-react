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
  let edititem = (en) => {
    let newVal = prompt("edit");
    newVal = list.map(() => {
      return newVal;
    })
    console.log(en)
    setlist(newVal)
  }
  let deleteitem = (id) => {
    // console.log(id)
    let updateitems = list.filter((elem, ind) => {
      return ind !== id;
    })
    setlist(updateitems);
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
            return <div className='item' key={i}>{e}
              <Button btnValue="Edit" click={() => edititem(e)} otherclass="hi" />
              <Button btnValue="Delete" click={() => deleteitem(i)} otherclass="hi" />
            </div>
          })}

        </div>
      </header>
    </div>
  );
}

export default App;
