"use client";
import React, { useState } from "react";
import { loginUser } from "../../utils/api";
import { Credentials } from "../../types/auth";
import { useAuth } from "../../context/AuthContext";

const SignIn: React.FC = () => {
	const [credentials, setCredentials] = useState<Credentials>({
		email: "",
		password: "",
	});
	const { login } = useAuth(); // Destructure login function from context

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setCredentials((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const response = await loginUser(credentials);
		console.log("respose from login ", response);
		if (response.token) {
			console.log("Logged in successfully:", response.token);
			login(response.token, credentials.email); // Use the login function from AuthContext
			// Handle successful login, e.g., storing the token, redirecting the user
		} else {
			console.error("Failed to log in");
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500'
		>
			<div className='p-8 bg-white rounded-lg shadow-lg max-w-md w-full'>
				<h2 className='text-2xl text-gray-800 font-bold text-center mb-6'>
					Sign In
				</h2>
				<div className='mb-4'>
					<input
						type='email'
						name='email'
						value={credentials.email}
						onChange={handleChange}
						placeholder='Email'
						className='w-full p-2 border border-gray-300 text-gray-800 rounded focus:outline-none focus:border-indigo-500'
					/>
				</div>
				<div className='mb-6'>
					<input
						type='password'
						name='password'
						value={credentials.password}
						onChange={handleChange}
						placeholder='Password'
						className='w-full p-2 border border-gray-300 text-gray-800 rounded focus:outline-none focus:border-indigo-500'
					/>
				</div>
				<button
					type='submit'
					className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
				>
					Sign In
				</button>
			</div>
		</form>
	);
};

export default SignIn;
