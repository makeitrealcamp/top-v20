import { useEffect, useState } from 'react'

const Login = (props) => {
  const [form, setForm] = useState(null);
  const [showForm, setShowForm] = useState(true);

  const handleInputChange = (evt) => {
    const val = evt.target.value;
    setForm({
      ...form,
      [evt.target.name]: val,
    });
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      const response = await fetch('https://top-v20-backend.herokuapp.com/auth/local/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const token = await response.json();
      localStorage.setItem('token', token);
      setShowForm(false);
    } catch (error) {
      console.log(error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token');
    setShowForm(true);
  }

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setShowForm(false);
    }
  }, [])

  return(
    <div>
      {
        showForm ? (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email"
              placeholder='Enter an email'
              onChange={handleInputChange}
            />
            <br />
            <input
              type="password"
              name="password"
              placeholder='Enter a password'
              onChange={handleInputChange}
            />
            <br />
            <button type='submit'>
              Login
            </button>
          </form>
        ) : (
          <div>
            <h1>Welcome to your todo list </h1>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )
      }
    </div>
  )
}

export default Login
