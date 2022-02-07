import styled from 'styled-components';

export const ContainerButton = styled.div`
  margin: 30px 70px;
  width: 80%;

  display: flex;
  align-items: center;
  justify-content: right;
`;

export const ButtonSubmit = styled.button`
  background-color: #4C5DF1;
  border: 1px solid #4C5DF1;
  border-radius: 15px;
  box-shadow: 0px 20px 50px rgba(55, 69, 87, 0.1);
  font-family: 'Roboto Slab', serif;
  font-size: 16px;
  color: #FAFAFA;
  cursor: pointer;
  height: 45px;
  outline: none;
  width: 200px;
  &:hover {
    border-color: #000000;
  }
`;