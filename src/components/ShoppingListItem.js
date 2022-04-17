import { useState } from 'react';
import styled from 'styled-components/macro';
import clear from '../assets/clear.svg';

export default function ShoppingListItem({
  id,
  item,
  isSelected,
  onSelect,
  onDelete,
  onEdit,
  onChange,
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

  return (
    <>
      {isSelected !== id ? (
        <Form>
          <input type="checkbox" id={item} name={id} value={item} aria-label={item} />
          <div id={id} onClick={handleOnSelect}>
            {item}
          </div>
        </Form>
      ) : (
        <Edit>
          <input type="checkbox" id={item} name={item} />
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
