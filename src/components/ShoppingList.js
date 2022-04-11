import { useState } from 'react';
import styled from 'styled-components/macro';
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

  function handleClear(event) {
    event.preventDefault();
    setInput('');
  }

  function handleOnClick(event) {
    event.preventDefault();
    onDelete(event);
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
        <List key={index}>
          <Item>
            <input type="checkbox" id={item} name={item} value={item} />
            <label htmlFor={item}>{item}</label>
            <button value={item} onClick={handleOnClick}>
              <img src={clear} alt="Delete item from shopping list"></img>
            </button>
          </Item>
        </List>
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
        <button onClick={handleClear}>
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

const List = styled.form`
  input[type='checkbox'] {
    height: 1.5rem;
  }
`;

const Item = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1rem auto 1rem;
  gap: 1rem;
  line-height: 1;

  button {
    background-color: red;
    display: grid;
    padding: 0;
    border: none;
    background: inherit;
  }

  img {
  }
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

  img {
  }
`;
