import useForm from "../hooks/useForm"

const Form2 = () => {
  const { form, handleFormChange} = useForm({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  }

  return(
    <div>
      <h1>Form2</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Age:
          <input type="number" name="age" onChange={handleFormChange} />
        </label>
        <label>
          password:
          <input type="password" name="password" onChange={handleFormChange}/>
        </label>

        <button type='submit'>Send</button>
      </form>
    </div>
  )
}

export default Form2
