// param props provided by next js to access the productId
const ProductDetails = ({params}:{params:{productId:string}}) => {
    return (      
      <h1>Product Details {params.productId}</h1>       
    )
  }
  
  export default ProductDetails