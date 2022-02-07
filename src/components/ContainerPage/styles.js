import styled from 'styled-components';

export const Container = styled.div`
  background-color: #F5F5F5;

  display: grid; 
  grid-template-columns: 250px 1fr; 
  grid-template-rows: 70.5px 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    "nav header"
    "nav main"; 

  @media only screen and (max-width: 800px){
    background-color: #F5F5F5;
    display: grid; 
    grid-template-columns: 1fr; 
    grid-template-rows: 70.5px 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
      "header"
      "main";    
  }
`;
