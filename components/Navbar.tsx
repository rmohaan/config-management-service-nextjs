import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { logout } from '../app/store/authSlice';
import { useRouter } from 'next/router';

const Navbar = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const isAuthenticated = useSelector((state: any) => state.auth.isAuthenticated);

    const handleLogout = () => {
        dispatch(logout());
        router.push('/login'); // Redirect to login page after logout
    };

    return (
        <nav className="bg-blue-600 text-white py-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Left side: Logo or App Name */}
                <div className="text-2xl font-bold">
                    <Link href="/">
                        <a>Config Service</a>
                    </Link>
                </div>

                {/* Right side: Navigation Links */}
                <div className="space-x-4">
                    {!isAuthenticated ? (
                        <>
                            <Link href="/login">
                                <a className="hover:text-blue-200">Login</a>
                            </Link>
                            <Link href="/register">
                                <a className="hover:text-blue-200">Register</a>
                            </Link>
                        </>
                    ) : (
                        <>
                            <Link href="/">
                                <a className="hover:text-blue-200">Home</a>
                            </Link>
                            <button
                                onClick={handleLogout}
                                className="hover:text-blue-200"
                            >
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
