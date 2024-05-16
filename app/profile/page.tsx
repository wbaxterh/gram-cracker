// src/pages/profile.tsx
"use client";
import React from "react";
import useRequireAuth from "../../hooks/useRequireAuth";
import { useAuth } from "../../context/AuthContext";

const Profile: React.FC = () => {
	const token = useRequireAuth(); // This will redirect if no token
	const { email, logout } = useAuth();

	if (!token) return null; // This is just for safety, it should never render this

	return (
		<div className='flex flex-col items-center justify-top p-4 min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500'>
			<div className='p-8 bg-white rounded-lg shadow-lg text-gray-800 w-full'>
				<h1>Welcome, {email}</h1>
				<button
					onClick={logout}
					className='bg-gray-500 text-white bold px-2 py-1 rounded my-2 flex '
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default Profile;
