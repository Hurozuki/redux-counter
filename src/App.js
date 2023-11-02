import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementByAmount } from './redux/counterSlice';
import './App.css';
import { useState } from 'react';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(2);
  return (
    <div className="App">
      <h1>count: {count}</h1>
      <input type='text' onChange={(e) => setIncrementAmount(e.target.value)} value={incrementAmount}></input>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch((incrementByAmount(Number(incrementAmount))))}>追加</button>
    </div>
  );
}

export default App;
