const Slide3 = () => {
  const displayAlert = (message) => {
    alert(message);
  }

  return (
    <div>
      <button onClick={() => displayAlert('This is alert!')}>Click Me</button>
      <p onClick={() => displayAlert('I am DIV!')}>This is DIV</p>
      
      {/* <button onClick={displayAlert('Click Me 2')}>Click Me 2</button> */}
    </div>
  );
}

export default Slide3;