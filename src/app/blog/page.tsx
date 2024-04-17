import { Metadata } from "next"

// for template meta data 
// export const metadata:Metadata={
//   title:'Blog',
// }

// for absolute meta data 
export const metadata:Metadata={
  title:{
    absolute:"Blog"
  }
}


const Blog = () => {
  return (
    <h1>My Blog</h1>
  )
}

export default Blog