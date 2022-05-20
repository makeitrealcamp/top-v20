import React from 'react'
import { useEffect, useState } from 'react'

const ProductsPage = (props) => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('/api/users')
      .then(response => response.json())
      .then(users => setUsers(users))
  }, [])

  return(
    <div>
      Index de productos
      <ul>
        {users.map(user => (<li key={user?.id}>{user?.name}</li>))}
      </ul>

    </div>
  )
}

export default ProductsPage
