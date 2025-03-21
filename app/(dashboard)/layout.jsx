'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/ui/sidebar";
import { supabase } from "@/lib/supabaseClient";

const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Error logging out:", error.message);
    } else {
      router.push("/signup"); // Redirect to login page after logout
    }
  };

export default function Layout({ children }) {
    const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session) {
        // Redirect to login if no session exists
        router.push("/signup");
      } else {
        setUser(session.user); // Set the user details
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div>Loading...</div>;
  }


  return (
    <div className="flex h-[100vh] overflow-hidden">
        <Sidebar onClick={handleLogout} />
        <div className="p-4 flex-1/2 h-full overflow-auto">

            {/* Profile Card */}
            <div className="flex items-center sticky top-0 gap-4 p-4 bg-gray-100 rounded shadow-md">
            <img
                src={user?.user_metadata?.avatar_url || "/user.png"}
                alt="User Avatar"
                className="w-16 h-16 rounded-full"
            />
            <div>
                <h2 className="text-xl font-semibold">
                {user?.user_metadata?.full_name || "User"}
                </h2>
                <p className="text-gray-600">{user?.email}</p>
            </div>
            </div>
            {children}
        </div>
    </div>
  );
}
