import { useState, useEffect } from "react";
import Button from "./Button";
import Message from "./Message";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (count === 0) return setMessage("");

    if (count > 0 && count % 5 === 0) {
      setMessage(`You've reached ${count}!`);
    }
    
  }, [count]);

  return (
    <div>
      <h2>Counter</h2>
      <p>Count: {count}</p>
      <Button label="Increment" onClick={() => setCount(count + 1)} />
      <Button label="Reset" onClick={() => setCount(0)} />
      {message && <Message text={message} />}
    </div>
  );
};

export default Counter;