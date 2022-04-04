import  {
  SET_POSTS,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST,
  GET_SINGLE_POST,
  TOGGLE_LIST
} from './types';

import {
  getPosts,
  createPost as registerPost,
  deletePost as dropPost,
} from '../services/posts';

// Actions Creators
export const addPost = (post) => ({ type: ADD_POST, payload: post })
export const deletePost = (id) => ({ type: DELETE_POST, payload: id })
export const editPost = (post) => ({ type: UPDATE_POST, payload: post })
export const setPosts = (posts) => ({ type: SET_POSTS, payload: posts })
export const getSinglePost = (id) => ({ type: GET_SINGLE_POST, payload: id })
export const togleeList = () => ({ type: TOGGLE_LIST })


export const fetchPosts = () => async (dispatch) => {
  try {
    const posts = await getPosts();
    dispatch(setPosts(posts));
  } catch (error) {
    // TODO: handle error
  }
}


export const createPost = (post) => async (dispatch) => {
  try {
    const postCreated = await registerPost(post);
    dispatch(addPost(postCreated));
  } catch (error) {

  }
}

// ELIMINAR UN POST
// 1. LLamar al servicio q elimina el post con el id

// redux-thunk
// 1. crear la accion
// 2. llamar al servicio
// 3. llamar al reducer por medio del dispatch
// 4. ir al componente y la lanzar la accion  (dispatch)
// 5. ir al reducer y crear el CASE correspondiente a la accion/type
export const removePost = (id) => async (dispatch) => {
  try {
    await dropPost(id);
    dispatch(deletePost(id));
  } catch (error) {

  }
}
