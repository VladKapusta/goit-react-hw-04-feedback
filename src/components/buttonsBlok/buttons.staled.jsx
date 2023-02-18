import styled from '@emotion/styled';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const btnBgColor = ({ bgColor }) => {
  switch (bgColor) {
    case 'good':
      return 'green';
    case 'neutral':
      return 'grey';
    case 'bad':
      return 'red';
    default:
      return 'black';
  }
}

export const Button = styled.button`
  padding: 10px;
  min-width: 100px;

  border: none;
  border-radius: 8px;
  cursor: pointer;

  color: white;

  font-size: inherit;
  transform: scale(1);
  transition: transform 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  background-color: ${btnBgColor};
  :hover {
    transform: scale(1.05);
  }
`;
