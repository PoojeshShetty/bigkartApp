import {useState,useEffect} from 'react'
import './Products.css'
import Sidebar from '../../component/sidebar/Sidebar'
import Product from '../../component/product/Product'
import Filter from '../../component/filter/Filter'
import Loading from '../../component/loading/Loading'
import { useCartContext } from '../../hooks/useCartContext'
import { sortProductList, brandProductFilter, typeProductFilter } from './utils/filterUtils'
import {projectFirestore} from '../../config/firebase'

function Products() {

    const [viewsidebar,setViewSidbar] = useState(false)
    const {sort,brand,type} = useCartContext()
    const [products,setProducts] = useState(null)
    
    useEffect(()=>{

        const getProducts = async () => {
            const res = await projectFirestore.collection('products').get()
            let result = []
            res.docs.forEach(doc => result.push({id:doc.id,...doc.data()}))
            setProducts(result)
        }

        getProducts()

    },[])

    if(!products)
    return(
        <Loading />
    )

    let productList = products
    productList = sortProductList(products,sort)
    productList = brandProductFilter(productList,brand)
    productList = typeProductFilter(productList,type)

    return (
        <div>
            <div className="products__container">
                <div className="products__title">
                    Products
                </div>
                <div className="products__filter">
                    <button className="btn btn--black" 
                        onClick={()=>setViewSidbar(true)}>Filter</button>
                </div>
                
                <div className="products__list">

                    {productList.map(product => 
                    
                        <Product propsProduct={product}
                            key={product.id} />
                    
                    )}
                
                </div>
            </div>

            <Sidebar 
                viewsidebar={viewsidebar} 
                setViewSidebar={setViewSidbar} 
            >
                <Filter propsProducts={products}/>
            </Sidebar>

            <br />

        </div>
    )
}

export default Products
