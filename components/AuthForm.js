"use client";
import { useState } from "react";

export default function AuthForm({ type = "login", onSubmit }) {
  const [form, setForm] = useState({ email: "", password: "", username: "", name: "" });

  return (
    <form
      className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto mt-10 space-y-4"
      onSubmit={e => {
        e.preventDefault();
        onSubmit(form);
      }}
    >
      <h2 className="text-2xl font-bold mb-4">{type === "signup" ? "Sign Up" : "Login"}</h2>
      {type === "signup" && (
        <>
          <input
            className="input"
            placeholder="Username"
            value={form.username}
            onChange={e => setForm({ ...form, username: e.target.value })}
            required
          />
          <input
            className="input"
            placeholder="Name"
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
            required
          />
        </>
      )}
      <input
        className="input"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={e => setForm({ ...form, email: e.target.value })}
        required
      />
      <input
        className="input"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={e => setForm({ ...form, password: e.target.value })}
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {type === "signup" ? "Sign Up" : "Login"}
      </button>
    </form>
  );
}
