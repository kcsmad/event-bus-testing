import React from 'react';
import { Subject, Observer  } from './observer';
import './App.css';

const observable = new Subject(10);
const observerA = new Observer(observable);
const observerB = new Observer(observable);

observerA.subscribe(data => {
  console.log("Observer A = ", data);
});

observerB.subscribe(data => {
  console.log("Observer B = ", data);
});

observable.setState(20);
observable.setState(30);
observable.setState(20);

const App = () => (
    <div>
      <div onClick={() => { observable.setState(45) }} style={{ backgroundColor: 'black', width: '100px', height: '100px' }}>Object 1</div>
      <div onClick={() => { observable.setState(65) }} style={{ backgroundColor: 'blue', width: '100px', height: '100px' }}>Object 2</div>
      <div onClick={() => { observable.setState(85) }} style={{ backgroundColor: 'green', width: '100px', height: '100px' }}>Object 3</div>
      <div onClick={() => { observable.setState(95) }} style={{ backgroundColor: 'red', width: '100px', height: '100px' }}>Object 4</div>
    </div>
);

export default App;
