import styled from 'styled-components';

export const Container = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  background: #fff;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Days = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const WeakDay = styled.strong`
  margin: 5px;
  text-align: center;
  color: #ec1d58;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const Button = styled.button`
  margin: 5px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: none;
  font-size: 18px;
  background: none;
  transition: 0.2s;

  &:hover {
    background: gray;
    color: #fff;
  }

  &:first-child {
    grid-column: ${props => props.start};
  }
`;
