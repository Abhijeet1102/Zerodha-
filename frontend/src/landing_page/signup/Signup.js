import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await fetch("http://localhost:3002/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setMessage(data.message + " You can now login to the dashboard.");
        setFormData({ username: "", email: "", password: "" });
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Network error. Make sure your MongoDB and Backend are running.");
    }
  };

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-5">
          <div className="card shadow-sm border-0 mt-5">
            <div className="card-body p-5">
              <h2 className="text-center mb-4" style={{ color: "#424242", fontWeight: "500" }}>
                Signup now
              </h2>
              <p className="text-muted text-center mb-4">
                Or track your existing application.
              </p>

              {message && <div className="alert alert-success">{message}</div>}
              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label text-muted">Username</label>
                  <input
                    type="text"
                    className="form-control"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label text-muted">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="form-label text-muted">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="btn w-100"
                  style={{ backgroundColor: "#387ed1", color: "white", fontWeight: "500", padding: "10px" }}
                >
                  Continue
                </button>
              </form>
              
              <div className="text-center mt-4">
                <small className="text-muted">
                  By submitting this, you accept our <Link to="/about">Terms</Link> & <Link to="/about">Conditions</Link>.
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;