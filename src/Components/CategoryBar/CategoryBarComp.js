import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CatContainer,SelectedDot } from './CategoryBarStyle'
import { selectCatAction } from 'Redux/Actions'

export default function CategoryBarComp(props) {
    const { data } = props


    const selectCtegory = () => {
        dispatch(selectCatAction(data))
    }
    const selectedCategory = useSelector((state) => state.selectedCategory)
    const dispatch = useDispatch()
    return (
        <CatContainer
            selected={data === selectedCategory ? true : false}
            onClick={selectCtegory}
        >
            {data}
            <SelectedDot>{data === selectedCategory && '•'}</SelectedDot>
        </CatContainer>
    )
}
