import styled from 'styled-components';

export const Title = styled.h2`
    color: #374557;
    font-family: 'Poppins', sans-serif;
    font-size: larger;
    font-weight: bolder;
    margin: 40px 70px;

    @media only screen and (max-width: 800px){
      margin: 40px 5px;
    }
`;

export const Table = styled.table`
    background: #FFF;
    font-family: 'Raleway', sans-serif;
    padding: 10px;
    margin: 30px 70px;
    width: 80%;

    @media only screen and (max-width: 800px){
      margin: 5px;;
    } 
`;

export const THeader = styled.thead`
    background: #E8E8E8;
    color: #25282B;

    th {
      font-size: 14px;
      font-weight: bolder;
      padding: 12px;
      text-align: left;
  }
`;

export const TBody = styled.tbody`
  font-size: 14px;
`;

export const Row = styled.tr`
`;

export const RowItem = styled.td`
  border-bottom: 1px solid #E8E8E8;
  color: #53575D;
  padding: 12px;
`;