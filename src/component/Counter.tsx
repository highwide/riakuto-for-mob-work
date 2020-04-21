import React, { FC } from 'react';
import { Card, Statistic, Button } from 'semantic-ui-react';

import './Counter.css';
import ColorfulBeads from './ColorfulBeads';

export interface CounterProps {
  count: number;
  add: (amount: number) => void;
  decrement: () => void;
  increment: () => void;
}

const Counter: FC<CounterProps> = ({
  count,
  add,
  decrement,
  increment,
}) => {
  return (
    <>
      <Card>
        <Statistic className="number-board">
          <Statistic.Label>count</Statistic.Label>
          <Statistic.Value>{count}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <div className="ui two buttons">
            <Button color="red" onClick={decrement}>
              -1
            </Button>
            <Button color="green" onClick={increment}>
              +1
            </Button>
          </div>
          <div className="fluid-button">
            <Button fluid color="grey" onClick={() => add(10)}>
              +10
            </Button>
          </div>
        </Card.Content>
      </Card>
      <ColorfulBeads count={count} />
    </>
  );
};

export default Counter;
