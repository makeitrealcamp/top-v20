import { useDispatch } from "react-redux"

import { removePost } from '../store/actions';

const Post = ({post}) => {
  const dispatch =  useDispatch();

  const handleRemove = () => {
    dispatch(removePost(post.id))
  }

  return(
    <div>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div style={{ display: 'flex'}}>
        <button onClick={handleRemove}>Eliminar</button>
        <button>Editar</button>
      </div>
    </div>
  )
}

export default Post
