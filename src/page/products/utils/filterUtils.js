

const sortProductList = (productList,sort) => {

    if(sort==='LOW_TO_HIGH')
        return productList.sort((a,b) => a.cost - b.cost)

    if(sort==='HIGH_TO_LOW')
        return productList.sort((a,b) => b.cost - a.cost)

    return productList
}

const brandProductFilter = (productList,brand) => {

    if(brand.length === 0)
      return productList
    
    return productList.reduce((acc,product) => {
        if(brand.includes(product.brand))
            acc.push(product)
        return acc
    },[])
}

const typeProductFilter = (productList,type) => {

    if(type.length === 0)
      return productList
    
    return productList.reduce((acc,product) => {
        if(type.includes(product.type))
            acc.push(product)
        return acc
    },[])
}

export {
    sortProductList,
    brandProductFilter,
    typeProductFilter
}
