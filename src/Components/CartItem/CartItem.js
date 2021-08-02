import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCartReducer } from 'Redux/Actions'
import { AddRemoveButton, AddRemoveContainer, AddRemoveText, AddRemoveValues, CartItemContainer, CartItemImage, CartItemName, DataContainer } from './CartItemStyle'

export default function CartItem(props) {
    const { data } = props

    const addItem = () => {
        let updatedData = cartData.map(x => {
            if (x.name === data.name) {
                return { ...x, count: x.count + 1 }
            }
            else {
                return x
            }
        })
        dispatch(addToCartReducer(updatedData))

    }

    const removeItem = () => {
        if (data.count === 1) {
            let updatedData = cartData.filter(x => x.name !== data.name)
            dispatch(addToCartReducer(updatedData))
        }
        else {
            let updatedData = cartData.map(x => {
                if (x.name === data.name) {
                    return { ...x, count: x.count - 1 }
                }
                else {
                    return x
                }
            })
            dispatch(addToCartReducer(updatedData))
        }
    }

    const cartData = useSelector((state) => state.cartData)
    const dispatch = useDispatch()

    return (
        <CartItemContainer>
            <CartItemImage
                src={data.url}
            />
            <DataContainer>
                <CartItemName>
                    {data.name}
                </CartItemName>
                <AddRemoveContainer>
                    <AddRemoveText>Quantity</AddRemoveText>
                    <AddRemoveButton>
                        <AddRemoveValues onClick={removeItem} >-</AddRemoveValues>
                        <div>{data.count}</div>
                        <AddRemoveValues onClick={addItem} >+</AddRemoveValues>
                    </AddRemoveButton>
                </AddRemoveContainer>
            </DataContainer>
        </CartItemContainer>
    )
}
