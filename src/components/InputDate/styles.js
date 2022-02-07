import styled from 'styled-components';

export const ContainerInput = styled.div`
  color: #53575D;
  font-family: 'Raleway', sans-serif;

  display: flex;
  flex-direction: column;
`;

export const DescriptionInput = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin: 15px 0;
  
`;

export const InputText = styled.input`
  border-radius: 2px;
  cursor: pointer;
  height: 30px;
  outline: none;
  padding-left: 5px;
  width: 100%;
  &:focus {
    border-color: #20B2AA;
  }
`;
