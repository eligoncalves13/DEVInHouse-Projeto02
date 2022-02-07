import styled from 'styled-components';

export const CardItem = styled.div`
  background-color: #FAFAFA ;
  border: 1px solid #E5E5E5;
  border-radius: 5px;
  box-sizing: border-box;
  font-family: 'Mulish', sans-serif;
  height: 75px;
  width: 20%;
  
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center; 

  h2 {
    color: #9FA2B4;
    font-size: 12px;
    margin-bottom: 10px;
    text-align: center;
  }

  span {
    font-size: 25px;
    font-weight: bolder;
  }
`;
