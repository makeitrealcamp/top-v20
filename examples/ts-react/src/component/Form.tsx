import React, { FC, FormEvent, SyntheticEvent,useState } from 'react'

type FormTypes = {
  comment: string
  country: string
  age: number
}

const INITIAL_STATE: FormTypes = {
  comment: '',
  country: '',
  age: 0
}

const Form: FC = () => {
  const [form, setForm] = useState<FormTypes>(INITIAL_STATE)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('submit')
  }

  const handleChange = (e: SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement
    setForm({
      ...form,
      [name]: value
    })
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <textarea name="comment" id="" cols={30} rows={10} onChange={handleChange} />
        <select name="country" onChange={handleChange}>
          <option value="">Selecciona un pais</option>
          <option value="AR">Argentina</option>
          <option value="BR">Brasil</option>
          <option value="CO">Colombia</option>
        </select>
        <button type="submit">
          Send
        </button>
      </form>

      <pre>
        {JSON.stringify(form, null, 2)}
      </pre>

      <p>
        {form.comment}
      </p>
      <p>
        {form.country}
      </p>
    </div>
  )
}

export default Form
