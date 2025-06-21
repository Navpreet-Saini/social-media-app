"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // States for post creation
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [postImageFile, setPostImageFile] = useState(null);

  // States for posts and loading
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // States for feedback
  const [postError, setPostError] = useState("");
  const [postSuccess, setPostSuccess] = useState("");

  // States for comments
  const [commentInputs, setCommentInputs] = useState({});
  const [comments, setComments] = useState({});

  // States for editing posts
  const [editingPostId, setEditingPostId] = useState(null);
  const [editContent, setEditContent] = useState("");
  const [editImageUrl, setEditImageUrl] = useState("");

  // Redirect guests to login
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/auth/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div className="text-center py-10">Loading...</div>;
  }

  if (!session) {
    // Optionally, render nothing or a spinner while redirecting
    return null;
  }

  // Fetch posts from API on load
  useEffect(() => {
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      });
  }, []);

  // Post creation
  const handleCreatePost = async (e) => {
    e.preventDefault();
    setPostError(""); setPostSuccess("");
    let imageUrlToSend = imageUrl;

    try {
      if (postImageFile) {
        const formData = new FormData();
        formData.append("file", postImageFile);
        const res = await fetch("/api/post-image", { method: "POST", body: formData });
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Image upload failed");
        imageUrlToSend = data.url;
      }

      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content,
          image_url: imageUrlToSend,
          author: session.user.username,
        }),
      });

      if (res.ok) {
        const newPost = await res.json();
        setPosts([newPost, ...posts]);
        setContent("");
        setImageUrl("");
        setPostImageFile(null);
        setPostSuccess("Post created!");
      } else {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || "Failed to create post.");
      }
    } catch (err) {
      setPostError(err.message);
    }
  };

  // Like post handler
  const handleLike = async (id) => {
    const res = await fetch(`/api/posts/${id}/like`, { method: "POST" });
    if (res.ok) {
      const updated = await res.json();
      setPosts(posts =>
        posts.map(p => p._id === id ? updated : p)
      );
    }
  };

  // Comments
  const handleCommentChange = (postId, value) => {
    setCommentInputs(inputs => ({ ...inputs, [postId]: value }));
  };

  const handleAddComment = async (postId) => {
    const comment = commentInputs[postId];
    if (!comment) return;
    const res = await fetch(`/api/posts/${postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment, author: session.user.username }),
    });
    if (res.ok) {
      const updatedPost = await res.json();
      setComments(c => ({ ...c, [postId]: updatedPost.comments }));
      setCommentInputs(inputs => ({ ...inputs, [postId]: "" }));
      setPosts(posts =>
        posts.map(p => p._id === postId ? { ...p, comments: updatedPost.comments } : p)
      );
    }
  };

  // Edit/Delete
  const handleEdit = (post) => {
    setEditingPostId(post._id);
    setEditContent(post.content);
    setEditImageUrl(post.image_url);
  };

  const handleEditSubmit = async (e, postId) => {
    e.preventDefault();
    const res = await fetch(`/api/posts/${postId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: editContent, image_url: editImageUrl }),
    });
    const updated = await res.json();
    setPosts(posts => posts.map(p => p._id === postId ? updated : p));
    setEditingPostId(null);
  };

  const handleDelete = async (postId) => {
    await fetch(`/api/posts/${postId}`, { method: "DELETE" });
    setPosts(posts => posts.filter(p => p._id !== postId));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 dark:bg-gray-900 py-8">
      <div className="max-w-xl w-full mx-auto px-2 sm:px-0">
        {/* App Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-blue-700 dark:text-blue-200 mb-2">
            Social Media App
          </h1>
          <p className="text-gray-500 dark:text-gray-300">
            Connect, share, and react with your friends!
          </p>
        </header>

        {/* Post Form for Logged-in Users */}
        <form
          onSubmit={handleCreatePost}
          className="bg-white dark:bg-gray-800 rounded-xl shadow p-5 mb-8"
          aria-label="Create a new post"
        >
          <textarea
            className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-100"
            placeholder="What's on your mind?"
            value={content}
            onChange={e => setContent(e.target.value)}
            rows={3}
            required
            aria-label="Post content"
          />
          <input
            className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-700 dark:text-gray-100"
            placeholder="Image URL (optional)"
            value={imageUrl}
            onChange={e => setImageUrl(e.target.value)}
            aria-label="Image URL"
          />
          <input
            type="file"
            accept="image/*"
            onChange={e => setPostImageFile(e.target.files[0])}
            className="w-full border border-gray-300 dark:border-gray-700 rounded p-2 mb-2"
            aria-label="Upload image"
          />
          {postError && <div className="text-red-500 mb-2">{postError}</div>}
          {postSuccess && <div className="text-green-600 mb-2">{postSuccess}</div>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
          >
            Post
          </button>
        </form>

        {/* Feed */}
        <section>
          {loading ? (
            <div className="flex justify-center py-8">
              <svg className="animate-spin h-8 w-8 text-blue-600" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
              </svg>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center text-gray-400 dark:text-gray-300">No posts yet. Be the first to post!</div>
          ) : (
            posts.map(post => (
              <div
                key={post._id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow mb-6 p-5 transition hover:shadow-lg"
              >
                {editingPostId === post._id ? (
                  <form onSubmit={e => handleEditSubmit(e, post._id)}>
                    <textarea
                      value={editContent}
                      onChange={e => setEditContent(e.target.value)}
                      className="w-full border rounded mb-2 dark:bg-gray-700 dark:text-gray-100"
                    />
                    <input
                      value={editImageUrl}
                      onChange={e => setEditImageUrl(e.target.value)}
                      className="w-full border rounded mb-2 dark:bg-gray-700 dark:text-gray-100"
                    />
                    <button type="submit" className="bg-green-500 text-white px-2 py-1 rounded mr-2">Save</button>
                    <button type="button" onClick={() => setEditingPostId(null)} className="bg-gray-300 px-2 py-1 rounded">Cancel</button>
                  </form>
                ) : (
                  <>
                    <div className="mb-2 text-gray-700 dark:text-gray-100 text-lg">{post.content}</div>
                    {post.image_url && (
                      <img
                        src={post.image_url}
                        alt="post"
                        className="rounded-lg mb-2 max-h-64 object-cover w-full border"
                      />
                    )}
                    <div className="flex items-center justify-between">
                      <button
                        aria-label="Like post"
                        onClick={() => handleLike(post._id)}
                        className="flex items-center text-blue-600 hover:text-blue-800 font-semibold transition"
                      >
                        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                        </svg>
                        {post.like_count}
                      </button>
                      <span className="text-gray-400 dark:text-gray-300 text-sm">
                        {new Date(post.createdAt).toLocaleString()}
                      </span>
                      {session && post.author && session.user?.username === post.author && (
                        <div className="flex gap-2">
                          <button onClick={() => handleEdit(post)} className="text-yellow-600">Edit</button>
                          <button onClick={() => handleDelete(post._id)} className="text-red-600">Delete</button>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {/* Comments */}
                <div className="mt-2">
                  <input
                    value={commentInputs[post._id] || ""}
                    onChange={e => handleCommentChange(post._id, e.target.value)}
                    placeholder="Add a comment..."
                    className="border rounded p-1 w-2/3 mr-2 dark:bg-gray-700 dark:text-gray-100"
                  />
                  <button
                    onClick={() => handleAddComment(post._id)}
                    className="bg-blue-500 text-white px-2 py-1 rounded"
                  >
                    Comment
                  </button>
                  <div className="mt-2 space-y-1">
                    {(comments[post._id] || post.comments || []).map((c, idx) => (
                      <div key={idx} className="text-sm text-gray-700 dark:text-gray-100">
                        <b>{c.author}:</b> {c.comment}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </section>
      </div>
    </main>
  );
}
