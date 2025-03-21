import React from 'react';
import Logo from './logo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = (props) => {
  const pathname = usePathname(); // Get the current route

  return (
    <section className="bg-gray-100 h-screen w-64 p-4 flex flex-col justify-between">
      <div>
        <Logo />
        <nav className="mt-8 flex flex-col gap-4">
          <Link href="/dashboard">
            <button
              className={`w-full px-4 py-2 rounded transition ${
                pathname === '/dashboard'
                  ? 'bg-blue-600 text-white'
                  : 'border-2 border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white'
              }`}
            >
              Dashboard
            </button>
          </Link>
          <Link href="/profile">
            <button
              className={`w-full px-4 py-2 rounded transition ${
                pathname === '/profile'
                  ? 'bg-blue-600 text-white'
                  : 'border-2 border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white'
              }`}
            >
              Profile
            </button>
          </Link>
          <Link href="/settings">
            <button
              className={`w-full px-4 py-2 rounded transition ${
                pathname === '/settings'
                  ? 'bg-blue-600 text-white'
                  : 'border-2 border-blue-500 text-blue-500 bg-transparent hover:bg-blue-500 hover:text-white'
              }`}
            >
              Settings
            </button>
          </Link>
        </nav>
      </div>
      <button
        onClick={() => props.onClick()}
        className="mt-4 bg-red-500 text-white w-full px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Log Out
      </button>
    </section>
  );
};

export default Sidebar;