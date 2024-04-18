import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Home() {
	return (
		<div>
			<Head>
				<title>GramCracker.io - Automate Your Instagram</title>
				<meta
					name='description'
					content='Automate your Instagram posts with ease using GramCracker.io'
				/>
			</Head>

			<Header />

			{/* Hero Section */}
			<section className='bg-blue-500 text-white text-center p-12'>
				<h1 className='text-4xl font-bold'>Automate Your Instagram Posts</h1>
				<p className='text-xl mt-4'>
					Effortlessly plan, schedule, and analyze your Instagram content.
				</p>
				<button className='mt-8 px-6 py-3 bg-white text-blue-500 font-semibold rounded'>
					Get Started
				</button>
			</section>

			{/* Features Section */}
			<section className='p-12'>
				<h2 className='text-3xl text-center font-bold mb-8'>Features</h2>
				{/* Feature cards go here */}
			</section>

			{/* Testimonials Section */}
			<section className='bg-gray-100 p-12'>
				<h2 className='text-3xl text-center font-bold mb-8'>
					What Users Are Saying
				</h2>
				{/* Testimonial cards go here */}
			</section>

			{/* Call to Action Section */}
			<section className='bg-blue-600 text-white text-center p-12'>
				<h2 className='text-3xl font-bold'>Ready to Boost Your Instagram?</h2>
				<button className='mt-8 px-6 py-3 bg-white text-blue-600 font-semibold rounded'>
					Sign Up Now
				</button>
			</section>

			<Footer />
		</div>
	);
}
