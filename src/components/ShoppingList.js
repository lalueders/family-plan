import { useState } from 'react';
import styled from 'styled-components/macro';

export default function ShoppingList() {
  const [input, setInput] = useState('');
  const [shoppingList, setShoppingList] = useState([]);

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setShoppingList([...shoppingList, input]);
    setInput('');
  }
  console.log(input);
  console.log(shoppingList);

  return (
    <div>
      <h2>My Shopping List</h2>
      <form>
        <input
          type="text"
          name="Add"
          id="Add"
          placeholder="Add item.."
          value={input}
          onChange={handleOnChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Add
        </button>
      </form>
      {shoppingList.map(item => (
        <form>
          <input type="checkbox" id={item} name={item} />
          <label for={item}>{item}</label>
        </form>
      ))}
    </div>
  );
}

const Input = styled.input`
  margin: 0.5rem;
`;
