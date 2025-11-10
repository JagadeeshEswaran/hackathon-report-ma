import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const API_BASE = 'http://localhost:3000';

const Signup = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ userName: '', email: '', password: '', type: 'patient' });
  const [showPwd, setShowPwd] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.userName.trim()) return 'User name is required';
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return 'Please enter a valid email';
    if (form.password.length < 6) return 'Password must be at least 6 characters';
    return '';
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    const v = validate();
    if (v) { setError(v); return; }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.message || 'Signup failed');

      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('user', JSON.stringify(data.user));
      setSuccess('Account created successfully!');

      // Redirect to dashboard after a short pause
      setTimeout(() => navigate('/goals'), 600);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow border-0 rounded-4">
        <div className="card-body p-4">
          <h3 className="text-center mb-2">Create your account</h3>
          <p className="text-center text-muted mb-4">Wellness & Preventive Care Portal</p>

          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}

          {success && (
            <div className="alert alert-success" role="alert">
              {success}
            </div>
          )}

          <form onSubmit={onSubmit} noValidate>
            <div className="mb-3">
              <label htmlFor="userName" className="form-label">User name</label>
              <input
                id="userName"
                name="userName"
                type="text"
                className="form-control"
                placeholder="Enter your name"
                value={form.userName}
                onChange={onChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-control"
                placeholder="you@example.com"
                value={form.email}
                onChange={onChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group">
                <input
                  id="password"
                  name="password"
                  type={showPwd ? 'text' : 'password'}
                  className="form-control"
                  placeholder="Minimum 6 characters"
                  value={form.password}
                  onChange={onChange}
                  required
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={() => setShowPwd((s) => !s)}
                  aria-label={showPwd ? 'Hide password' : 'Show password'}
                >
                  {showPwd ? 'Hide' : 'Show'}
                </button>
              </div>
            </div>


            <button type="submit" className="btn btn-primary w-100" disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true" />
                  Creating account...
                </>
              ) : (
                'Sign up'
              )}
            </button>

            <p className="text-center text-muted mt-3 mb-0" style={{ fontSize: '0.9rem' }}>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
