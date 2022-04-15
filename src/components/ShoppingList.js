import { useState } from 'react';
import styled from 'styled-components/macro';
import { nanoid } from 'nanoid';
import ShoppingListItem from './ShoppingListItem';
import NewShoppingListItem from './NewShoppingListItem';

export default function ShoppingList() {
  const [shoppingList, setShoppingList] = useState([]);
  const [isSelected, setIsSelected] = useState('');

  function onCreate(input) {
    const newItem = { id: nanoid(), name: input, active: false };
    setShoppingList([...shoppingList, newItem]);
  }

  function onEdit(event, input) {
    const index = shoppingList.findIndex(item => item.id === event.currentTarget.id);
    shoppingList[index] = { id: event.currentTarget.id, name: input, active: false };
    setShoppingList([...shoppingList]);
    setIsSelected('');
  }

  function onSelect(event) {
    setIsSelected(event.currentTarget.id);
  }

  function onDelete(event) {
    const index = shoppingList.findIndex(item => item.id === event.currentTarget.id);
    shoppingList.splice(index, 1);
    setShoppingList([...shoppingList]);
  }

  return (
    <Container>
      <h2>Shopping List</h2>
      {shoppingList.map(item => (
        <ShoppingListItem
          key={item.id}
          id={item.id}
          item={item.name}
          isSelected={isSelected}
          onDelete={onDelete}
          onEdit={onEdit}
          onSelect={onSelect}
        />
      ))}
      <NewShoppingListItem onCreate={onCreate} isSelected={isSelected} />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  user-select: none;
  display: grid;
  gap: 1rem;
`;
