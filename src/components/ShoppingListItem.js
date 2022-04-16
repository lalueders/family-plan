import { useState } from 'react';
import styled from 'styled-components/macro';
import clear from '../assets/clear.svg';

export default function ShoppingListItem({ id, item, isSelected, onSelect, onDelete, onEdit }) {
  const [input, setInput] = useState(item);

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleOnClickDelete(event) {
    onDelete(event);
  }

  function handleOnClickEdit(event) {
    onSelect(event);
  }

  function handleSubmitEdit(event) {
    event.preventDefault();
    onEdit(event, input);
  }

  return (
    <>
      {isSelected !== id ? (
        <Form>
          <input type="checkbox" id={item} name={item} />
          <label id={id} onClick={handleOnClickEdit}>
            {item}
          </label>
        </Form>
      ) : (
        <Edit submit>
          <input type="checkbox" id={item} name={item} />
          <input type="submit" id={id} onClick={handleSubmitEdit} hidden />
          <input
            type="text"
            name="add"
            id={id}
            placeholder="Add item..."
            aria-label="Add item to shopping list"
            autoFocus
            value={input}
            onChange={handleOnChange}
            onBlur={handleSubmitEdit}
          />
          <button id={id} onClick={handleOnClickDelete}>
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

  label {
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

const Edit = styled.form`
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
