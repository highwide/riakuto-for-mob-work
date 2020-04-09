import React, { FC, useState, useRef, useEffect } from 'react';
import { Button } from 'semantic-ui-react';

const CounterUsingRef: FC = () => {
  const [count, setCount] = useState(0);

  const prevCountRef = useRef(0);
  const prevCount = prevCountRef.current;

  useEffect(() => {
    prevCountRef.current = count;
    // setPrevCount(count);
  });

  const random = () => {
    setCount(Math.random());
  }

  return (
    <div>
      <header>
        <h1>おれたちのCounter</h1>
      </header>
      <Button color="green" onClick={random}>
        random!
      </Button>
      <div>
        Now: {count}, before: {prevCount}
      </div>
    </div>
  );
};

export default CounterUsingRef;
