const Footer = () => {
	return (
		<footer className='bg-gray-800 text-white py-8'>
			<div className='max-w-6xl mx-auto px-4 flex justify-between items-center'>
				{/* Left side: Logo and branding */}
				<div className='flex items-center'>
					<span className='text-lg font-bold'>GramCracker.io</span>
				</div>

				{/* Right side: Links and social media icons */}
				<div>
					<ul className='flex space-x-4'>
						<li>
							<a href='/about' className='hover:text-gray-400'>
								About Us
							</a>
						</li>
						<li>
							<a href='/privacy' className='hover:text-gray-400'>
								Privacy Policy
							</a>
						</li>
						<li>
							<a href='/terms' className='hover:text-gray-400'>
								Terms of Service
							</a>
						</li>
						<li>
							<a href='/contact' className='hover:text-gray-400'>
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
