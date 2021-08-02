import styled from "styled-components";


export const CatContainer = styled.div`
margin-top: 2rem;
margin-bottom: 2rem;
font-size: 1.3rem;
font-weight: 500;
cursor: pointer;
color: ${props => props.selected ? 'white' : '#929a9c'};
display: flex;
flex-direction: row;
align-items: center;
`

export const SelectedDot = styled.div`

font-size: 1.3rem;
font-weight: bold;
margin-left: 0.2rem;
`

