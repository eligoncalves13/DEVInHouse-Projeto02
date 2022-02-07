import React from 'react';
//Styles
import { 
  ContainerInput, 
  DescriptionInput,
  InputText
} from './styles';

function InputForm({label, ...otherProps}) {
  return (
    <ContainerInput>
        <DescriptionInput>{label}</DescriptionInput>
        <InputText {...otherProps}/>
    </ContainerInput>
  );
}
export default InputForm;