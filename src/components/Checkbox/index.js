import React from 'react';
//Styles
import { 
  ContainerCheckbox , 
  InputCheckbox, 
  Description 
} from './styles';

function Checkbox({label, ...otherProps}) {
  return (
    <ContainerCheckbox>
      <InputCheckbox
        type="checkbox"
        {...otherProps}
      />
      <Description>{label}</Description>
    </ContainerCheckbox>  
  )
}
export default Checkbox;