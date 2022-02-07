import React from 'react';
import MenuBurger from '../MenuBurger';
//Styles
import { 
  Container 
} from './styles';

function ContainerPage({children}) {
  return (
      <Container>
        <MenuBurger/>
          {children} 
      </Container>
  );
}
export default ContainerPage;