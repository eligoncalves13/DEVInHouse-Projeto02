import React from 'react';
//Styles
import { 
    ContainerButton, 
    ButtonSubmit
} from './styles';

function ButtonTable({...otherProps}) {
  return (
    <ContainerButton>
      <ButtonSubmit 
        {...otherProps}
      ></ButtonSubmit>
    </ContainerButton>
  )
}
export default ButtonTable;