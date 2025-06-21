"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Signup failed");
      } else {
        setSuccess("Signup successful! Redirecting to login...");
        setTimeout(() => router.push("/auth/login"), 1500);
      }
    } catch (err) {
      setError("Signup failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Sign Up</h2>
        <input
          className="input mb-3"
          name="name"
          type="text"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <input
          className="input mb-3"
          name="username"
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <input
          className="input mb-3"
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          autoComplete="off"
        />
        <input
          className="input mb-4"
          name="password"
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
          minLength={6}
          autoComplete="off"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition mb-2"
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>
        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
        {success && <div className="text-green-600 text-center mb-2">{success}</div>}
        <div className="text-center text-sm mt-2">
          Already have an account?{" "}
          <a href="/auth/login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </div>
      </form>
      <style jsx>{`
        .input {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.5rem;
          border: 1px solid #d1d5db;
          outline: none;
          font-size: 1rem;
          transition: border 0.2s;
        }
        .input:focus {
          border-color: #2563eb;
        }
      `}</style>
    </main>
  );
}
