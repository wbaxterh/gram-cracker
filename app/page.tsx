import Image from "next/image";

export default function Home() {
	return (
		<main className='flex flex-col min-h-screen items-center justify-center p-10 bg-gradient-to-r from-blue-500 to-indigo-500'>
			{/* Hero Section */}
			<div className='text-center'>
				<Image
					src='/bearWhite.png' // Ensure you have this logo file
					alt='GramCracker Logo'
					width={180}
					height={180}
					className='mx-auto'
				/>
				<h1 className='mt-6 text-4xl font-bold text-white'>
					Automate Your Instagram Posts
				</h1>
				<p className='text-xl text-gray-200 mt-4'>
					You bearly have to do anything
				</p>
				<button className='mt-8 px-6 py-3 bg-white text-indigo-500 font-bold rounded hover:bg-gray-100'>
					Get Started For Free
				</button>
			</div>

			{/* Features Section */}
			<section className='w-full pt-8 pb-16 bg-gray-800 text-white mt-8'>
				<div className='max-w-6xl mx-auto px-6'>
					<h2 className='text-3xl font-bold text-center'>Powerful Features</h2>
					<div className='flex flex-wrap items-center justify-center gap-8 mt-8'>
						<div className='w-full md:w-1/3 p-6 bg-gray-900 rounded-lg shadow'>
							<h3 className='text-xl font-semibold'>
								🦾 AI-Powered Automation
							</h3>
							<p className='mt-2'>
								Train your own AI to analyze your camera roll, create and
								optimize a post for you to get the best engagement rates.
							</p>
						</div>
						<div className='w-full md:w-1/3 p-6 bg-gray-900 rounded-lg shadow'>
							<h3 className='text-xl font-semibold'>
								<span className='text-xxxl'>🔍</span> Computer Vision
							</h3>
							<p className='mt-2'>
								Take advantage of the built-in computer vision model that is
								trained to pick up objects and context of your media
							</p>
						</div>
						<div className='w-full md:w-1/3 p-6 bg-gray-900 rounded-lg shadow'>
							<h3 className='text-xl font-semibold'>
								♻️ Continuous Improvement
							</h3>
							<p className='mt-2'>
								The feedback loop between you and your AI assistant makes it
								only get better the more you use it.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Testimonials Section */}
			<section className='w-full py-16 bg-gray-200 text-white'>
				<div className='max-w-6xl mx-auto px-6 text-center'>
					<h2 className='text-3xl text-gray-800 font-bold'>
						What Our Users Say
					</h2>
					<div className='flex flex-wrap items-center justify-center gap-8 mt-8'>
						<blockquote className='w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow'>
							<p>
								"This app has transformed how I manage my Instagram account.
								It's indispensable for content creators."
							</p>
							<cite className='mt-4 block font-semibold'>
								- Jane Doe, Influencer
							</cite>
						</blockquote>
						<blockquote className='w-full md:w-1/2 bg-gray-800 p-6 rounded-lg shadow'>
							<p>
								"The scheduling feature alone is worth it. It saves me so much
								time and helps me post when my audience is most active."
							</p>
							<cite className='mt-4 block font-semibold'>
								- John Smith, Photographer
							</cite>
						</blockquote>
					</div>
				</div>
			</section>

			{/* Call to Action Section */}
			<section className='w-full py-16 bg-indigo-600 text-white text-center'>
				<h2 className='text-3xl font-bold'>
					Ready to Take Your Instagram to the Next Level?
				</h2>
				<p className='mt-4 text-lg'>
					Sign up today and start optimizing with the power of AI.
				</p>
				<button className='mt-8 px-6 py-3 bg-white text-indigo-600 font-bold rounded hover:bg-gray-100'>
					Get Started Free
				</button>
			</section>
		</main>
	);
}
