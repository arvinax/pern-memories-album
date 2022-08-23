import React from 'react';
import useStyles from './styles';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

const Post = (post) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(deletePost(post.post.id));
  };
  return (
    <div className={`${classes.app}`}>
      <hr />
      <h1>name: {post.post.title}</h1>
      <h1>author: {post.post.creator}</h1>
      <h1>text: {post.post.message}</h1>
      <h1>tags: {post.post.tags[0]}</h1>
      <h1>likes: {post.post.likeCount}</h1>
      <button onClick={handleRemove}>delete</button>
      <hr />
    </div>
  );
};

export default Post;
