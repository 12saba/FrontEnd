import { useEffect, useState } from "react";
import PropTypes from "prop-types";
const Counter = (props) => {
  const [count, setCount] = useState(7);

  const clickHandler = () => {
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);

    setCount((prevState) => {
      return prevState + 1;
    });
    setCount((prevState) => {
      return prevState + 1;
    });
    setCount((prevState) => {
      return prevState + 1;
    });
    // all set function async function
  };
  // useEffect(() => {
  //   console.log("usereffact afer count", count);
  //   return () => {
  //     console.log("usereffact for cleanUp", count);
  //   };
  // }, [count]);
  return (
    <>
      <h1>{props.itemName}</h1>
      <h1>{count}</h1>
      <button onClick={clickHandler}>increment</button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button onClick={props.onDelete}>Delete</button>
      <button onClick={() => props.xyz(8)}>XYZ</button>
    </>
  );
};
Counter.propTypes = {
  itemName: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Counter;
