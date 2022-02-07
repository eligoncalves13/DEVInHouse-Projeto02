import styled from 'styled-components';

export const ContainerButton = styled.div`
  margin: 5px;
  width: 100%; 

  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

export const ButtonSubmit = styled.button`
  background-color: #4CBC9A;
  border: 1px solid #4CBC9A;
  border-radius: 10px;
  color: #FAFAFA;
  cursor: pointer;
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  height: 45px;
  outline: none;
  width: 300px;
  &:hover {
    border-color: #000000;
  }
`;