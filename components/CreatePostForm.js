"use client";
import { useState } from "react";

export default function CreatePostForm({ onCreate }) {
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <form
      className="bg-white p-4 rounded shadow mb-4"
      onSubmit={e => {
        e.preventDefault();
        onCreate({ content, image_url: imageUrl });
        setContent("");
        setImageUrl("");
      }}
    >
      <textarea
        className="input mb-2"
        placeholder="What's on your mind?"
        value={content}
        onChange={e => setContent(e.target.value)}
        required
      />
      <input
        className="input mb-2"
        placeholder="Image URL (optional)"
        value={imageUrl}
        onChange={e => setImageUrl(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Post
      </button>
    </form>
  );
}
