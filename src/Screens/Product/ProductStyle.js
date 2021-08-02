import styled from "styled-components";

export const PageContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const PageText = styled.div`
color: white;
font-weight: bold;
font-size: 2.6rem;
`;

export const SubText = styled.div`
color: white;
font-weight: 200;
font-size: 1rem;
text-align: center;
margin-top: 2rem;
`;


export const FullImage = styled.img`
height: 25rem;
width: 25rem;
`;

export const BackContainerOne = styled.div`
background-color: white;
display: flex;
align-items: center;
justify-content: center;
padding: 1rem;
border-radius: 0.8rem;
box-shadow: 4px 4px 10px rgba(0,0,0,0.4);
cursor: pointer;
&:active{
    opacity: 0.5;
}
`;

export const BackContainerTwo = styled.div`
width: 100%;
display: flex;
`;


export const BuyNowButton = styled.div`
color: #3B4445;
background-color: white;
font-weight: bold;
font-size: 1.2rem;
padding: 0.5rem;
border-radius: 0.5rem;
margin-left: 0.5rem;
cursor: pointer;
margin-top: 2rem;
transition-duration: 500ms;
&:hover
    {
        background-color: #a3a3a3;
    }
&:active
    {
        opacity: 0.5;
    }
`