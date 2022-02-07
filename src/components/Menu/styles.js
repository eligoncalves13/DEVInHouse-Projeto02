import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const ContainerMenu = styled.nav`
  background-color: #FFFFFF;
  height: 100vh;

  display: flex;
  align-items: center;
  flex-direction: column;

  grid-area: nav; 
  
  img {
    height: 120px;
    width: 120px;  
  }

  @media only screen and (max-width: 800px){
    flex-direction: column;
    height: 100vh;
    padding-top: 3.5rem;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
    transition: transform 0.3s ease-in-out; 
    width: 250px;

    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
`;

export const MenuListItem = styled.li`
  color: #A098AE;
  cursor: pointer;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
     
  a {
    color: inherit;
    margin: 5px 30px;
    padding: 15px; 
    text-decoration: none;
    
    display: flex;
    align-items: center;
  }
`;

export const StyledLink = styled(NavLink)`
  &.${props => props.activeClassName} {
    background-color:#4CBC9A;
    border-radius: 15px;
    box-shadow: 0px 20px 50px rgba(55, 69, 87, 0.1);     
    color: #FAFAFA; 
  }
`;