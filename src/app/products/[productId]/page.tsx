import { Metadata } from "next"

type Props ={
  params:{
    productId:string;
  }
}
export const generateMetadata =({params}:Props): Metadata =>{
  return{
    title: `Product ${params.productId}`
  }
}





// param props provided by next js to access the productId
const ProductDetails = ({params}:Props) => {
    return (      
      <h1>Product Details {params.productId}</h1>       
    )
  }
  
  export default ProductDetails