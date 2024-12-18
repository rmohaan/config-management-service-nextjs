import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../app/store/authSlice';
import axios from 'axios';
import { useRouter } from 'next/router';

const LoginPage = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post('/auth/login', { email, password });
            dispatch(loginSuccess(response.data.token));
            router.push('/');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    return (
        <div className="max-w-sm mx-auto mt-8">
            <h2 className="text-2xl font-bold mb-4">Login</h2>
            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Email"
                        required
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded"
                        placeholder="Password"
                        required
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Login
                </button>
            </form>
        </div>
    );
};

export default LoginPage;
