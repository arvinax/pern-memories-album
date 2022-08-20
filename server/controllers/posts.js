import PostMessage from '../models/postMessage.js';
import prisma from '../prisma/client.js';
// get all posts
export const getPosts = async (req, res) => {
  try {
    const postMessages = await prisma.posts.findMany();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// create post
export const createPost = async (req, res) => {
  const post = req.body;

  const newPost = await prisma.posts.create({
    data: {
      title: post.title,
      message: post.message,
      creator: post.creator,
      selectedFile: post.selectedFile,
      tags: post.tags,
      likeCount: post.likeCount,
      createdAt: post.createdAt,
    },
  });
  try {
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// get single post
export const getPost = async (req, res) => {
  const { id } = req.body;
  try {
    const post = await prisma.posts.findUnique({
      where: {
        id: id,
      },
    });
    res.status(200).json(post);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

// delete post
export const deletePost = async (req, res) => {
  const { id } = req.body;

  try {
    const deletePost = await prisma.posts.delete({
      where: {
        id: id,
      },
    });
    res.json(deletePost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  try {
  } catch (error) {}
};
