import { useState } from 'react';
import styled from 'styled-components/macro';
import add from '../assets/add.svg';
import clear from '../assets/clear.svg';

export default function ShoppingListItem({ id, item, onDelete, onEdit }) {
  const [isSelected, setIsSelected] = useState(false);
  const [input, setInput] = useState(item);

  function handleOnChange(event) {
    setInput(event.target.value);
  }

  function handleOnClickDelete(event) {
    onDelete(event);
  }

  function handleOnClickEdit() {
    setIsSelected(!isSelected);
  }

  function handleSubmitEdit(event) {
    event.preventDefault();
    onEdit(event, input);
    setIsSelected(!isSelected);
  }

  return (
    <>
      {!isSelected ? (
        <Form>
          <input type="checkbox" id={item} name={item} />
          <label id={id} onClick={handleOnClickEdit}>
            {item}
          </label>
          {/* <button id={id} onClick={handleOnClickDelete}>
            <img src={clear} alt="Clear Input"></img>
          </button> */}
        </Form>
      ) : (
        <Edit>
          <button type="submit" id={id} onClick={handleSubmitEdit}>
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
          <button id={id} onClick={handleOnClickDelete}>
            <img src={clear} alt="Clear Input"></img>
          </button>
        </Edit>
      )}
    </>
  );
}

// const Form = styled.form`
//   user-select: none;
//   display: grid;
//   align-items: center;
//   grid-template-columns: auto auto auto;
//   gap: 1rem;
//   line-height: 1;

//   button {
//     display: grid;
//     padding: 0;
//     border: none;
//     background: inherit;
//   }
// `;

// const Edit = styled.form`
//   display: grid;
//   align-items: center;
//   grid-template-columns: auto 1fr auto;
//   justify-content: space-between;
//   gap: 1rem;
//   border: none;

//   input {
//     padding: 0;
//     border: none;
//     font-size: inherit;
//   }

//   input:focus {
//     outline: none;
//   }

//   button {
//     background-color: red;
//     display: grid;
//     padding: 0;
//     border: none;
//     background: inherit;
//   }
// `;

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
