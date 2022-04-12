import { useState } from 'react';
import styled from 'styled-components/macro';
import add from '../assets/add.svg';
import clear from '../assets/clear.svg';

export default function ShoppingListItem({ item, onDelete, onEdit }) {
  const [active, setActive] = useState(true);
  const [input, setInput] = useState(item);

  function handleClickToClear(event) {
    event.preventDefault();
    setInput('');
  }

  function handleClickOnDelete(event) {
    event.preventDefault();
    onDelete(event);
  }

  function handleClickOnEdit() {
    setActive(!active);
  }

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleSubmitEdit(event) {
    event.preventDefault();
    onEdit(input, event);
    setActive(!active);
  }

  return (
    <>
      {active ? (
        <Form>
          <input type="checkbox" id={item} name={item} />
          <label onClick={handleClickOnEdit}>{item}</label>
          <button value={item} onClick={handleClickOnDelete}>
            <img src={clear} alt="Delete item from shopping list"></img>
          </button>
        </Form>
      ) : (
        <Edit>
          <button type="submit" value={item} onClick={handleSubmitEdit}>
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
        </Edit>
      )}
    </>
  );
}

const Form = styled.form`
  user-select: none;
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
`;

const Edit = styled.form`
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
