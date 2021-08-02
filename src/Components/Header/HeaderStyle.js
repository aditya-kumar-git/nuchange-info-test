import styled from "styled-components";

export const CartPopup = styled.div`
position: absolute;
background-color: white;
height: 10rem;
width: 20rem;
right: 0;
top: 3.5rem;
box-shadow: 4px 4px 10px rgba(0,0,0,0.4)  ;
overflow: scroll;
border-radius: 0.8rem;
padding: 0.8rem;
`

export const HeaderContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 3rem;
position: relative;
`

export const CartLogoContainer = styled.div`
background-color: white;
position: relative;
padding: 1rem;
border-radius: 0.8rem;
box-shadow: 4px 4px 10px rgba(0,0,0,0.4)  ;
cursor: pointer;
&:active
    {
        opacity: 0.5;
    }
`
export const Header = styled.div`
color: white;
font-weight: bold;
font-size: 1.6rem;
`;

export const NoItem = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 100%;
`;

export const Badge = styled.div`
background-color: red;
position: absolute;
left: 0;
top: 0;
width: 1.5rem;
height: 1.5rem;
display: flex;
align-items: center;
justify-content: center;
font-size: 0.7rem;
font-weight: bold;
transform: translateY(-0.5rem)translateX(-0.5rem);
border-radius: 50%;
`;
