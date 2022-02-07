import styled from 'styled-components';

export const ContainerSelect = styled.div`
  font-family: 'Raleway', sans-serif;

  display: flex;
  flex-direction: column;
`;

export const DescriptionSelect = styled.label`
  color: #53575D;
  font-size: 14px;
  font-weight: bold;
  margin: 15px 0;
`;

export const List = styled.select`
  background: #FBFCFF;
  border: 1px solid #777C83;
  border-radius: 2px;
  color: #53575D;
  cursor: pointer;
  font-family: 'Raleway', sans-serif;
  height: 30px;
  outline: 0;
  padding-left: 5px;
  width: 100%;

  option {
    background: #FBFCFF;
  }

  &:focus {
    border-color: #4CBC9A;
  }
`;