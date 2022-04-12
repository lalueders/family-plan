import styled from 'styled-components/macro';
import clear from '../assets/clear.svg';

export default function ShoppingListItem({ item, onDelete }) {
  function handleClick(event) {
    event.preventDefault();
    onDelete(event);
  }

  return (
    <Form>
      <input type="checkbox" id={item} name={item} />
      <label htmlFor={item}>{item}</label>
      <button value={item} onClick={handleClick}>
        <img src={clear} alt="Delete item from shopping list"></img>
      </button>
    </Form>
  );
}

const Form = styled.form`
  display: grid;
  align-items: center;
  grid-template-columns: 1rem auto 1rem;
  gap: 1rem;
  line-height: 1;

  button {
    background-color: red;
    display: grid;
    padding: 0;
    border: none;
    background: inherit;
  }
`;
