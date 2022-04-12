import { useState } from 'react';
import styled from 'styled-components/macro';
import add from '../assets/add.svg';
import clear from '../assets/clear.svg';

export default function NewShoppingListItem({ onSubmit }) {
  const [input, setInput] = useState('');

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleClickToClear(event) {
    event.preventDefault();
    setInput('');
  }

  function handleClickToAdd(event) {
    event.preventDefault();
    onSubmit(input);
    setInput('');
  }

  return (
    <Add>
      <button type="submit" onClick={handleClickToAdd}>
        <img src={add} alt="Add new item to shopping list"></img>
      </button>
      <input
        type="text"
        name="add"
        id="add"
        placeholder="Add item..."
        aria-label="Add new item to shopping list"
        autoFocus
        value={input}
        onChange={handleOnChange}
      />
      <button onClick={handleClickToClear}>
        <img src={clear} alt="Clear Input"></img>
      </button>
    </Add>
  );
}

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
