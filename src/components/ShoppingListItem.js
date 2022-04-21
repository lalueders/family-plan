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
          <Checkbox id={id} onClick={handleOnCheck}></Checkbox>
          <div id={id} onClick={handleOnSelect}>
            {item}
          </div>
        </Item>
      ) : (
        <Edit>
          <input type="submit" id={id} onClick={handleOnEdit} hidden />
          <Checkbox id={id} onClick={handleOnCheck}></Checkbox>
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
          <Delete id={id} onClick={handleOnDelete}>
            <img src={clear} alt="Clear Input"></img>
          </Delete>
        </Edit>
      )}
    </>
  );
}

const Item = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  align-items: center;
  gap: 1rem;
  color: #1e1e1e;

  div {
    height: 1.3rem;
    width: 100%;
  }
`;

const Edit = styled.form`
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
`;

const Checkbox = styled.button`
  width: 20px;
  height: 20px;
  border: 2px solid #414649;
  display: grid;
  padding: 0;
  background: inherit;
  border-radius: 3px;
`;

const Delete = styled.button`
  width: 20px;
  height: 20px;
  border: none;
  display: grid;
  background: inherit;
  align-items: center;
  justify-items: center;
  padding: 3px;

  img {
    width: 100%;
  }
`;
