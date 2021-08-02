import styled, { createGlobalStyle } from "styled-components";
export const GlobalStyle = createGlobalStyle`
  
  *{
    -ms-overflow-style: none;
}
::-webkit-scrollbar {
    display: none;
}
`
export const HomeContainer = styled.div`

`
export const Heading = styled.div`
color: white;
font-weight: bold;
font-size: 2.6rem;
`;

export const DataContainer = styled.div`
display: flex;
flex-direction: row;
`;

export const CategoryContainer = styled.div`
margin-right: 1rem;
`;

export const StoreContainer = styled.div`
margin-left: 1rem;
margin-top: 2rem;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
width: 100%;
`;
