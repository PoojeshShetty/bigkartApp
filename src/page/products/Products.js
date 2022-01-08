import {useState} from 'react'
import './Products.css'
import Sidebar from '../../component/sidebar/Sidebar'
import Product from '../../component/product/Product'
import Filter from '../../component/filter/Filter'
import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const initialProductList = [
    {
        id:1,
        image: 'https://media.pendleton-usa.com/image/list/$i_!sfcc-is-main:True!/fn_edge:join/f_auto,q_auto,dpr_3.0/w_400,c_scale/51142-32417?_s=RAABAB0',
        name: 'Shirt checks',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike'
    },
    {
        id:2,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuUyuCZVg7kDih5_l8XdjZvf5JyBgN9LnoIqgItrsIznH_FAiLlmuUmE-gTntW8fvGnk93ZEEooXg&usqp=CAc',
        name: 'shoes',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike'
    },
    {
        id:3,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48WNwBqkMVGG9wn210I3x_jb-bGj6Avcb9A&usqp=CAU',
        name: 'Jeans',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike'
    },
    {
        id:4,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_2vUHKhgqBJQhEvxzaRVXIgagqVQC9jczHw&usqp=CAU',
        name: 'Jeans',
        gender: 'male',
        cost: '2300',
        status: 'available',
        brand: 'Nike'
    },
    {
        id:5,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHPqjcCePcPzasbKQmWOrfPdzoX7nDI0W3Ig&usqp=CAU',
        name: 'Shirt checks',
        gender: 'male',
        cost: '3000',
        status: 'available',
        brand: 'Allen Solley'
    },
    {
        id:6,
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTyhhnCVcJL0WQm9Nhk0ongcpCk5UdhaPSH23YwtBVbSQ-ZZRBrCMJXdgZpa-qK_DuxE4hjWy6XUWQ00e0Gm7MZGeyJP1MK6yzyk6Xk3Vw&usqp=CAY',
        name: 'Watches',
        gender: 'male',
        cost: '1500',
        status: 'available',
        brand: 'Sonata'
    }

]

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
                    {initialProductList.map(product => 
                    
                        <Product propsProduct={product}
                            key={product.id} />
                    
                    )
                    
                    }
                
                </div>
            </div>

            <Sidebar 
                viewsidebar={viewsidebar} 
                setViewSidebar={setViewSidbar} 
            >
                <Filter />
            </Sidebar>

            <br />

        </div>
    )
}

export default Products
