// param props provided by next js to access the productId
const ReviewDetail = ({params}:{params:{productId:string; reviewId:string}}) => {
    return (      
      <h1>Review {params.reviewId} for product {params.productId}</h1>       
    )
  }
  
  export default ReviewDetail