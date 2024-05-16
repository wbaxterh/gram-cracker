"use client";
import React, { useState } from "react";
import { registerUser } from "../../utils/api";
import { RegisterCreds } from "../../types/auth";
import CloseIcon from "@mui/icons-material/Close";

const Register: React.FC = () => {
	const [error, setError] = useState("");

	const [details, setDetails] = useState<RegisterCreds>({
		email: "",
		password: "",
		confirmPassword: "",
	});
	const handleClose = () => setError("");
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setDetails((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		if (details.password !== details.confirmPassword) {
			setError("Passwords do not match.");
			// Optionally set an error state here to show an error message
			return;
		}
		const response = await registerUser(details);
		if (response._id) {
			console.log("Registered successfully:", response);
			// Handle successful registration
		} else {
			setError("Failed to register: " + response.msg);
			console.error("Failed to register, ", response);
		}
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500'
		>
			<div className='p-8 bg-white rounded-lg shadow-lg max-w-md w-full'>
				<h2 className='text-2xl text-gray-800 font-bold text-center mb-6'>
					Register
				</h2>
				{error && (
					<p className='bg-red-500 text-white bold px-2 py-1 rounded my-2 flex justify-between items-center'>
						{error}
						<CloseIcon onClick={handleClose} className='cursor-pointer' />
					</p>
				)}
				<div className='mb-4'>
					<input
						type='email'
						name='email'
						value={details.email}
						onChange={handleChange}
						placeholder='Email'
						className='w-full p-2 border border-gray-300 text-gray-800 rounded focus:outline-none focus:border-indigo-500'
					/>
				</div>
				<div className='mb-4'>
					<input
						type='password'
						name='password'
						value={details.password}
						onChange={handleChange}
						placeholder='Password'
						className='w-full p-2 border border-gray-300 text-gray-800 rounded focus:outline-none focus:border-indigo-500'
					/>
				</div>
				<div className='mb-6'>
					<input
						type='password'
						name='confirmPassword'
						value={details.confirmPassword}
						onChange={handleChange}
						placeholder='Confirm Password'
						className='w-full p-2 border border-gray-300 text-gray-800 rounded focus:outline-none focus:border-indigo-500'
					/>
				</div>
				<button
					type='submit'
					className='w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
				>
					Register
				</button>
			</div>
		</form>
	);
};

export default Register;
