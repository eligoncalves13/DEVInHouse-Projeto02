import React from 'react';
//Libraries
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
//Styles
import { 
   ContainerInput, 
   DescriptionInput, 
} from './styles';

function InputDate({label, errorMessage, ...otherProps }) {

  console.log('Renderizei novamente - InputDate')
  return (
    <ContainerInput>
     <DescriptionInput>{label}</DescriptionInput>
     <DatePicker
      {...otherProps}
    />
    </ContainerInput>
  );
}
export default InputDate;