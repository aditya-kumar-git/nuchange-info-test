import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartReducer } from 'Redux/Actions'
import { FullImage, PageContainer, PageText, SubText, BuyNowButton, BackContainerTwo, BackContainerOne } from './ProductStyle'
import { IoIosArrowBack } from 'react-icons/io';
import { useHistory } from 'react-router-dom';

export default function ProductScreen(props) {

    let pageData = props.location.state.data

    const addToCart = () => {
        let check = cartData.filter(x => x.name === pageData.name)
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
            let temp = { ...pageData, count: 1 }
            let temp2 = [...cartData, temp]
            dispatch(addToCartReducer(temp2))
        }
    }

    const goBack = () => {
        history.goBack()
    }
    let history = useHistory();
    const dispatch = useDispatch()
    const cartData = useSelector((state) => state.cartData)
    return (
        <PageContainer>
            <BackContainerTwo>
                <BackContainerOne
                onClick={goBack}
                >
                    <IoIosArrowBack />
                </BackContainerOne>
            </BackContainerTwo>
            <FullImage
                src={pageData.url}
            />
            <PageText>
                {pageData.name}
            </PageText>
            <SubText>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ullam accusamus rerum quisquam laboriosam minima impedit commodi blanditiis libero explicabo quidem alias, aliquid voluptatum sapiente officiis esse eos perferendis architecto.
            </SubText>
            <BuyNowButton
                onClick={addToCart}
            >
                BUY NOW
            </BuyNowButton>

        </PageContainer>
    )
}
