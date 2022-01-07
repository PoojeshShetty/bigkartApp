import {useState} from 'react'
import './AdmEditProductPage.css'

function AdmEditProductPage() {
    
    const [name, setName] = useState('name')
    const [brand, setBrand] = useState('brand')
    const [type, setType] = useState('shirt')
    const [description, setDescription] = useState('kahsdflaksjfdlkf')
    const [imgurl, setImgUrl] = useState('https://aldsflasjdfkl.com')
    const [price, setPrice] = useState('2433')

    return (
        <div className="admEditProduct__container">
            <span className="title">Edit product</span>
            
            <form className="admEditProduct__form">
                <div className="form__controle">
                    <span>Name</span>
                    <input 
                        type="text" 
                        value={name}
                        onChange={({target}) => setName(target.value)}
                        required
                    />
                </div>
                <div className="form__controle">
                    <span>Brand</span>
                    <input 
                        type="text" 
                        value={brand}
                        onChange={({target}) => setBrand(target.value)}
                        required
                    />
                </div>
                <div className="form__controle">
                    <span>Type</span>
                    <input 
                        type="text" 
                        value={type}
                        onChange={({target}) => setType(target.value)}
                        required
                    />
                </div>
                <div className="form__controle">
                    <span>Description</span>
                    <textarea 
                        rows="5"
                        value={description} 
                        onChange={({target}) => setDescription(target.value)}
                        required
                    />
                </div>
                <div className="form__controle">
                    <span>Image Url</span>
                    <input 
                        type="text" 
                        value={imgurl}
                        onChange={({target}) => setImgUrl(target.value)}
                    />
                </div>
                <div className="form__controle">
                    <span>Price</span>
                    <input 
                        type="number" 
                        value={price}
                        onChange={({target}) => setPrice(target.value)}
                    />
                </div>

                <button className='btn btn--black'>Submit</button>
            </form>
            
            
        </div>
    )
}

export default AdmEditProductPage
