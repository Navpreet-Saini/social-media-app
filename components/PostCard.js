"use client";
export default function PostCard({ post, onLike }) {
  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <div className="flex items-center mb-2">
        <img
          src={post.author.profile_picture || "/images/default-avatar.png"}
          className="w-10 h-10 rounded-full mr-3"
          alt="Avatar"
        />
        <div>
          <span className="font-bold">{post.author.name}</span>
          <span className="text-gray-500 ml-2">@{post.author.username}</span>
        </div>
      </div>
      <p className="mb-2">{post.content}</p>
      {post.image_url && (
        <img src={post.image_url} className="rounded mb-2 max-h-60" alt="Post" />
      )}
      <button
        onClick={onLike}
        className="flex items-center text-blue-600 hover:text-blue-800"
      >
        <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
        {post.like_count}
      </button>
    </div>
  );
}
