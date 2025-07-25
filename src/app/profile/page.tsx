'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../auth-provider';
import { useEffect } from 'react';

export default function ProfilePage() {
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="bg-white rounded-lg shadow-md p-6 max-w-md mx-auto">
          <div className="flex flex-col items-center">
            {user.photo_url && (
              <img
                src={user.photo_url}
                alt="Profile"
                className="w-24 h-24 rounded-full mb-4"
              />
            )}
            <h1 className="text-2xl font-bold mb-2 text-black">
              {user.first_name} {user.last_name}
            </h1>
            {user.username && (
              <p className="text-gray-600 mb-4">@{user.username}</p>
            )}
            <button
              onClick={logout}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
            >
              Выйти
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}