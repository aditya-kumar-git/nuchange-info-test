import styled from "styled-components";

export const CartItemContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 2.6rem;
-ms-overflow-style: none;
  scrollbar-width: none;
`

export const DataContainer = styled.div`
width: 100%;
`
export const CartItemImage = styled.img`
height: 4rem;
width: 4rem;
`

export const CartItemName = styled.div`
font-size: 1.4rem;
font-weight: 500;
`

export const AddRemoveContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`

export const AddRemoveText = styled.div`
font-size: 0.8rem;
font-weight: 300;
`

export const AddRemoveButton = styled.div`
font-size: 0.8rem;
font-weight: 600;
display: flex;
align-items: center;
background-color: #3B4445;
color:white;
padding: 0.2rem;
border-radius: 0.5rem;
`


export const AddRemoveValues = styled.div`
cursor: pointer;

width: 100%;
width: 2rem;
text-align: center;
&:active{
    opacity: 0.5;
}
`

