import React from 'react';
//Images
import Logo from "../../assets/logo1.png";
//Icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartPie } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faFileMedicalAlt } from '@fortawesome/free-solid-svg-icons';
//Styles
import { 
  ContainerMenu, 
  MenuList, 
  MenuListItem, 
  StyledLink 
} from './styles';

function Menu({open}) {
  return (
    <>
    <ContainerMenu open={open}>
      <img src={Logo} alt="Logo"></img>
      <MenuList >
          <MenuListItem ><StyledLink activeClassName="active"  to="/dashboard"><FontAwesomeIcon icon={faChartPie} pull="left" size="lg"/>Dashboard</StyledLink></MenuListItem>
          <MenuListItem ><StyledLink activeClassName="active"  to="/consumer_unit"><FontAwesomeIcon icon={faCog} pull="left" size="lg"/>Unidade consumidora</StyledLink></MenuListItem>
          <MenuListItem ><StyledLink activeClassName="active" to="/monthly_consumption"><FontAwesomeIcon icon={faFileMedicalAlt} pull="left" size="lg"/>Cadastro de energia gerada</StyledLink></MenuListItem>
      </MenuList>
    </ContainerMenu>
    </>
  )
}
export default Menu;