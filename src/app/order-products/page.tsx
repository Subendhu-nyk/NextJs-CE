'use client'
import { useRouter } from "next/navigation"

const OrderProduct = () => {
    const router= useRouter()
    const handleClick =()=>{
        console.log("placing Order")
        router.push('/')
        // router.back() -it will navigate back to the previous page in the browser's history stack
        //route.forward()- it will navigate to the next page 
    }
  return (
    <>
    <h1>OrderProduct</h1>
    <button onClick={handleClick}>Place Order</button>
    </>
    
  )
}

export default OrderProduct