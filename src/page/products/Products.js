import {useState} from 'react'
import './Products.css'
import Sidebar from '../../component/sidebar/Sidebar'

function Products() {

    const [viewsidebar,setViewSidbar] = useState(false)

    return (
        <div>
            <div className="products__container">
                Products page
                <div className="products__filter">
                    <button onClick={()=>setViewSidbar(true)}>filter</button>
                </div>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt unde explicabo esse eveniet illum molestias fugit facere tenetur, adipisci fugiat quod nulla dolorem optio culpa recusandae quam cumque! Officia, ipsa! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat, maxime ratione? Fugit, sunt ut molestiae nostrum vitae aspernatur et recusandae deserunt cum provident magnam beatae placeat. Unde nulla iste officiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, deleniti, maiores, velit ea at reiciendis nulla quaerat voluptatum dolore ad quod similique nostrum totam est! Ducimus corporis et expedita alias?
                </div>
            </div>

            <Sidebar 
                viewsidebar={viewsidebar} 
                setViewSidebar={setViewSidbar} 
            />

        </div>
    )
}

export default Products
