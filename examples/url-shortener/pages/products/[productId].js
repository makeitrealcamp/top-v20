import React from 'react'
import { useEffect } from 'react'

const ProductsPage = (props) => {
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => console.log(users))
  }, [])

  return(
    <div>
      Product {props?.productId}
    </div>
  )
}

export function getServerSideProps({ params }) {
  return {
    props: {
      productId: params.productId
    }
  }
}

export default ProductsPage
