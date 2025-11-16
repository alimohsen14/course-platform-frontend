import { useState } from "react";
import logo from "../assets/images/logo.jpeg";

export function LoginPage() {
  const [tab, setTab] = useState<"login" | "signup">("login");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: handle form submit
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-900 via-blue-700 to-blue-400 p-6">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden">
        <div className="p-6">
          <div className="flex flex-col items-center -mt-12">
            <div className="mx-auto w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white bg-transparent shadow-md mt-8 mb-0 flex items-center justify-center">
              <img
                src={logo}
                alt="Logo"
                className="w-full h-full object-cover block"
              />
            </div>

            <div className="w-full mt-6">
              <div className="flex justify-center items-center gap-6 text-sm text-gray-600">
                <button
                  onClick={() => setTab("login")}
                  className={`px-3 pb-2 ${
                    tab === "login"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "hover:text-gray-800"
                  }`}
                >
                  Login
                </button>
                <button
                  onClick={() => setTab("signup")}
                  className={`px-3 pb-2 ${
                    tab === "signup"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "hover:text-gray-800"
                  }`}
                >
                  Sign Up
                </button>
              </div>

              <div className="mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />

                  <button
                    type="submit"
                    className="w-full mt-2 bg-blue-600 text-white py-3 rounded-lg font-medium shadow-sm hover:bg-blue-700 transition"
                  >
                    {tab === "login" ? "Login" : "Create account"}
                  </button>
                </form>

                <div className="flex items-center my-5">
                  <div className="flex-1 h-px bg-gray-200" />
                  <div className="px-3 text-sm text-gray-500">
                    or continue with
                  </div>
                  <div className="flex-1 h-px bg-gray-200" />
                </div>

                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 border border-gray-200 rounded-lg px-4 py-3 bg-white hover:shadow-sm transition"
                >
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 533.5 544.3"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#4285f4"
                      d="M533.5 278.4c0-17.7-1.6-35.1-4.7-51.8H272v98h147.3c-6.3 33.7-25 62.3-53.4 81.3v67.7h86.2c50.4-46.4 81.4-115 81.4-195.2z"
                    />
                    <path
                      fill="#34a853"
                      d="M272 544.3c72.6 0 133.6-23.9 178.2-64.9l-86.2-67.7c-24 16.1-54.6 25.6-92 25.6-70.6 0-130.5-47.7-152-111.9H34.7v70.6C79.4 486.6 168 544.3 272 544.3z"
                    />
                    <path
                      fill="#fbbc04"
                      d="M120 325.4c-10.6-31.6-10.6-65.9 0-97.5V157.3H34.7C12.4 199.6 0 239.9 0 282.9s12.4 83.3 34.7 125.6L120 325.4z"
                    />
                    <path
                      fill="#ea4335"
                      d="M272 109.7c39.4 0 75 13.6 103 40.3l77.3-77.3C405.5 24 347.1 0 272 0 168 0 79.4 57.7 34.7 142.9l85.3 70c21.5-64.2 81.4-111.9 152-111.9z"
                    />
                  </svg>
                  <span className="text-sm font-medium">
                    Continue with Google
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
