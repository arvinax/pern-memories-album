import * as api from '../api';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    console.log('in delete action', id);
    const deleteposty = await api.deletePost(id);
    dispatch({ type: 'DELETE', payload: id });
    console.log('deleteposty: ', deleteposty);
  } catch (error) {
    console.log(error.message);
  }
};
