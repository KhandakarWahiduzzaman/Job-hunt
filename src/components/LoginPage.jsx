import React, { useState } from "react";

const LoginPage = ({ onLogin }) => {
    const [form, setForm] = useState({
      username: "",
      password: "",
      role: "student", // default role
    });
  
    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      // Dummy login logic (replace with real auth later)
      if (
        (form.username === "admin" && form.password === "admin123") ||
        (form.username === "student" && form.password === "student123")
      ) {
        onLogin(form.role); // pass role back to App
      } else {
        alert("Invalid credentials");
      }
    };
  
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
  
          <input
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
  
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
            required
          />
  
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            className="w-full mb-4 p-2 border rounded"
          >
            <option value="student">Student</option>
            <option value="counselor">Career Counselor</option>
          </select>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    );
  };

  export default LoginPage;

  