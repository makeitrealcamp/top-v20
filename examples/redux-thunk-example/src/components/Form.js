import { useDispatch } from "react-redux"

import { createPost } from '../store/actions'

const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('submit')
    const post = {
      title: e.target.title.value,
      body: e.target.body.value
    }
    dispatch(createPost(post))
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <label>
            Title:
            <br />
            <input type="text" name="title" placeholder='Enter Title' required />
          </label>
        </div>
        <div className="field">
          <label>
            Body:
            <br />
            <textarea name="body"  cols="30" rows="10" placeholder='Enter content' required/>
          </label>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form
