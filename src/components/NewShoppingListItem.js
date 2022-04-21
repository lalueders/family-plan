import { useState } from 'react';
import styled from 'styled-components/macro';
import add from '../assets/add.svg';
import clear from '../assets/clear.svg';

export default function NewShoppingListItem({ onCreate, onSelect, isSelected, inputRef }) {
  const [input, setInput] = useState('');

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleOnClickDelete() {
    setInput('');
  }

  function handleOnSelect(event) {
    onSelect(event);
  }

  function handleSubmitCreate(event) {
    event.preventDefault();
    onCreate(input);
    setInput('');
  }

  return (
    <>
      {/* {!isSelected && ( */}
      <Create onClick={handleOnSelect}>
        <Add type="submit" onClick={handleSubmitCreate}>
          <img src={add} alt="Add new item to shopping list"></img>
        </Add>
        <input
          type="text"
          name="add"
          id="add"
          placeholder="Add item..."
          aria-label="Add new item to shopping list"
          autoFocus
          value={input}
          onChange={handleOnChange}
          ref={inputRef}
        />
        {input.length > 0 && (
          <Delete onClick={handleOnClickDelete}>
            <img src={clear} alt="Clear Input"></img>
          </Delete>
        )}
      </Create>
      {/* )} */}
    </>
  );
}

const Create = styled.form`
  display: grid;
  grid-template-columns: 20px auto 20px;
  align-items: center;
  gap: 1rem;

  input {
    width: 100%;
    padding: 0;
    border: none;
    font-size: inherit;
    justify-self: start;
    color: #1e1e1e;
    background: inherit;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #9f9f9f;
  }
`;

const Add = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  display: grid;
  background: white;
  align-items: center;
  justify-items: center;
  padding: 1px;

  img {
    width: 100%;
  }
`;

const Delete = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  display: grid;
  background: white;
  align-items: center;
  justify-items: center;
  padding: 3px;

  img {
    width: 100%;
  }
`;
