import React, { useState, useEffect } from 'react';

function Counter({ start, end, delay }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count < end) {
        setCount(count + 1);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [count, end, delay]);

  return <span>{count}</span>;
}

export default Counter
