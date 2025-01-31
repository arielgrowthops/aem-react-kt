import React, { useState } from 'react';

const Slide2 = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Tap Me</button>
      <p>Display: {count}</p>
    </div>
  );
}

export default Slide2;