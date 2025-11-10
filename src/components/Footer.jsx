import React from 'react';
import logo from '../resource/logokgv.jpg';
import kgvmitr from '../resource/kgvmitr.png';
import footerbgpic from '../resource/footerbgpic.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faTwitter,
	faLinkedinIn,
	faFacebook,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
	return (
		<footer className="relative text-gray-800 px-6 py-10 text-2xl overflow-hidden w-screen">
			<div
				className="absolute inset-0 bg-black opacity-30"
				style={{
					backgroundImage: `url(${footerbgpic})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			></div>
			{/* Right-side mascot image */}
			<img
				src={kgvmitr}
				alt="Mascot"
				className="hidden lg:block absolute bottom-0 right-0 w-52 h-auto z-0"
			/>

			<div className="relative z-10 xl:w-3/4 mx-auto grid gap-8 md:grid-cols-5">
				{/* Column 1: Logo + Address */}
				<div className="text-center md:text-left">
					<img
						src={logo}
						alt="KGV Logo"
						className="w-16 h-16 rounded-full mx-auto md:mx-0 mb-2"
					/>
					<h3 className="mb-2">Karishma Global Ventures</h3>
					<p className="text-xl">
						<strong>Corporate Office:</strong> 609, Tower II, Pearls Omaxe,
						Netaji Subash Place, Pitampura, New Delhi - 110034, Delhi, INDIA.
					</p>
				</div>

				{/* Column 2: Home */}
				<div className="text-center md:text-left text-green-700">
					<h4 className="font-semibold mb-2">Home</h4>
					<a href="#" className="block text-xl hover:underline">
						Book Now
					</a>
				</div>

				{/* Column 3: Products */}
				<div className="text-center md:text-left text-green-700">
					<h4 className="font-semibold mb-2">Products</h4>
					<a href="#" className="block text-xl hover:underline">
						Featured Products
					</a>
					<a href="#" className="block text-xl hover:underline">
						New Stories
					</a>
				</div>

				{/* Column 4: Company */}
				<div className="text-center md:text-left text-green-700">
					<h4 className="font-semibold mb-2">Company</h4>
					<a href="#" className="block text-xl hover:underline">
						About Us
					</a>
					<a href="#" className="block text-xl hover:underline">
						Contact Us
					</a>
				</div>

				{/* Column 5: Contact */}
				<div className="text-center md:text-left text-xl color:'#00433D' text-black">
					<h4 className="font-bold mb-2 text-gray-700">Get In Touch</h4>
					<div className="flex">
						<p className=""></p>
						<p>📧</p> <p className="font-bold mr-2">Email: </p>
						<p>team@kgvl.co.in</p>
					</div>
					<div className="flex">
						<p className=""></p>
						<p>📧</p> <p className="font-bold mr-2">Email: </p>
						<p>sid@kgvl.co.in</p>
					</div>
					<div className="flex">
						<p className=""></p>
						<p>📞</p> <p className="font-bold mr-2">Phone: </p>
						<p>+91-96618 29944</p>
					</div>

					<div className="flex justify-center mt-2 md:justify-start text-lg">
						<div className="flex ">
							<a
								href="https://www.facebook.com/share/1EFtxnRMuL/"
								className="text-gray-700 text-3xl p-2 pl-0 rounded-full hover:bg-green-100 transition"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<FontAwesomeIcon icon={faFacebook} />
							</a>

							<a
								href="https://www.instagram.com/kgvllp?igsh=MWZwbnZxbG4xZnZz"
								className="text-gray-700 text-3xl p-2 rounded-full hover:bg-green-100 transition"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<FontAwesomeIcon icon={faInstagram} />
							</a>
							<a
								href="https://x.com/KGVllp?t=ecvFy4j65dHiRpRzpOWGtg&s=09"
								className="text-gray-700 text-3xl p-2 rounded-full hover:bg-green-100 transition"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Twitter"
							>
								<FontAwesomeIcon icon={faTwitter} />
							</a>
							<a
								href="https://www.linkedin.com/company/karishmaglobal/"
								className="text-gray-700 text-3xl p-2 rounded-full hover:bg-green-100 transition"
								aria-label="LinkedIn"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faLinkedinIn} />
							</a>
							<a
								href="mailto:team@kgvl.co.in"
								className="text-gray-700 text-4xl p-2 rounded-full hover:bg-green-100 transition-colors duration-200 inline-flex items-center justify-center"
								aria-label="Email"
								title="Email us"
								target="_blank"
								rel="noopener noreferrer"
							>
								<FontAwesomeIcon icon={faEnvelope} />
							</a>
						</div>
					</div>
				</div>
			</div>

			<p className="mt-8 text-center text-xl font-semibold text-green-600 relative z-10">
				Copyright © 2025 KARISHMA GLOBAL VENTURES
			</p>
		</footer>
	);
};
