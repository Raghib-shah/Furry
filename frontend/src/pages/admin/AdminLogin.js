import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import API_BASE_URL from '../../config/api';
import AnimatedSection from '../../components/AnimatedSection';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(`${API_BASE_URL}/api/admin/login`, {
        username,
        password
      });

      if (response.data.success) {
        localStorage.setItem('adminToken', response.data.token);
        navigate('/admin/dashboard');
      }
    } catch (err) {
      setError(err.response?.data?.error || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full">
        <AnimatedSection>
          <div className="bg-surface border border-borderSoft rounded-2xl p-8">
            <h1 className="text-4xl font-bold mb-8 text-center">Admin Login</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">Username</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full bg-bgMain border border-borderSoft rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary"
                  required
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-bgMain border border-borderSoft rounded-xl px-4 py-3 text-textMain focus:outline-none focus:border-primary"
                  required
                />
              </div>
              {error && (
                <div className="bg-red-500/20 border border-red-500 rounded-xl p-4 text-red-400">
                  {error}
                </div>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primarySoft text-textMain font-bold rounded-full px-6 py-3 transition-colors disabled:opacity-50"
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>
            </form>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default AdminLogin;

