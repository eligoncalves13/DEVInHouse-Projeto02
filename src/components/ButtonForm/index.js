import React from 'react';
//Styles
import { 
    ContainerButton, 
    ButtonSubmit
} from './styles';

function ButtonForm({...otherProps}) {
  return (
    <ContainerButton>
      <ButtonSubmit 
        {...otherProps}
      ></ButtonSubmit>
    </ContainerButton>
  )
}
export default ButtonForm;