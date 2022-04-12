import { useState } from 'react';
import styled from 'styled-components/macro';
import ShoppingListItem from './ShoppingListItem';
import NewShoppingListItem from './NewShoppingListItem';
import add from '../assets/add.svg';
import clear from '../assets/clear.svg';

export default function ShoppingList() {
  const [shoppingList, setShoppingList] = useState([]);

  function onSubmit(input) {
    setShoppingList([...shoppingList, input]);
  }

  function onEdit(input, event) {
    const index = shoppingList.indexOf(event.currentTarget.value);
    if (index !== -1) {
      shoppingList[index] = input;
    }

    setShoppingList([...shoppingList]);
  }

  function onDelete(event) {
    const index = shoppingList.indexOf(event.currentTarget.value);
    shoppingList.splice(index, 1);
    setShoppingList([...shoppingList]);
  }

  return (
    <Container>
      <h2>My Shopping List</h2>
      {shoppingList.map((item, index) => (
        <ShoppingListItem item={item} key={index} onDelete={onDelete} onEdit={onEdit} />
      ))}
      <NewShoppingListItem onSubmit={onSubmit} />
    </Container>
  );
}

const Container = styled.div`
  user-select: none;
  padding: 1rem;
  display: grid;
  gap: 1rem;
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
`;
