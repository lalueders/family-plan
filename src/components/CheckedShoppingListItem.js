import styled from 'styled-components/macro';
import tick from '../assets/tick.svg';

export default function CheckedShoppingListItem({ id, item, onUnCheck }) {
  function handleUnCheck(event) {
    onUnCheck(event);
  }

  return (
    <Item>
      <button id={id} item={item} onClick={handleUnCheck}>
        <img src={tick} alt="Move item back to shopping list"></img>
      </button>
      <div id={id}>{item}</div>
    </Item>
  );
}

const Item = styled.div`
  display: grid;
  grid-template-columns: 20px auto;
  align-items: center;
  gap: 1rem;
  color: #9f9f9f;

  div {
    height: 1.3rem;
    width: 100%;
    text-decoration: line-through;
  }

  button {
    width: 20px;
    height: 20px;
    border: 2px solid #b4b9bc;
    display: grid;
    align-items: center;
    justify-items: center;
    padding: 1px;
    background: #b4b9bc;
    border-radius: 3px;

    img {
      width: 100%;
    }
  }
`;
