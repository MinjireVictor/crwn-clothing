
import './category.styles.scss'
import {useState,useEffect,useContext} from 'react'
import {useParams} from 'react-router-dom'
import { CategoriesContext } from '../../context/categories.context'
import ProductCard from '../../components/product-card/product-card.component'



const Category=()=>{
    const {categoriesMap}=useContext()
    const {category}=useParams()
    const [products, setProducts]=useState([categoriesMap[category]])

    useEffect(()=>{
        setProducts(categoriesMap[category])

    },[category, categoriesMap])

    return(
        <>
        <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            {
                products && products.map((product)=><ProductCard key={product.id} product={product}></ProductCard>)
            }

        </div>
        </>
        
    )
}

export default Category