import { Link } from 'react-router-dom';
import LockIcon from './icons/LockIcon';

const Header = () => {
    return (
        <header className="bg-white shadow-sm border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                            <LockIcon />
                        </div>
                        <span className="text-xl font-bold text-gray-900">JobBoard</span>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
