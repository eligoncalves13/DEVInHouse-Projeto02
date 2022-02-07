import styled from 'styled-components';

export const Container = styled.main`
    background-color: #FAFAFA;
    box-sizing: border-box;
    height: calc(100vh - 70.5px);
    width: 100%;
    
    grid-area: main;

    @media only screen and (max-width: 800px){
        height: 100vh;
    }
`;
