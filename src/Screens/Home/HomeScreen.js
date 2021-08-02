import React from 'react'
import { useSelector } from 'react-redux'
import { GlobalStyle, Heading, HomeContainer, DataContainer, CategoryContainer, StoreContainer } from './HomeStyle'
import CategoryBar from 'Components/CategoryBar'
import Product from 'Components/Product'

export default function HomeScreen() {
    const allNames = useSelector((state) => state.allCategories)
    const allData = useSelector((state) => state.allData)
    const selectedCategory = useSelector((state) => state.selectedCategory)
    let selectedData

    if (selectedCategory === 'All') {
        selectedData = allData
    }
    else {
        selectedData = allData.filter(x => x.category === selectedCategory)
    }

    const RenderCategoryTab = () => {
        return allNames.map((item, index) => {
            return <CategoryBar key={'CategoryKey-' + index} data={item} index={index} />
        })
    }

    const RenderData = () => {
        return selectedData.map((itemOne) => {
            return itemOne.items.map((itemTwo, indexTwo) => {
                return <Product key={itemTwo.name + indexTwo} data={itemTwo} index={indexTwo} />
            })
        })
    }

    return (
        <HomeContainer>
            <GlobalStyle />
            <Heading>Discover the best</Heading>
            <DataContainer>
                <CategoryContainer>
                    <RenderCategoryTab />
                </CategoryContainer>
                <StoreContainer>
                    <RenderData />
                </StoreContainer>
            </DataContainer>
        </HomeContainer>
    )
}
