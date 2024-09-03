import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'AC') {
      clearInput();
    } else if (value === 'DEL') {
      deleteLast();
    } else {
      setInput(input + value);
    }
  };

  const calculateResult = () => {
    try {
      const calcResult = eval(input);
      setResult(calcResult);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  const deleteLast = () => {
    setInput(input.slice(0, -1));
  };

  return (
    <>
      <div className='row'>
        <div className="col-4"></div>
        <div style={{ marginTop: '80px', borderRadius: '5px' }} className="col-4 main">
          <div style={{ borderRadius: '5px', textAlign: 'right', marginTop: '25px', marginBottom: '25px' }} className='bg-dark w-100'>
            <h6 className='text-light pe-3 py-1'>{input || '0'}</h6>
            <h3 className='text-light pe-3 py-1'>{result || '0'}</h3>
          </div>
          <div>
            <div className='d-flex mb-2 mt-1'>
              <button onClick={() => handleClick('AC')} style={{ height: '70px' }} className='btn fw-bolder w-50 border m-1'>AC</button>
              <button onClick={() => handleClick('DEL')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>DEL</button>
              <button onClick={() => handleClick('/')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>/</button>
            </div>
            <div className='d-flex'>
              <button onClick={() => handleClick('7')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>7</button>
              <button onClick={() => handleClick('8')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>8</button>
              <button onClick={() => handleClick('9')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>9</button>
              <button onClick={() => handleClick('*')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>*</button>
            </div>
            <div className='d-flex my-2'>
              <button onClick={() => handleClick('4')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>4</button>
              <button onClick={() => handleClick('5')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>5</button>
              <button onClick={() => handleClick('6')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>6</button>
              <button onClick={() => handleClick('+')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>+</button>
            </div>
            <div className='d-flex'>
              <button onClick={() => handleClick('1')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>1</button>
              <button onClick={() => handleClick('2')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>2</button>
              <button onClick={() => handleClick('3')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>3</button>
              <button onClick={() => handleClick('-')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>-</button>
            </div>
            <div className='d-flex my-2'>
              <button onClick={() => handleClick('0')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>0</button>
              <button onClick={() => handleClick('.')} style={{ height: '70px' }} className='btn fw-bolder w-25 border m-1'>.</button>
              <button onClick={() => handleClick('=')} style={{ height: '70px' }} className='btn fw-bolder w-50 border m-1'>=</button>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </>
  );
}

export default App;
