// client/src/utils/auth.js

// Save token + user info
export function saveAuth(token, user) {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
}

// Get stored token
export function getToken() {
  return localStorage.getItem("token");
}

// Get stored user info
export function getUser() {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
}

// Clear all auth data
export function clearAuth() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
}

// Logout (alias for clearAuth)
export function logout() {
  clearAuth();
}
