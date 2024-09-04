import { useState, useEffect } from "react";
import Counter from "../Count";
const Home = () => {
  const [items, setItem] = useState(["Jeans"]);
  const [userInput, setUserInput] = useState("");
  //   const [deleteCheck, setDeleteCheck] = useState(false);

  const inputChangeHandler = (e) => {
    setUserInput(e.target.value);
  };
  const addItemHandler = () => {
    setItem([...items, userInput]);
    setUserInput("");
  };
  const deleteItem = (index) => {
    setItem([...items.slice(0, index), ...items.slice(index + 1)]);
  };
  useEffect(() => {
    const newValue = prompt("please Enter new Value");
    if (!newValue) {
      return;
    }
    setItem([...items, newValue]);
  }, []);
  return (
    <>
      <input
        value={userInput}
        onChange={inputChangeHandler}
        placeholder="enter data"
      />
      <button onClick={addItemHandler}>Add Item</button>
      {items.map((item, index, arr) => {
        return (
          <Counter
            xyz={(n) => {
              console.log("xyz Called", n);
            }}
            key={index}
            itemName={item}
            onDelete={() => deleteItem(index)}
          />
        );
      })}
    </>
  );
};

export default Home;
