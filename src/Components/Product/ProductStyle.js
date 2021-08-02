
import styled from "styled-components";


export const ProductBoxContainer = styled.div`
margin-left: 0.2rem;
margin-right: 0.2rem;
display: flex;
align-items: center;
`

export const ProductBox = styled.div`
background-color: white;
border-radius: 1rem;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 4rem;
padding: 0.5rem;
cursor: pointer;
box-shadow: 10px 10px 10px rgba(0,0,0,0.4)  ;
position: relative;
flex-grow: 1;
&:hover{
    .ProductImageClass{
        
        transform: translateY(-3.5rem);
    }
}
`


export const ProductImage = styled.img`
transition-duration: 550ms;
height: 10rem;
width: 10rem;
transform: translateY(-3rem);
`

export const ProductName = styled.div`
font-weight: 400;
font-size: 1.5rem;
overflow: hidden;
text-align: left;
width: 100%;

`
export const ProductDataContainer = styled.div`
transform: translateY(-1.5rem);
width: 100%;
`

export const ProductPrice = styled.div`
font-weight: bold;
font-size: 1rem;
margin-top: 0.2rem;
`

export const DetailBox = styled.div`
display: flex;
justify-content: space-between;
width: 100%;
align-items: center;
`

export const BuyNowButton = styled.div`
background-color: #3B4445;
color: white;
font-weight: bold;
font-size: 1rem;
padding: 0.5rem;
border-radius: 0.5rem;
margin-left: 0.5rem;
&:hover
    {
        background-color: black;
    }
&:active
    {
        opacity: 0.5;
    }
`
export const NotInStock = styled.div`
background-color: red;
color: white;
font-weight: bold;
font-size: 1rem;
padding: 0.5rem;
position: absolute;
left: 0;
top: 0;
border-top-left-radius: 1rem;
border-bottom-right-radius: 1rem;
`