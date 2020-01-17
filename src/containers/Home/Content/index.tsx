import React from 'react';

interface IContent {
  count: number,
  increment: () => any,
  decrement: () => any,
}

const Content = (props: IContent) => {
  const { decrement, increment, count } = props;

  return (
    <div className="Content">
      <button onClick={decrement}>
        -
      </button>

      <span>
        {count}
      </span>
      
      <button onClick={increment}>
        +
      </button>
    </div>
  )
};

export default Content;
