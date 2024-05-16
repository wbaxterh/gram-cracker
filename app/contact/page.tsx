// src/pages/contact.tsx
"use client";
import React, { useState } from "react";

const Contact: React.FC = () => {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
		// Clear errors on input change
		setErrors((prev) => ({ ...prev, [name]: "" }));
	};

	const validateForm = () => {
		let hasError = false;
		let errors = {
			name: "",
			email: "",
			message: "",
		};

		if (!formData.email) {
			errors.email = "Email is required";
			hasError = true;
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = "Email address is invalid";
			hasError = true;
		}

		if (!formData.message) {
			errors.message = "Message is required";
			hasError = true;
		}

		setErrors(errors);
		return !hasError;
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (validateForm()) {
			console.log("Form data submitted:", formData);
			// Implement your API submit logic here
		}
	};

	return (
		<div className='flex flex-col items-center justify-center p-4 min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500'>
			<div className='p-8 bg-white rounded-lg max-w-md w-full'>
				<h1 className='text-xl font-bold text-gray-800 text-center mb-6'>
					Contact Us
				</h1>
				<form onSubmit={handleSubmit}>
					<div className='mb-4'>
						<label
							htmlFor='name'
							className='block text-gray-700 text-sm font-bold mb-2'
						>
							Name (Optional)
						</label>
						<input
							type='text'
							id='name'
							name='name'
							value={formData.name}
							onChange={handleChange}
							className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline'
						/>
					</div>
					<div className='mb-4'>
						<label
							htmlFor='email'
							className='block text-gray-700 text-sm font-bold mb-2'
						>
							Email
						</label>
						<input
							type='email'
							id='email'
							name='email'
							required
							value={formData.email}
							onChange={handleChange}
							className='appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline'
						/>
						{errors.email && (
							<p className='text-red-500 text-xs italic'>{errors.email}</p>
						)}
					</div>
					<div className='mb-6'>
						<label
							htmlFor='message'
							className='block text-gray-700 text-sm font-bold mb-2'
						>
							Message
						</label>
						<textarea
							id='message'
							name='message'
							required
							value={formData.message}
							onChange={handleChange}
							className=' appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline'
							rows={4}
						/>
						{errors.message && (
							<p className='text-red-500 text-xs italic'>{errors.message}</p>
						)}
					</div>
					<button
						type='submit'
						className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline'
					>
						Send Message
					</button>
				</form>
			</div>
		</div>
	);
};

export default Contact;
