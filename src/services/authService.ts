/* eslint-disable */

const API_URL = "http://localhost:3004/auth";

// Local login
export async function login(data: { email: string; password: string }) {
  const res = await fetch(`${API_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Local signup
export async function signup(data: {
  name: string;
  email: string;
  password: string;
  phone: string;
}) {
  const res = await fetch(`${API_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Start Google OAuth login
export function googleLoginRedirect() {
  window.location.href = `${API_URL}/google`;
}

// Complete Google signup
export async function googleCompleteSignup(data: {
  email: string;
  name: string;
  phone: string;
  providerId: string;
}) {
  const res = await fetch(`${API_URL}/google-complete-signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
}

// Fetch profile
export async function getProfile() {
  const token = localStorage.getItem("accessToken") || "";

  const res = await fetch(`${API_URL}/profile`, {
    method: "GET",
    headers: { Authorization: `Bearer ${token}` },
  });

  return res.json();
}
export async function updateProfile(data: { name?: string; phone?: string }) {
  const token = localStorage.getItem("accessToken");

  const res = await fetch(`${API_URL}/profile`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
export async function changePassword(data: {
  currentPassword: string;
  newPassword: string;
}) {
  const token = localStorage.getItem("accessToken");

  const res = await fetch("http://localhost:3004/auth/change-password", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  return res.json();
}
