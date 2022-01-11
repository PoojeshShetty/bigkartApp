import {useState,useEffect} from 'react'
import { useCartContext } from '../../hooks/useCartContext'
import './Filter.css'

function Filter({propsProducts}) {

    const {sort,cartDispatch, brand:stateBrand, type:stateType} = useCartContext()
    const [brand ,setBrand] = useState([])
    const [type, setType] = useState([])

    useEffect(()=>{
        const getBrands = () => {
            return propsProducts.reduce((acc,product) => {
                if(!acc.includes(product.brand))
                    acc.push(product.brand)
                return acc;
            },[])
        }
        setBrand(getBrands())

        const getTypes = () => {
            return propsProducts.reduce((acc,product) => {
                if(!acc.includes(product.type))
                    acc.push(product.type)
                return acc
            },[])
        }

        setType(getTypes())

    },[propsProducts])

    const handleBrandCheckbox = (brand) =>{
        if(stateBrand.includes(brand))
            cartDispatch({type:'REMOVE_BRAND_NAME',payload: stateBrand.filter(val => val!==brand)})
        else
            cartDispatch({type:'ADD_BRAND_NAME',payload: stateBrand.concat(brand)})
    }

    const handleTypeCheckbox = (type) => {
        if(stateType.includes(type))
            cartDispatch({type:'REMOVE_TYPE_NAME',payload: stateType.filter(val => val!== type)})
        else    
            cartDispatch({type:'ADD_TYPE_NAME',payload: stateType.concat(type)})
    }

    return (
        <div className="filter__container">
            <div className="filter__type">
                <div className="filter__name">
                    Sort
                </div>
                <div className="filter__options">
                    <label htmlFor="radio-1">
                        <input 
                            id="radio-1"
                            type="radio" 
                            checked={sort==='LOW_TO_HIGH'}
                            onChange={()=>cartDispatch({type:'SORT',payload:'LOW_TO_HIGH'})}
                        />
                        <span>Low to High</span>
                    </label>
                    
                    <label htmlFor="radio-2">
                        <input 
                            id="radio-2"
                            type="radio" 
                            checked={sort==='HIGH_TO_LOW'}
                            onChange={()=>cartDispatch({type:'SORT',payload:'HIGH_TO_LOW'})}
                        />
                        <span>High to Low</span>
                    </label>
                    
                </div>
            </div>

            <div className="filter__type">
                <div className="filter__name">
                   Product Type
                </div>
                <div className="filter__options">
                    {type.map(
                        (val,index) => 
                        (<label key={index}>
                            <input 
                                type="checkbox"
                                checked={stateType.includes(val)}
                                onChange={() => handleTypeCheckbox(val)}
                             />
                             {val}
                        </label>)
                    )}
                </div>
            </div>
            
            <div className="filter__type">
                <div className="filter__name">
                   Brand Type
                </div>
                <div className="filter__options">
                    {brand.map(
                        (val,index) => 
                        (<label key={index}>
                            <input 
                                type="checkbox"
                                checked={stateBrand.includes(val)}
                                onChange={() => handleBrandCheckbox(val)}
                             />
                             {val}
                        </label>)
                    )}
                </div>
            </div>
            
        </div>
    )
}

export default Filter
