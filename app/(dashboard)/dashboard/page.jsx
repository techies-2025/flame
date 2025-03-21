'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabaseClient';
import Sidebar from '@/components/ui/sidebar';

const Page = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();

      if (!session) {
        // Redirect to login if no session exists
        router.push('/signup');
      } else {
        setUser(session.user); // Set the user details
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      router.push('/signup'); // Redirect to login page after logout
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex'>
    <Sidebar onClick={handleLogout} />
    <div className="p-4 flex-1/2">
      <h1 className="text-2xl font-bold mb-4">Dashboard Page</h1>

      {/* Profile Card */}
      <div className="flex items-center gap-4 p-4 bg-gray-100 rounded shadow-md">
        <img
          src={user?.user_metadata?.avatar_url || '/user.png'}
          alt="User Avatar"
          className="w-16 h-16 rounded-full"
        />
        <div>
          <h2 className="text-xl font-semibold">{user?.user_metadata?.full_name || 'User'}</h2>
          <p className="text-gray-600">{user?.email}</p>
        </div>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
      >
        Log Out
      </button>
    </div>
    </div>
  );
};

export default Page;