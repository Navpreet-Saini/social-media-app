"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", {
      ...form,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      setError(res.error === "CredentialsSignin"
        ? "Invalid email or password"
        : res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow max-w-md w-full"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-blue-700">Login</h2>
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
          autoComplete="off"
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition mb-2"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Log In"}
        </button>
        {error && <div className="text-red-500 text-center mb-2">{error}</div>}
        <div className="text-center text-sm mt-2">
          Don&apos;t have an account?{" "}
          <a href="/auth/signup" className="text-blue-600 hover:underline">
            Sign up
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
