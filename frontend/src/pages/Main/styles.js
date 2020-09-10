import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const DateConfig = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 20px;
  background: #fff;
  margin-bottom: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Select = styled.select`
  margin: 5px;
  width: 100px;
  height: 30px;
`;

export const Option = styled.option``;

export const YearConfig = styled.div``;

export const Input = styled.input`
  margin: 5px;
  width: 100px;
  height: 30px;
`;
