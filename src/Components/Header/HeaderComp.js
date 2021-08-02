import React, { useState } from 'react'
import { Header, CartLogoContainer, HeaderContainer, CartPopup,NoItem,Badge } from './HeaderStyle'
import { BsBag } from 'react-icons/bs'
import { useSelector } from 'react-redux';
import CartItem from 'Components/CartItem'


export default function HeaderComp() {
    const [openClose, setOpenClose] = useState(false)

    const openCart = () => {
        setOpenClose(!openClose)
    }

    const cartData = useSelector((state) => state.cartData)

    const NoItems = () => {
        return <NoItem>No items in cart</NoItem>
    }

    const CartORnot = () => {
        return openClose &&
            <CartPopup>
                {
                    cartData.length > 0 ?cartData.map((item,index)=> <CartItem key={'CartItem-'+index} data={item}/> )  : <NoItems/>
                }
            </CartPopup>
    }

    return (
        <HeaderContainer>
            <Header>
            Nuchange Informatics
            </Header>

            <CartLogoContainer
                onClick={openCart}
            >
                {cartData.length>0 && <Badge>{cartData.length}</Badge>}
                <BsBag
                    style={{ width: '1rem', height: '1rem' }}
                />
            </CartLogoContainer>
                <CartORnot />

        </HeaderContainer>
    )
}
