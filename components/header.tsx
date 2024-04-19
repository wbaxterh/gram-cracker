"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "../css/Header.module.css";

const Header = () => {
	// State to handle the menu toggle on mobile
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const headerRef = useRef<HTMLHeadingElement>(null);

	// Apply sticky positioning dynamically
	useEffect(() => {
		const handleScroll = () => {
			console.log("hi from handle scroll ", window.scrollY);
			const headerEl = headerRef.current;
			if (headerEl) {
				// Ensure headerEl is not null before accessing it
				if (window.scrollY > 60) {
					// Your header height
					headerEl.classList.add("sticky");
				} else {
					headerEl.classList.remove("sticky");
				}
			}
		};
		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			ref={headerRef}
			className='w-full bg-white shadow-md py-4 px-6 md:px-10'
		>
			<div className='flex items-center justify-between max-w-6xl mx-auto'>
				{/* Logo and home link */}
				<Link href='/'>
					<span className='flex items-center cursor-pointer'>
						<Image
							src='/bearDark.png'
							alt='GramCracker.io Logo'
							width={50}
							height={50}
						/>
						<span className='font-bold text-xl ml-2 text-gray-600'>
							GramCracker.io
						</span>
					</span>
				</Link>

				{/* Menu toggle button for mobile */}
				<button
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					className='md:hidden text-gray-600 focus:outline-none'
				>
					<svg fill='currentColor' viewBox='0 0 20 20' className='w-8 h-8'>
						{isMenuOpen ? (
							<path
								fillRule='evenodd'
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule='evenodd'
							/>
						) : (
							<path
								fillRule='evenodd'
								d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
								clipRule='evenodd'
							/>
						)}
					</svg>
				</button>

				{/* Navigation Links */}
				<nav
					className={`${
						isMenuOpen ? "flex" : "hidden"
					} absolute top-full left-0 right-0 bg-white shadow-md py-4 px-6 md:block md:static md:p-2 md:shadow-none md:relative `}
					style={{ top: isMenuOpen ? "60px" : "0px", textAlign: "center" }} // Dynamic positioning based on header height
				>
					<ul className='flex flex-col md:flex-row items-center w-full md:space-x-2'>
						<li>
							<Link href='/features'>
								<span className='block text-gray-400 hover:text-gray-600 p-2 md:py-0 cursor-pointer'>
									Features
								</span>
							</Link>
						</li>
						<li>
							<Link href='/pricing'>
								<span className='block text-gray-400 hover:text-gray-600 p-2 md:py-0 cursor-pointer'>
									Pricing
								</span>
							</Link>
						</li>
						<li>
							<Link href='/about'>
								<span className='block text-gray-400 hover:text-gray-600 p-2 md:py-0 cursor-pointer'>
									About Us
								</span>
							</Link>
						</li>
						<li>
							<Link href='/contact'>
								<span className='block text-gray-400 hover:text-gray-600 p-2 md:py-0 cursor-pointer'>
									Contact
								</span>
							</Link>
						</li>
					</ul>
				</nav>

				{/* Call to Action Button - visible only on desktop */}
				<div className='hidden md:flex'>
					<Link href='/signup'>
						<span className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer'>
							Sign Up
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
