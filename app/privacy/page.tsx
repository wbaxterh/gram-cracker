import React from "react";
import Head from "next/head";

const Privacy = () => {
	return (
		<main className='flex flex-col min-h-screen items-center justify-center p-10 bg-gradient-to-r from-blue-500 to-indigo-500'>
			<Head>
				<title>Privacy Policy - GramCracker.io</title>
			</Head>
			<div className='mx-auto max-w-4xl p-5 bg-gray-200 text-gray-800'>
				<h1 className='text-3xl font-bold text-center my-6'>Privacy Policy</h1>
				<p className='text-md text-gray-700 mb-4'>
					At GramCracker.io, accessible from https://gramcracker.io, one of our
					main priorities is the privacy of our visitors. This Privacy Policy
					document contains types of information that is collected and recorded
					by GramCracker.io and how we use it.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-4'>
					Information We Collect
				</h2>
				<p className='text-md text-gray-700 mb-4'>
					The personal information that you are asked to provide, and the
					reasons why you are asked to provide it, will be made clear to you at
					the point we ask you to provide your personal information.
				</p>
				<p className='text-md text-gray-700 mb-4'>
					If you contact us directly, we may receive additional information
					about you such as your name, email address, phone number, the contents
					of the message and/or attachments you may send us, and any other
					information you may choose to provide.
				</p>
				<p className='text-md text-gray-700 mb-4'>
					When you register for an Account, we may ask for your contact
					information, including items such as name, company name, address,
					email address, and telephone number.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-4'>
					How We Use Your Information
				</h2>
				<ul className='list-disc pl-5 mb-4 text-gray-700'>
					<li>Provide, operate, and maintain our website</li>
					<li>Improve, personalize, and expand our website</li>
					<li>Understand and analyze how you use our website</li>
					<li>Develop new products, services, features, and functionality</li>
					<li>
						Communicate with you, either directly or through one of our
						partners, including for customer service, to provide you with
						updates and other information relating to the website, and for
						marketing and promotional purposes
					</li>
					<li>Send you emails</li>
					<li>Find and prevent fraud</li>
				</ul>

				<h2 className='text-2xl font-semibold mt-6 mb-4'>Log Files</h2>
				<p className='text-md text-gray-700 mb-4'>
					GramCracker.io follows a standard procedure of using log files.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-4'>
					Cookies and Web Beacons
				</h2>
				<p className='text-md text-gray-700 mb-4'>
					Like any other website, GramCracker.io uses 'cookies'. These cookies
					are used to store information including visitors' preferences, and the
					pages on the application that the visitor accessed or visited. The
					information is used to optimize the users' experience by customizing
					our web page content based on visitors' browser type and/or other
					information. For more detailed information on the cookies we use and
					the purposes for which we use them, see our Cookie Policy.
				</p>
				<h2 className='text-2xl font-semibold mt-6 mb-4'>
					Security of Your Information
				</h2>
				<p className='text-md text-gray-700 mb-4'>
					We use administrative, technical, and physical security measures to
					help protect your personal information. While we have taken reasonable
					steps to secure the personal information you provide to us, please be
					aware that despite our efforts, no security measures are perfect or
					impenetrable, and no method of data transmission can be guaranteed
					against any interception or other type of misuse. Any information
					disclosed online is vulnerable to interception and misuse by
					unauthorized parties. Therefore, we cannot guarantee complete security
					if you provide personal information.
				</p>
				<h2 className='text-2xl font-semibold mt-6 mb-4'>
					Policy for Children
				</h2>
				<p className='text-md text-gray-700 mb-4'>
					We do not knowingly solicit information from or market to children
					under the age of 13. If you become aware of any data we have collected
					from children under age 13, please contact us using the contact
					information provided below.
				</p>
				<h2 className='text-2xl font-semibold mt-6 mb-4'>
					Changes to This Privacy Policy
				</h2>
				<p className='text-md text-gray-700 mb-4'>
					We may update our Privacy Policy
				</p>
			</div>
		</main>
	);
};
export default Privacy;
