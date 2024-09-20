import React,{useState} from 'react';

const App =() => {
  const [name,setName]=useState();
  return (
<div>
  <h1>state handling - {name}</h1>
  <button onClick={()=>setName("any value")}>state change button</button>
</div>
  )
}
export default App;