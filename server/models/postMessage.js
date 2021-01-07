import mongoose from "mongoose";

// First create a schema
const schema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likes: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Create a model
const PostMessage = mongoose.model("PostMessage", schema);

// then export it
export default PostMessage;
