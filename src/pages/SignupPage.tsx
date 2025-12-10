/* eslint-disable */
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";
import { signup, googleCompleteSignup } from "../services/authService";

export function SignupPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const query = new URLSearchParams(location.search);

  const isGoogle = query.get("google") === "true";
  const googleEmail = query.get("email") || "";
  const googleName = query.get("name") || "";
  const providerId = query.get("providerId") || "";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  useEffect(() => {
    if (isGoogle) {
      setEmail(googleEmail);
      setName(googleName);
    }
  }, [isGoogle, googleEmail, googleName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // ---------- GOOGLE SIGNUP ----------
      if (isGoogle) {
        if (!name || !phone) {
          alert("Name and phone are required.");
          return;
        }

        const res = await googleCompleteSignup({
          email: googleEmail,
          name,
          phone,
          providerId,
        });

        if (res.accessToken) {
          localStorage.setItem("accessToken", res.accessToken);
        }

        if (res.user) {
          localStorage.setItem("user", JSON.stringify(res.user));
        }

        navigate("/home", { replace: true });
        return;
      }

      // ---------- NORMAL SIGNUP ----------
      if (password !== confirm) {
        alert("Passwords do not match.");
        return;
      }

      const res = await signup({ name, email, password, phone });

      if (res.accessToken) {
        localStorage.setItem("accessToken", res.accessToken);
      }

      navigate("/home", { replace: true });
    } catch (err: any) {
      alert(err?.response?.data?.message || "Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-600">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-xl">
        <img src={logo} className="w-20 h-20 mx-auto mb-4 rounded-full" />

        <h2 className="text-center text-2xl font-bold mb-4">
          {isGoogle ? "Complete Google Signup" : "Create Account"}
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            value={name}
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />

          <input
            value={email}
            disabled={isGoogle}
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded bg-gray-200"
            required
          />

          {!isGoogle && (
            <>
              <input
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded"
                required
              />

              <input
                type="password"
                value={confirm}
                placeholder="Confirm Password"
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full px-4 py-2 border rounded"
                required
              />
            </>
          )}

          <input
            value={phone}
            placeholder="Phone Number"
            onChange={(e) => setPhone(e.target.value)}
            className="w-full px-4 py-2 border rounded"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            {isGoogle ? "Continue" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
