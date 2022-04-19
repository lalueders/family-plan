import { useState } from 'react';
import styled from 'styled-components/macro';
import clear from '../assets/clear.svg';
import tick from '../assets/tick.svg';

export default function ShoppingListItem({
  id,
  item,
  isSelected,
  onSelect,
  onDelete,
  onEdit,
  onChange,
  onCheck,
}) {
  const [input, setInput] = useState(item);

  function handleOnChange(event) {
    setInput(event.target.value);
    onChange(event);
  }

  function handleOnDelete(event) {
    onDelete(event);
  }

  function handleOnSelect(event) {
    onSelect(event);
  }

  function handleOnEdit(event) {
    event.preventDefault();
    onEdit(event, input);
  }

  function handleOnCheck(event) {
    event.preventDefault();
    onCheck(event);
  }

  return (
    <>
      {isSelected !== id ? (
        <Item>
          <button id={id} onClick={handleOnCheck}></button>
          <div id={id} onClick={handleOnSelect}>
            {item}
          </div>
        </Item>
      ) : (
        <Edit>
          <Checkbox id={id} onClick={handleOnCheck}></Checkbox>
          <input type="submit" id={id} onClick={handleOnEdit} hidden />
          <input
            type="text"
            name={item}
            id={id}
            placeholder="Add item..."
            aria-label="Add item to shopping list"
            autoFocus
            value={input}
            onChange={handleOnChange}
          />
          <button id={id} onClick={handleOnDelete}>
            <img src={clear} alt="Clear Input"></img>
          </button>
        </Edit>
      )}
    </>
  );
}

const Checkbox = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid;
  display: grid;
  padding: 0;
  background: inherit;
  border-radius: 4px;

  img {
    padding: 1px;
  }
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: 14px auto;
  align-items: end;
  gap: 1rem;

  div {
    height: 1.3rem;
    width: 100%;
  }

  button {
    width: 20px;
    height: 20px;
    border: 2px solid;
    display: grid;
    padding: 0;
    background: inherit;
    border-radius: 4px;

    img {
      padding: 1px;
    }
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 14px auto;
  align-items: center;
  gap: 1rem;

  div {
    height: 1.3rem;
    width: 100%;
  }

  label {
    padding: 0;
    border: none;
    font-size: inherit;
    justify-self: stretch;
  }

  button {
    display: grid;
    padding: 0;
    border: none;
    background: inherit;
  }
`;

const Edit = styled.form`
  display: grid;
  grid-template-columns: 14px auto 14px;
  align-items: center;
  gap: 1rem;

  input {
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
