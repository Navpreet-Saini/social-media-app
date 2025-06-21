"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, update } = useSession();
  const [profile, setProfile] = useState({
    name: session?.user?.name || "",
    username: session?.user?.username || "",
    bio: "", // You might want to fetch this from your API if not in session
    profile_picture: session?.user?.profile_picture || "",
  });
  const [avatarFile, setAvatarFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleAvatarChange = (e) => {
    setAvatarFile(e.target.files[0]);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    let avatarUrl = profile.profile_picture;

    if (avatarFile) {
      setUploading(true);
      const formData = new FormData();
      formData.append("file", avatarFile);
      const res = await fetch("/api/avatar", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      avatarUrl = data.url;
      setUploading(false);
    }

    // Save profile to backend
    await fetch("/api/profile", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...profile,
        profile_picture: avatarUrl,
      }),
    });

    // Update session with new info
    await update({
      name: profile.name,
      username: profile.username,
      profile_picture: avatarUrl,
    });

    alert("Profile saved!");
  };

  return (
    <form onSubmit={handleSave} className="max-w-md mx-auto bg-white p-6 rounded shadow mt-10">
      <div className="flex items-center mb-4">
        <img
          src={
            avatarFile
              ? URL.createObjectURL(avatarFile)
              : profile.profile_picture ||
                `https://api.dicebear.com/7.x/identicon/svg?seed=${profile.username}`
          }
          alt="avatar"
          className="w-16 h-16 rounded-full mr-4 border"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="block"
        />
      </div>
      <input
        className="input mb-2"
        value={profile.name}
        onChange={e => setProfile({ ...profile, name: e.target.value })}
        placeholder="Name"
        required
      />
      <input
        className="input mb-2"
        value={profile.username}
        onChange={e => setProfile({ ...profile, username: e.target.value })}
        placeholder="Username"
        required
      />
      <textarea
        className="input mb-2"
        value={profile.bio}
        onChange={e => setProfile({ ...profile, bio: e.target.value })}
        placeholder="Bio"
      />
      <button
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        disabled={uploading}
      >
        {uploading ? "Uploading..." : "Save"}
      </button>
    </form>
  );
}
