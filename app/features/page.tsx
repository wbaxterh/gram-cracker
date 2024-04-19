import Image from "next/image";

export default function Features() {
	return (
		<main className='bg-white'>
			<section className='py-10 px-5 md:px-20'>
				<h2 className='text-3xl font-bold text-gray-800 mb-4'>
					Seamless Instagram Integration
				</h2>
				<p className='text-md text-gray-600 mb-6'>
					Connect effortlessly with Instagram through the Meta API. Gain
					detailed insights into your audience's preferences and engage them
					with content that resonates.
				</p>
				<Image
					src='/images/integration.svg'
					alt='Instagram Integration'
					width={500}
					height={300}
				/>
			</section>

			<section className='py-10 px-5 md:px-20'>
				<h2 className='text-3xl font-bold text-gray-800 mb-4'>
					Advanced Media Analysis
				</h2>
				<p className='text-md text-gray-600 mb-6'>
					Our computer vision technology analyzes your camera reel to suggest
					the best content for posting. Understand visual trends and optimize
					your feed aesthetics automatically.
				</p>
				<Image
					src='/images/computer-vision.svg'
					alt='Computer Vision'
					width={500}
					height={300}
				/>
			</section>

			<section className='py-10 px-5 md:px-20'>
				<h2 className='text-3xl font-bold text-gray-800 mb-4'>
					Personalized Content Strategy
				</h2>
				<p className='text-md text-gray-600 mb-6'>
					Take a short personality test to tailor your Instagram content
					according to your unique style and brand voice. Customize how the AI
					assists you, making sure it aligns with your personal or brand
					identity.
				</p>
				<Image
					src='/images/personalization.svg'
					alt='Personalization'
					width={500}
					height={300}
				/>
			</section>

			<section className='py-10 px-5 md:px-20'>
				<h2 className='text-3xl font-bold text-gray-800 mb-4'>
					Full Control Over Preferences
				</h2>
				<p className='text-md text-gray-600 mb-6'>
					Easily adjust your preferences to fine-tune how the AI selects and
					suggests content. You’re in full control of the automation level and
					content types.
				</p>
				<Image
					src='/images/preferences.svg'
					alt='User Preferences'
					width={500}
					height={300}
				/>
			</section>

			<section className='py-10 px-5 md:px-20'>
				<h2 className='text-3xl font-bold text-gray-800 mb-4'>
					Continuous Learning from Your Feedback
				</h2>
				<p className='text-md text-gray-600 mb-6'>
					Our AI learns from your feedback to continuously improve its
					suggestions. The more you interact, the smarter it gets, adapting to
					your evolving needs.
				</p>
				<Image
					src='/images/feedback-loop.svg'
					alt='Feedback Loop'
					width={500}
					height={300}
				/>
			</section>
		</main>
	);
}
