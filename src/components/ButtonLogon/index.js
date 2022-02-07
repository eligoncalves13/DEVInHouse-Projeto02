import React from 'react';
//Styles
import { 
  ContainerButton, 
  ButtonSubmit
} from './styles';

function ButtonLogon({...otherProps}) {
  return (
    <ContainerButton>
      <ButtonSubmit 
        {...otherProps}
      ></ButtonSubmit>
    </ContainerButton>
  )
}
export default ButtonLogon;