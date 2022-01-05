import {useState} from 'react'
import './Products.css'
import Sidebar from '../../component/sidebar/Sidebar'
import Product from '../../component/product/Product'

function Products() {

    const [viewsidebar,setViewSidbar] = useState(false)

    return (
        <div>
            <div className="products__container">
                <div className="products__title">
                    Products
                </div>
                <div className="products__filter">
                    <button onClick={()=>setViewSidbar(true)}>filter</button>
                </div>
                
                <div className="products__list">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                </div>
            </div>

            <Sidebar 
                viewsidebar={viewsidebar} 
                setViewSidebar={setViewSidbar} 
            />

            <br />

        </div>
    )
}

export default Products
