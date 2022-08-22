import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { fetchPosts } from '../../api';

const Posts = () => {
  const posts = useSelector((state) => state.posts);

  const classes = useStyles();
  console.log(posts);
  return (
    <>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </>
  );
};

export default Posts;
