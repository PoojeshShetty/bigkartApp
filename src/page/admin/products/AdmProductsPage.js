import React from 'react'
import AdmProduct from '../../../component/adminproduct/AdmProduct'
import './AdmProductsPage.css'

function AdmProductsPage() {
    return (
        <div className="admproducts__container">
            <div className="admproducts__title">
                Products
            </div>
                
                <div className="admproducts__list">
                    <AdmProduct />
                    <AdmProduct />
                    <AdmProduct />
                    <AdmProduct />
                    <AdmProduct />
                    <AdmProduct />
                    <AdmProduct />
                    <AdmProduct />
                    
                </div>
        </div>
    )
}

export default AdmProductsPage
