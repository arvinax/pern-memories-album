import React from 'react';
import Post from './Post/Post';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { CircularProgress } from '@material-ui/core';
import { useState, useEffect } from 'react';

const Posts = () => {
  const [isLoading, setIsloading] = useState(false);
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  console.log(posts);
  return (
    <>
      {posts.length !== 0 ? (
        posts.map((post, index) => <Post key={index} post={post} />)
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Posts;
