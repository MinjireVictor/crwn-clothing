import './shop.styles.scss'
import CategoriesPreview from '../category-preview/category-preview-component'
import Category from '../category/category.component'
import {Route,Routes}from 'react-router-dom'

const Shop =()=>{

    return(
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
         
                
        </Routes>
    )
  
                
}

export default Shop