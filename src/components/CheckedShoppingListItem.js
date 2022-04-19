import styled from 'styled-components/macro';
import tick from '../assets/tick.svg';

export default function CheckedShoppingListItem({ id, item, onUnCheck }) {
  function handleUnCheck(event) {
    onUnCheck(event);
  }

  return (
    <Item>
      <button id={id} item={item} onClick={handleUnCheck}>
        <img src={tick} alt="Clear Input"></img>
      </button>
      <div id={id}>{item}</div>
    </Item>
  );
}
const Item = styled.div`
  display: grid;
  grid-template-columns: 14px auto;
  align-items: end;
  gap: 1rem;

  div {
    height: 1.3rem;
    width: 100%;
    text-decoration: line-through;
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
      fill: grey;
    }
  }
`;
