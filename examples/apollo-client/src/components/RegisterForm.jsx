import { useEffect, useState } from 'react';
import { useMutation, gql } from "@apollo/client";

const CREATE_ACCOUNT = gql`
  mutation CreateAccount($inputData: CreateAccountInput!) {
    createAccount(input: $inputData) {
      username
      name
      dateCreated
    }
  }
`

const RegisterForm = (props) => {
  const [form, setForm] = useState(null)
  const [createAccount, { data, loading, error }] = useMutation(CREATE_ACCOUNT)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      const variables = {
        inputData: form
      }
      createAccount({ variables })
      setForm(null)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (data) {
      alert(`${data.createAccount.name} has been created!`)
    }
  }, [data])

  return(
    <div className="form-container">
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  )
}

export default RegisterForm
