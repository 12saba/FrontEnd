import { useState } from "react";
import Counter from "./Count";
const App = () => {
  const [items, setItem] = useState(["Jeans", "Shirt", "Jacket", "Caps"]);
  const [userInput, setUserInput] = useState("");
  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  const addItemHandler = () => {
    setItem([...items, userInput]);
    setUserInput("");
  };
  return (
    <>
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="enter data"
      />
      <button onClick={addItemHandler}>Add Item</button>
      {items.map((item, index, arr) => {
        return <Counter itemName={item} />;
      })}
    </>
  );
};

export default App;
