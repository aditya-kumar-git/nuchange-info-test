import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { ProductDataContainer, BuyNowButton, DetailBox, ProductBox, ProductBoxContainer, ProductImage, ProductName, ProductPrice, NotInStock } from './ProductStyle'
import { addToCartReducer } from 'Redux/Actions'
import { Link } from "react-router-dom";

export default function ProductComp(props) {

    const { data } = props

    const addToCart = () => {
        let check = cartData.filter(x => x.name === data.name)
        if (check.length > 0) {
            let temp = { ...check[check.length - 1], count: check[check.length - 1].count + 1 }
            let temp2 = cartData.map(x => {
                if (x.name === temp.name) {
                    return temp
                }
                else {
                    return x
                }
            })
            dispatch(addToCartReducer(temp2))
        }
        else {
            let temp = { ...data, count: 1 }
            let temp2 = [...cartData, temp]
            dispatch(addToCartReducer(temp2))
        }
    }

    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.cartData)
    return (
        <ProductBoxContainer>

            <ProductBox>
                {
                    data.stock === 0 &&
                    <NotInStock>Not in stock</NotInStock>
                }

                <Link
                    to={{
                        pathname: `item/${data.name}`,
                        state: {
                            data: data,
                        },
                    }}
                >
                    <ProductImage
                        className='ProductImageClass'
                        src={data.url}
                    />
                </Link>
                <ProductDataContainer>

                    <ProductName>{data.name}</ProductName>
                    <DetailBox>
                        <ProductPrice>₹ {data.price}</ProductPrice>
                        {data.stock !== 0 &&
                            <BuyNowButton
                                onClick={addToCart}
                            >
                                BUY NOW
                            </BuyNowButton>
                        }

                    </DetailBox>
                </ProductDataContainer>
            </ProductBox>
        </ProductBoxContainer>
    )
}
