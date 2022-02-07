import styled from 'styled-components';

export const ContainerButton = styled.div`
  width: 100%;
`;

export const ButtonSubmit = styled.button`
  background-color: ${props => props.edit ? "#8DB51B" : "#D82D56"};
  border: 1px solid ${props => props.edit ? "#8DB51B" : "#D82D56"};
  border-radius: 5px;
  color: #FAFAFA;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
  height: 25px;
  outline: none;
  width: 75px;
  &:hover {
    border-color: #000000;
  }
`;