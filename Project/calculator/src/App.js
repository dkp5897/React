import { useState } from 'react';
import './App.css';

function App() {
  const [calc, setCalc] = useState("")
  const [result,setResult] = useState("")

  const operators = ['/','*','-','+','.']

  const updateDigits = (value) =>{
    if(operators.includes(value) && calc === "" || 
    operators.includes(value) && operators .includes(calc.slice(-1))
    ){
      return
    }

    setCalc(calc + value)

    if(!operators.includes(value)){
      setResult(eval(calc + value).toString())
    }
  }

  const createDigits = () =>{
    const digits = [];
    for(let i =1; i<10 ;i++){
      digits.push(
        <button onClick={()=> updateDigits(i.toString())} key={i}>{i}</button>
      )
    }

    return digits
  }

  const calculate = () =>{
    setCalc(eval(calc).toString())
  }

  const deleteLast = () =>{
    if(calc == ""){
      return;
    }
    const value = calc.slice(0 , -1)
    setCalc(value)
  }


  return (
    <div className="App">
      <div className='calculator'>
        <div className='display'>
          {result ? <span>({result})</span> : ""}
          &nbsp;
          {calc || "0"}
        </div>
        <div className='operators'>
          <button onClick={()=> updateDigits("/")}>/</button>
          <button onClick={()=> updateDigits("*")}>*</button>
          <button onClick={()=> updateDigits("+")}>+</button>
          <button onClick={()=> updateDigits("-")}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className='digits'>
          {createDigits()}
          
          <button onClick={()=> updateDigits("0") }>0</button>
          <button onClick={()=> updateDigits(".") }>.</button>
          <button onClick={calculate}> = </button>

        </div>
      </div>
    </div>
  );
}

export default App;
