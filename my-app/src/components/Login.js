import React, { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (email === 'admin@example.com' && password === 'password') {
            alert('Login successful!');
        } else {
            setError('Invalid email or password');
        }
    };

    return (
        <div style={styles.container}>
            <form onSubmit={handleSubmit} style={styles.form}>
                <h2 style={styles.title}>Sign in</h2>
                {error && <div style={styles.error}>{error}</div>}
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    required
                    style={styles.input}
                    autoFocus
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    required
                    style={styles.input}
                />
                <button type="submit" style={styles.button}>Login</button>
            </form>
        </div>
    );
}

const styles = {
    container: {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#f8fafc'
    },
    form: {
        background: '#fff',
        padding: '2rem',
        borderRadius: '10px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
        minWidth: 300,
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
    },
    title: {
        margin: 0,
        marginBottom: '1rem',
        fontWeight: 600,
        fontSize: '1.5rem',
        color: '#222'
    },
    input: {
        padding: '0.75rem 1rem',
        borderRadius: '6px',
        border: '1px solid #e0e0e0',
        fontSize: '1rem',
        outline: 'none',
        transition: 'border 0.2s',
        background: '#f9f9f9'
    },
    button: {
        padding: '0.75rem 1rem',
        background: '#1976d2',
        color: '#fff',
        border: 'none',
        borderRadius: '6px',
        fontWeight: 600,
        fontSize: '1rem',
        cursor: 'pointer',
        transition: 'background 0.2s'
    },
    error: {
        color: '#d32f2f',
        background: '#fff0f0',
        borderRadius: '4px',
        padding: '0.5rem 1rem',
        fontSize: '0.95rem'
    }
};

export default Login;