import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Templates from './pages/Templates';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import Register from './pages/Register';
import { getUser, logout } from './utils/auth';

export default function App() {
  const user = getUser();
  return (
    <div>
      <nav className="bg-white shadow p-4 flex justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="font-bold text-lg">Mini SaaS</Link>
          <Link to="/" className="text-sm">Templates</Link>
          {user && <Link to="/favorites" className="text-sm">My Favorites</Link>}
        </div>
        <div>
          {user ? (
            <div className="flex items-center gap-4">
              <span>{user.name}</span>
              <button onClick={() => { logout(); window.location.reload(); }} className="text-sm bg-red-500 text-white px-3 py-1 rounded">Logout</button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
              <Link to="/register" className="px-3 py-1 bg-blue-600 text-white rounded">Register</Link>
            </div>
          )}
        </div>
      </nav>

      <main className="container mx-auto p-6">
        <Routes>
          <Route path="/" element={<Templates />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
    </div>
  );
}
