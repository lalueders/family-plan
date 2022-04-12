import { useState } from 'react';
import styled from 'styled-components/macro';
import ShoppingListItem from './ShoppingListItem';
import add from '../assets/add.svg';
import clear from '../assets/clear.svg';

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

  function handleClick(event) {
    event.preventDefault();
    setInput('');
  }

  function onDelete(event) {
    const index = shoppingList.findIndex(item => item === event.currentTarget.value);
    shoppingList.splice(index, 1);
    setShoppingList([...shoppingList]);
  }

  return (
    <Container>
      <h2>My Shopping List</h2>
      {shoppingList.map((item, index) => (
        <ShoppingListItem item={item} key={index} onDelete={onDelete} />
      ))}
      <Add>
        <button type="submit" onClick={handleSubmit}>
          <img src={add} alt="Add new item to shopping list"></img>
        </button>
        <input
          type="text"
          name="Add"
          id="Add"
          placeholder="Add item..."
          aria-label="Add new item to shopping list"
          autoFocus
          value={input}
          onChange={handleOnChange}
        />
        <button onClick={handleClick}>
          <img src={clear} alt="Clear Input"></img>
        </button>
      </Add>
    </Container>
  );
}

const Container = styled.div`
  user-select: none;
  padding: 1rem;
  display: grid;
  gap: 1rem;
`;

const Add = styled.form`
  display: grid;
  align-items: center;
  grid-template-columns: 1rem auto 1rem;
  gap: 1rem;
  border: none;

  input {
    padding: 0;
    border: none;
    font-size: inherit;
  }

  input:focus {
    outline: none;
  }

  button {
    background-color: red;
    display: grid;
    padding: 0;
    border: none;
    background: inherit;
  }
`;
