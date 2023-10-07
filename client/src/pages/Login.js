import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      setError(null);

      const response = await fetch("http://localhost:8000/api/login", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      navigate("/")

      if (!response.ok) {
        setError(data.message);
      } else if (data.success === false) {
        setError(data.message);
      } 
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-center text-[20px] font-bold p-3">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          className="border p-2 rounded-lg"
          value={formData.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          className="border p-2 rounded-lg"
          value={formData.password}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="border p-2 rounded-lg bg-slate-700 text-white disabled:opacity-80"
          disabled={loading}
        >
          {loading ? "Loading...." : "Log in"}
        </button>
      </form>
      {error && <p className="text-red-600 mt-2">{error}</p>}
      <p className="flex gap-2 mt-2">
        Do not have an account?
        <Link to="/signup" className="text-blue-600">
          {" "}
          SignUp
        </Link>
      </p>
    </div>
  );
}

export default Login;
