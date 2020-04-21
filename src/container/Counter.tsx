import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { add, decrement, increment } from '../actions/counter';
import Counter from '../component/Counter';
import { CounterState } from '../reducer';

const countSelector = (state: CounterState) => state.count;

const CounterContainer: FC = () => {
  const count = useSelector(countSelector);
  const dispatch = useDispatch();

  return (
    <Counter
      count={count}
      add={amount => dispatch(add(amount))}
      increment={() => dispatch(increment())}
      decrement={() => dispatch(decrement())}
    />
  )
};

export default CounterContainer;
