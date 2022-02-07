import styled from 'styled-components';

export const ContainerInput = styled.div`
  background-color: #FFFF;
  border: 1px solid ${(props) => props.errorMessage ? '#dc3545' : '#000000'};
  border-radius: 10px;
  color: #A098AE;
  font-family: 'Roboto Slab', serif;
  margin: 5px;
  padding-left: 5px;
  width: 295px;
  
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: #4CBC9A;
  }

  &:focus {
    border-color: #4CBC9A;
  }
`;

export const InputText = styled.input`
  background-color: #FFFF;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  color: #A098AE;
  cursor: pointer;
  font-family: 'Roboto Slab', serif;
  font-size: 11px ;
  height: 45px;
  margin-left: 10px;
  outline: none;
  padding-left: 5px;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: #dc3545;
  font-size: 11px;
  margin-top: 2px;
`;