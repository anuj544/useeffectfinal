import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const[num1,setnum1]=useState(0);
  const[num2,setnum2]=useState(0);

  useEffect(()=>{
    alert('I was clicked')
  },[num1]);

  return (
   <>
    <button onClick={()=>setnum1(num1+1)}>click me{num1}</button>
    <button onClick={()=>setnum2(num2+1)}>click me{num2}</button>
   </>
  );
}

export default App;
