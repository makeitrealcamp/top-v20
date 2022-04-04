import { useSelector } from 'react-redux';

import Post from './Post'

const List = () => {
  const posts = useSelector(state => state.posts);

  return(
    <div>
      {
        posts.map(post => (
          <Post key={post.id} post={post} />
        ))
      }
    </div>
  )
}

export default List
