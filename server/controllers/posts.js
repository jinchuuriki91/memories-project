import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const posts = await PostMessage.find();
    res.status(200).json({ data: posts });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const createPost = async (req, res) => {
  try {
    const postData = req.body;
    const newPost = new PostMessage(postData);
    await newPost.save();
    res.status(201).json({ data: newPost });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};
