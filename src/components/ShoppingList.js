import { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { nanoid } from 'nanoid';
import ShoppingListItem from './ShoppingListItem';
import CheckedShoppingListItem from './CheckedShoppingListItem';
import NewShoppingListItem from './NewShoppingListItem';

export default function ShoppingList() {
  const [itemsToBuy, setItemsToBuy] = useState([]);
  const [itemsBought, setItemsBought] = useState([]);
  const [isSelected, setIsSelected] = useState('');
  const inputRef = useRef();

  function onCreate(input) {
    const newItem = { id: nanoid(), item: input, checked: false };
    setItemsToBuy([...itemsToBuy, newItem]);
  }

  function onSelect(event) {
    setIsSelected(event.currentTarget.id);
  }

  function onChange(event) {
    const index = itemsToBuy.findIndex(item => item.id === event.currentTarget.id);
    itemsToBuy[index] = { id: event.currentTarget.id, item: event.target.value };
    setItemsToBuy([...itemsToBuy]);
  }

  function onEdit(event, input) {
    const index = itemsToBuy.findIndex(item => item.id === event.currentTarget.id);
    itemsToBuy[index] = { id: event.currentTarget.id, item: input };
    setItemsToBuy([...itemsToBuy]);
    setIsSelected('');
  }

  function onDelete(event) {
    const index = itemsToBuy.findIndex(item => item.id === event.currentTarget.id);
    itemsToBuy.splice(index, 1);
    setItemsToBuy([...itemsToBuy]);
    setIsSelected('');
  }

  function onCheck(event) {
    const index = itemsToBuy.findIndex(item => item.id === event.currentTarget.id);
    itemsToBuy[index] = { ...itemsToBuy[index], checked: true };
    setItemsBought([itemsToBuy[index], ...itemsBought]);
    setFocus();
  }

  function onUnCheck(event) {
    const itemsToBuyIndex = itemsToBuy.findIndex(item => item.id === event.currentTarget.id);
    itemsToBuy[itemsToBuyIndex] = { ...itemsToBuy[itemsToBuyIndex], checked: false };
    const itemsBoughtIndex = itemsBought.findIndex(item => item.id === event.currentTarget.id);
    itemsBought.splice(itemsBoughtIndex, 1);
    setItemsBought([...itemsBought]);
    setFocus();
  }

  function setFocus() {
    inputRef.current.focus();
  }

  return (
    <Container>
      <h2>Shopping List</h2>
      {itemsToBuy.map(
        item =>
          !item.checked && (
            <ShoppingListItem
              key={item.id}
              id={item.id}
              item={item.item}
              isSelected={isSelected}
              onDelete={onDelete}
              onEdit={onEdit}
              onSelect={onSelect}
              onChange={onChange}
              onCheck={onCheck}
            />
          )
      )}
      <NewShoppingListItem onCreate={onCreate} isSelected={isSelected} inputRef={inputRef} />
      {itemsBought.map(item => (
        <CheckedShoppingListItem
          key={item.id}
          id={item.id}
          item={item.item}
          onUnCheck={onUnCheck}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  user-select: none;
  display: grid;
  gap: 1rem;
`;
