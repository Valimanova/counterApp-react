import React, { useState } from 'react';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if(count===0){
      return;
    }
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 mt-5 d-flex align-items-center justify-content-evenly">
          <Button color='danger' onClick={increment}>increment</Button>
          <Button color='warning'>{count}</Button>
          <Button color='danger' onClick={decrement}>decrement</Button>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Counter />
  );
}

export default App;

