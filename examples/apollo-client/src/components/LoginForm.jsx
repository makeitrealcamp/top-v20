import { useEffect, useState } from "react";
import { gql, useMutation } from '@apollo/client'

const LOG_IN = gql`
  mutation LogIn($username: ID! $password: String!) {
    logIn(username:$username password:$password) {
      token
      customer {
        name
      }
    }
  }
`

const LoginForm = () => {
  const [form, setForm] = useState("");
  const [loginAccount, {data, loading, error}]= useMutation(LOG_IN);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    loginAccount({ variables: form });
  }

  useEffect(() => {
    if (data) {
      localStorage.setItem('token', data.logIn.token);
      alert('You are logged in!')
    }
  }, [data])

  if (loading) return <p>Submitting...</p>
  if (error) return <p>Error :(</p>

  return (
    <div className="register-form">
      <h3>Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" className="form-control" name="username" onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" name="password" onChange={handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginForm
