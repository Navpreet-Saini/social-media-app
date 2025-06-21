import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  comment: String,
  author: String,
  createdAt: { type: Date, default: Date.now },
});

const PostSchema = new mongoose.Schema({
  content: String,
  image_url: String,
  like_count: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  author: String,
  comments: [CommentSchema], // <--- This is crucial!
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
