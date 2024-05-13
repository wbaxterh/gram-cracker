"use client";
import React, { useState } from "react";
import { registerUser } from "../../utils/api";
import { Credentials } from "../../types/auth";

const Register = () => {
	const [details, setDetails] = useState<Credentials>({
		email: "",
		password: "",
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setDetails((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const response = await registerUser(details);
		if (response._id) {
			console.log("Registered successfully:", response);
			// Handle successful registration
		} else {
			console.error("Failed to register");
		}
	};

	return (
		<form onSubmit={handleSubmit} className='register-form'>
			<input
				type='email'
				name='email'
				value={details.email}
				onChange={handleChange}
				placeholder='Email'
			/>
			<input
				type='password'
				name='password'
				value={details.password}
				onChange={handleChange}
				placeholder='Password'
			/>
			<button type='submit'>Register</button>
		</form>
	);
};

export default Register;
