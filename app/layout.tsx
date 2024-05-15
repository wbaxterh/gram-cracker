"use client";
// import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useState, useEffect } from "react";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { AuthProvider } from "../context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
// 	title: "GramCracker.io - AI powered Instagram posting",
// 	description: "You bearly have to do anything",
// };

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	// const [password, setPassword] = useState("");
	// const [accessGranted, setAccessGranted] = useState(false);

	// const correctPassword = "Wakezeach2024!"; // This should be securely managed

	// // Check local storage to see if access has already been granted
	// useEffect(() => {
	// 	const access = localStorage.getItem("accessGranted");
	// 	if (access) {
	// 		setAccessGranted(true);
	// 	}
	// }, []);

	// const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	setPassword(event.target.value);
	// };

	// const verifyPassword = () => {
	// 	if (password === correctPassword) {
	// 		setAccessGranted(true);
	// 		localStorage.setItem("accessGranted", "true"); // Store access in local storage
	// 	} else {
	// 		alert("Wrong password"); // Consider using a less intrusive method for user feedback
	// 	}
	// };

	return (
		<AuthProvider>
			<html lang='en'>
				<body className={inter.className}>
					<Header />
					<main className='flex-grow'>
						{children}
						{/* {!accessGranted && (
							<div className='fixed inset-0 bg-black bg-opacity-05 flex items-center justify-center z-50'>
								<div className='bg-white p-8 rounded shadow-lg text-center'>
									<h2 className='mb-2 text-gray-900'>
										Enter Password to Access Site
									</h2>
									<input
										type='password'
										value={password}
										onChange={handlePasswordChange}
										className='border p-2 rounded text-gray-900 mr-2'
										autoFocus
									/>
									<button
										onClick={verifyPassword}
										className='mt-4 bg-blue-500 text-white px-4 py-2 rounded'
									>
										Enter
									</button>
								</div>
							</div>
						)} */}
					</main>
					<Footer />
				</body>
			</html>
		</AuthProvider>
	);
}
