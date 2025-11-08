import { getToken } from "./utils/auth";

const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

async function request(path, options = {}) {
  const headers = options.headers ? { ...options.headers } : {};
  const token = getToken();

  // Attach JWT token if available
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  // Ensure content type
  if (!headers["Content-Type"]) {
    headers["Content-Type"] = "application/json";
  }

  // Send request
  const res = await fetch(`${API}${path}`, { ...options, headers });
  const data = await res.json().catch(() => ({}));

  if (!res.ok) throw { status: res.status, ...data };
  return data;
}

// --- AUTH ROUTES ---
export const auth = {
  register: (body) =>
    request("/api/auth/register", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  login: (body) =>
    request("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    }),
};

// --- TEMPLATE ROUTES ---
export const templates = {
  list: () => request("/api/templates"),
  detail: (id) => request(`/api/templates/${id}`),
  toggleFavorite: (id) =>
    request(`/api/templates/favorites/${id}`, { method: "POST" }),
  getFavorites: () => request("/api/templates/favorites"),
};
