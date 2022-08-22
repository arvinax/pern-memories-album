import React from 'react';
import useStyles from './styles';

const Post = (post) => {
  const classes = useStyles();

  return <h1>{post.post.id}</h1>;
};

export default Post;
