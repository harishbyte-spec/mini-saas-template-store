import React, { useState } from 'react';
import { auth } from '../api';
import { saveAuth } from '../utils/auth';
import { useNavigate } from 'react-router-dom';

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [err, setErr] = useState('');
  const nav = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setErr('');
    try {
      const res = await auth.register(form);
      saveAuth(res.token, res.user);
      nav('/');
    } catch (e) {
      setErr(e.message || 'Failed');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      {err && <div className="bg-red-100 p-2 text-red-700 mb-2">{err}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" className="w-full p-2 border rounded"/>
        <input required value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" type="email" className="w-full p-2 border rounded"/>
        <input required value={form.password} onChange={e=>setForm({...form,password:e.target.value})} placeholder="Password" type="password" className="w-full p-2 border rounded"/>
        <button className="w-full bg-blue-600 text-white p-2 rounded">Register</button>
      </form>
    </div>
  );
}
