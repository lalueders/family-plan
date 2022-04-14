import { useState } from 'react';
import styled from 'styled-components/macro';
import add from '../assets/add.svg';
import clear from '../assets/clear.svg';

export default function NewShoppingListItem({ onCreate }) {
  const [input, setInput] = useState('');

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleOnClickClear(event) {
    event.preventDefault();
    setInput('');
  }

  function handleSubmitCreate(event) {
    event.preventDefault();
    onCreate(input);
    setInput('');
  }

  return (
    <Create>
      <button type="submit" onClick={handleSubmitCreate}>
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
      <button onClick={handleOnClickClear}>
        <img src={clear} alt="Clear Input"></img>
      </button>
    </Create>
  );
}

const Create = styled.form`
  display: grid;
  grid-template-columns: 14px auto 14px;
  align-items: center;
  gap: 1rem;

  input {
    min-width: 100%;
    padding: 0;
    border: none;
    font-size: inherit;
    justify-self: stretch;
  }

  input:focus {
    outline: none;
  }

  button {
    display: grid;
    padding: 0;
    border: none;
    background: inherit;
  }
`;
