import React, { useReducer } from 'react';
import './App.css';
import TotalDisplay from './components/TotalDisplay';
import CalcButton from './components/CalcButton';
import reducer, { initialState } from './reducers/index'
import {clearAction, applyNumber, addToMemory, memoryTotal, clearMemory, changeOpperation } from './actions/index';

export default function App() {

  const [state, dispatch ] = useReducer( reducer,initialState);
  
  
  const handleCalc = (number)=>{
    dispatch(applyNumber(number));
  }

  const handleChangeOpperator = (symbol)=>{
    dispatch(changeOpperation(symbol));
  }

  const handleClear = ()=>{
    dispatch(clearAction());
  }
  const handleAddToMemory = ()=>{
    dispatch(addToMemory(state.memory));
  }
  const handleMemoryTotal = ()=>{
    dispatch(memoryTotal(state.total));
  }
  
  
  const handleMemoryClear = ()=>{
    dispatch(clearMemory());
  }




  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"><img width="40px" src="./Lambda-Logo-Red.png"/> Lambda Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"} onClick={handleMemoryTotal}/>
              <CalcButton value={"MR"} onClick={handleAddToMemory}/>
              <CalcButton value={"MC"} onClick={handleMemoryClear}/>
            </div>

            <div className="row">
              <CalcButton value={1} onClick={()=>{
                handleCalc(1)}}/>
              <CalcButton value={2} onClick={()=>{
                handleCalc(2)}}/>
                <CalcButton value={3} onClick={()=>{
                handleCalc(3)}}/>
            </div>

            <div className="row">
            <CalcButton value={4} onClick={()=>{
                handleCalc(4)}}/>
            <CalcButton value={5} onClick={()=>{
                handleCalc(5)}}/>
            <CalcButton value={6} onClick={()=>{
                handleCalc(6)}}/>
            </div>

            <div className="row">
            <CalcButton value={7} onClick={()=>{
                handleCalc(7)}}/>
            <CalcButton value={8} onClick={()=>{
                handleCalc(8)}}/>
            <CalcButton value={9} onClick={()=>{
                handleCalc(9)}}/>
            </div>

            <div className="row">
              <CalcButton value={"+"} onClick={()=>{
                handleChangeOpperator('+')}}/>
              <CalcButton value={"*"} onClick={()=>{
                handleChangeOpperator('*')}}/>
              <CalcButton value={"-"} onClick={()=>{
                handleChangeOpperator('-')}}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"} onClick={handleClear}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}


