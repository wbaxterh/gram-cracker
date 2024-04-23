import React from "react";
import Head from "next/head";

const TermsConditions = () => {
	return (
		<main className='flex flex-col min-h-screen items-center justify-center p-10 bg-gradient-to-r from-blue-500 to-indigo-500'>
			<Head>
				<title>Terms & Conditions - GramCracker.io</title>
			</Head>
			<div className='mx-auto max-w-4xl p-5 bg-gray-200 text-gray-800'>
				<h1 className='text-3xl font-bold text-center my-6'>
					Terms and Conditions
				</h1>
				<p className='text-md text-gray-700 mb-4'>
					<i className='py-2'>Last Updated: 04/23/24</i>
					<br />
					<br />
					Welcome to GramCracker.io! These terms and conditions outline the
					rules and regulations for the use of GramCracker.io's mobile
					application, operated by [Your Company Name]. By accessing this app
					and using our services, you agree to be bound by these terms and
					conditions. If you disagree with any part of these terms, you must not
					use our application.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-4'>
					Intellectual Property Rights
				</h2>
				<p className='text-md text-gray-700 mb-4'>
					Other than content you own, which you may have opted to include on
					this application, under these Terms, GramCracker.io and/or its
					licensors own all rights to the intellectual property and material
					contained in this application, and all such rights are reserved. You
					are granted a limited license only, subject to the restrictions
					provided in these terms, for purposes of viewing the material
					contained on this application.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-4'>Restrictions </h2>
				<p className='text-md text-gray-700 mb-4'>
					You are specifically restricted from all of the following:
				</p>
				<ul className='list-disc pl-5 mb-4 text-gray-700'>
					<li>Publishing any application material in any media;</li>
					<li>
						Selling, sublicensing, and/or otherwise commercializing any
						application material;
					</li>
					<li>Publicly performing and/or showing any application material;</li>
					<li>
						Using this application in any way that is, or may be, damaging to
						this application;
					</li>
					<li>
						Using this application in any way that impacts user access to this
						application;
					</li>
					<li>
						Using this application contrary to applicable laws and regulations,
						or in a way that causes, or may cause, harm to the application, or
						to any person or business entity;
					</li>
					<li>
						Engaging in any data mining, data harvesting, data extracting, or
						any other similar activity in relation to this application, or while
						using this application;
					</li>
					<li>
						Using this application to engage in any advertising or marketing
						without express written consent.
					</li>
				</ul>

				<h2 className='text-2xl font-semibold mt-6 mb-4'>Your Content</h2>
				<p className='text-md text-gray-700 mb-4'>
					In these Terms and Conditions, "Your Content" shall mean any audio,
					video, text, images, or other material you choose to display on this
					application. By displaying Your Content, you grant GramCracker.io a
					non-exclusive, worldwide, irrevocable, royalty-free, sublicensable
					license to use, reproduce, adapt, publish, translate, and distribute
					it in any and all media.{" "}
				</p>
				<p className='text-md text-gray-700 mb-4'>
					Your Content must be your own and must not be infringing on any third
					party’s rights. GramCracker.io reserves the right to remove any of
					Your Content from this application at any time, and for any reason,
					without notice.
				</p>
				<h2 className='text-2xl font-semibold mt-6 mb-4'>No warranties</h2>
				<p className='text-md text-gray-700 mb-4'>
					In no event shall GramCracker.io, nor any of its officers, directors,
					and employees, be liable to you for anything arising out of or in any
					way connected with your use of this application, whether such
					liability is under contract, tort, or otherwise, and GramCracker.io,
					including its officers, directors, and employees shall not be liable
					for any indirect, consequential, or special liability arising out of
					or in any way related to your use of this application.
				</p>
				<h2 className='text-2xl font-semibold mt-6 mb-4'>Indemnification</h2>
				<p className='text-md text-gray-700 mb-4'>
					You hereby indemnify to the fullest extent GramCracker.io from and
					against any and/or all liabilities, costs, demands, causes of action,
					damages, and expenses arising in any way related to your breach of any
					of the provisions of these Terms.
				</p>
				<h2 className='text-2xl font-semibold mt-6 mb-4'>Severability</h2>
				<p className='text-md text-gray-700 mb-4'>
					If any provision of these Terms is found to be unenforceable or
					invalid under any applicable law, such unenforceability or invalidity
					shall not render these Terms unenforceable or invalid as a whole, and
					such provisions shall be deleted without affecting the remaining
					provisions herein.
				</p>
				<h2 className='text-2xl font-semibold mt-6 mb-4'>Variation of Terms</h2>
				<p className='text-md text-gray-700 mb-4'>
					GramCracker.io is permitted to revise these terms at any time as it
					sees fit, and by using this application you are expected to review
					such terms on a regular basis to ensure you understand all terms and
					conditions governing use of this application.
				</p>
				<h2 className='text-2xl font-semibold mt-6 mb-4'>Assignment</h2>
				<p className='text-md text-gray-700 mb-4'>
					GramCracker.io is allowed to assign, transfer, and subcontract its
					rights and/or obligations under these Terms without any notification.
					However, you are not allowed to assign, transfer, or subcontract any
					of your rights and/or obligations under these Terms.
				</p>
				<h2 className='text-2xl font-semibold mt-6 mb-4'>Entire Agreement</h2>
				<p className='text-md text-gray-700 mb-4'>
					These Terms, including any legal notices and disclaimers contained on
					this application, constitute the entire agreement between [Your
					Company Name] and you in relation to your use of this application, and
					supersede all prior agreements and understandings with respect to the
					same.
				</p>
				<h2 className='text-2xl font-semibold mt-6 mb-4'>
					Governing Law & Jurisdiction
				</h2>
				<p className='text-md text-gray-700 mb-4'>
					These Terms will be governed by and interpreted in accordance with the
					laws of the State of Georgia, and you submit to the non-exclusive
					jurisdiction of the state and federal courts located in Georgia for
					the resolution of any disputes.
				</p>
			</div>
		</main>
	);
};
export default TermsConditions;
