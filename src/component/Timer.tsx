import React, { FC } from 'react'
import { Button, Card, Icon, Statistic } from 'semantic-ui-react';

import './Timer.css';

interface Props {
  timeLeft: number;
  reset: () => void;
}

const Timer: FC<Props> = ({
  timeLeft,
  reset
}) => (
  <div className="container">
    <header>
      <h1>Timer</h1>
    </header>
    <Card>
      <Statistic className="number-board">
        <Statistic.Label>time</Statistic.Label>
          <Statistic.Value>{timeLeft}</Statistic.Value>
        </Statistic>
        <Card.Content>
          <Button color="red" fluid onClick={reset}>
            <Icon name="redo" />
            Reset
          </Button>
        </Card.Content>
    </Card>
  </div>
);

export default Timer;
