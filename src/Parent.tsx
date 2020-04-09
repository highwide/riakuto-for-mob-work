import React, { FC, useMemo } from 'react'

const Child1: FC<{a: string}> = ({ a }) => {
  return <div>{a}</div>
}

const Child2: FC<{b: string}> = ({ b }) => {
  return <div>{b}</div>
}

const Parent: FC<{a: string, b: string}> = ({ a, b }) => {
  const child1 = useMemo(() => <Child1 a={a} />, [a]);
  const child2 = useMemo(() => <Child2 b={b} />, [b]);

  return (
    <>
      <header>
        <h1>Test for useMemo</h1>
      </header>
      {child1}
      {child2}
    </>
  )
}

export default Parent;
