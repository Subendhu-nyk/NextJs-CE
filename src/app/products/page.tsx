import Link from "next/link"

const ProductList = () => {
  const productId=100
  return (
    <>
    <Link href='/'>Home</Link>
    <h1>ProductList</h1>
    <h2><Link href='/products/1'>Product 1</Link></h2>
    <h2><Link href='/products/2'>Product 2</Link></h2>    
    <h2><Link href='/products/3' replace>Product 3</Link></h2>
    <h2><Link href={`/products/${productId}`}>Product {productId}</Link></h2>
    </>
    // replace:replace prop replaces the current history state instead of adding a new URL to this stag this some thing 
  )
}

export default ProductList