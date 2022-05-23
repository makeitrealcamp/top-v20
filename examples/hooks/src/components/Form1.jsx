import useForm from "../hooks/useForm"

import { useTheme } from "./ThemeContext";

const Form1 = () => {
  const { theme } = useTheme();
  const { form, handleFormChange} = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return(
    <div className={theme === 'light' ? 'container-light' : 'container-dark'}>
      <h1>Form1</h1>

      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" onChange={handleFormChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" onChange={handleFormChange} />
        </label>

        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Form1
