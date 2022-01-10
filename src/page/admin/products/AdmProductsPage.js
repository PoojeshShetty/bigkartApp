import {useEffect} from 'react'
import { useState } from 'react/cjs/react.development'
import AdmProduct from '../../../component/adminproduct/AdmProduct'
import { projectFirestore } from '../../../config/firebase'
import './AdmProductsPage.css'
import Loading from '../../../component/loading/Loading'

function AdmProductsPage() {

    const [products,setProducts] = useState(null)
    
    useEffect(()=>{

        const getProducts = async () => {
            const docs = await projectFirestore.collection('products').get()

            let result = []
            docs.forEach(doc => result.push({id:doc.id,...doc.data()}))
            setProducts(result)
        }
        getProducts()
    },[])

    if(!products)
    return (
        <Loading />
    )
    
    
    return (
        <div className="admproducts__container">
            <div className="admproducts__title">
                Products
            </div>
                
                <div className="admproducts__list">
                    {
                        products.map(product => <AdmProduct propsProduct={product} key={product.id} />)
                    }     
                </div>


        </div>
    )
}

export default AdmProductsPage
