import YamhaBike from '../resource/YamhaBike.png';
import { Link } from 'react-router-dom';
import backgroundView from '../resource/backgroundView.jpg';
import group from '../resource/group.png';
import kgvmitra from '../resource/kgvmitra1.png';
import mountain from '../resource/mountain.png';
import Vector from '../resource/Vector.png';
import YamhaBike1 from '../resource/YamhaBike1.png';
import AvgBike1 from '../resource/AvgBike1.png';
import EnergyFrame from '../resource/EnergyFrame.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faTwitter,
	faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import ComponentsCard from '../components/ComponentsCard';

export function Home() {
	return (
		<main className="w-full min-h-screen bg-white font-sans">
			<section className="relative w-full min-h-[60vh] py-12 md:py-20 bg-white flex flex-col items-center justify-center text-center overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center z-0 bg-no-repeat bg-red-500"
					style={{
						backgroundImage: `url(${backgroundView})`,
						opacity: 0.3,
					}}
					maxHeight="60%"
				></div>

				<h1 className="relative font-playfair text-green-900 font-bold text-5xl md:text-3xl lg:text-4xl uppercase tracking-wide z-10">
					World's First Smart E-Mobility Solution
				</h1>

				<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-6xl mt-8 md:mt-16 px-4 ml-[-80px]">
					<div className="relative p-6 md:p-10 rounded-3xl w-full md:w-1/2 text-white z-10 flex flex-col justify-center">
						<img
							src={group}
							alt="Background Blob"
							className="absolute top-0 left-0 w-full h-full object-contain z-[-1] min-h-[500px]"
						/>

						<div className="text-left pl-24">
							<h1 className="font-playfair font-medium text-xs sm:text-sm md:text-2xl lg:text-3xl uppercase tracking-wide leading-snug">
								<span className="block">World's First</span>
								<span className="block">Smart E-Mobility</span>
								<span className="block">Solution</span>
							</h1>

							<hr className="mt-2 border-white w-80 border-t-2" />

							<p className="text-[8px] md:text-base text-white/90 leading-relaxed p-2 rounded mt-4">
								<span className="block">
									At Karishma Global Ventures LLP, we are
								</span>
								<span className="block">
									revolutionizing the future of transportation.
								</span>
								<span className="block">
									Our cutting-edge Smart E-Mobility Solution
								</span>
								<span className="block">
									enables you to convert your conventional petrol
								</span>
								<span className="block">
									bike into a hybrid bike that runs seamlessly
								</span>
								<span className="block">on both petrol and battery power.</span>
								<span className="block">
									This innovation combines the best of both worlds-
								</span>
								<span className="block">
									fossil fuel reliability with the efficiency and{' '}
								</span>
								<span className="block">
									eco-friendliness of electric power.
								</span>
							</p>
						</div>
					</div>

					<div className="relative w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
						<img
							src={YamhaBike}
							alt="Hybrid Bike"
							width={500}
							height={400}
							className="object-contain scale-x-[-1]"
						/>
					</div>
				</div>

				<div className="w-full flex justify-end pr-8 z-10">
					{' '}
					{/* full-width container with right padding */}
					<div className="flex gap-6 mt-4">
						<a
							href="https://www.instagram.com/kgvllp?igsh=MWZwbnZxbG4xZnZz"
							className="text-green-700 text-3xl p-2 rounded-full hover:bg-green-100 transition"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Instagram"
						>
							<FontAwesomeIcon icon={faInstagram} />
						</a>
						<a
							href="https://x.com/KGVllp?t=ecvFy4j65dHiRpRzpOWGtg&s=09"
							className="text-green-700 text-3xl p-2 rounded-full hover:bg-green-100 transition"
							target="_blank"
							rel="noopener noreferrer"
							aria-label="Twitter"
						>
							<FontAwesomeIcon icon={faTwitter} />
						</a>
						<a
							href="https://www.linkedin.com/company/karishmaglobal/"
							className="text-green-700 text-3xl p-2 rounded-full hover:bg-green-100 transition"
							aria-label="LinkedIn"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faLinkedinIn} />
						</a>
						<a
							href="mailto:team@kgvl.co.in"
							className="text-green-700 text-3xl p-2 rounded-full hover:bg-green-100 transition-colors duration-200 inline-flex items-center justify-center"
							aria-label="Email"
							title="Email us"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FontAwesomeIcon icon={faEnvelope} />
						</a>
					</div>
				</div>
			</section>

			{/* Bottom Section */}
			<section
				className="bg-green-700 text-white px-6 flex flex-col md:flex-row items-center justify-between max-full mx-auto"
				style={{
					backgroundImage: `url(${mountain})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center 80%',
				}}
			>
				<p className="text-xl md:text-lg max-w-4xl ml-24 ">
					Karishma Global Ventures LLP, we are revolutionizing the future of
					transportation. Our cutting-edge Smart E-Mobility Solution enables you
					to convert your conventional petrol bike into a hybrid Bike that runs
					seamlessly on both petrol and battery power. This innovation combines
					the best of both worlds-fossil fuel reliability with the efficiency
					and eco-friendliness of electric power.
				</p>
				<img
					src={kgvmitra}
					alt="KGV Mascot"
					width={280}
					height={280}
					className="mt-6 md:mt-0 mr-32  lg:scale-100"
				/>
			</section>
			<div className="w-screen bg-white rounded-xl shadow-2xl">
				<h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-playfair text-green-950 text-center my-6">
					Our <span className="text-green-600">Products.</span>
				</h2>

				<div
					className="relative w-screen h-[90vh] flex flex-col items-center justify-center bg-[#F2E6DA]"
					style={{
						backgroundImage: `url(${EnergyFrame})`,
						backgroundSize: 'contain',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center bottom ',
					}}
				>
					<Link to={'/booking'}>
						<button
							className="
      absolute  top-5 sm:top-8 md:top-16 lg:top-20  left-1/2 transform -translate-x-1/2 
      flex items-center justify-center 
      gap-2 
      bg-red-600 hover:bg-red-700 active:scale-95 
      transition-all duration-200 
      text-white 
      text-sm sm:text-base md:text-base lg:text-lg 
      font-bold 
      px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 lg:px-7 lg:py-3 
      rounded-xl 
      mt-6
    "
						>
							<span className="whitespace-nowrap">Know More</span>
							<img src={Vector} alt="Vector" className="h-[16px] w-[16px]" />
						</button>
					</Link>

					{/* Bikes with swap animation */}
					<img
						alt="AvgBike1"
						src={AvgBike1}
						className="bike-swap"
						loading="lazy"
					/>
					<img
						alt="YamhaBike1"
						src={YamhaBike1}
						className="bike-swap-reverse"
						loading="lazy"
					/>
				</div>
			</div>

			<div className="bg-white rounded-xl shadow-2xl p-6 text-center max-w-4xl mx-auto my-8">
				<h2 className="text-2xl font-bold text-green-600 mb-6">
					The Components of Our Kit
				</h2>
				<div className="grid md:grid-cols-2 gap-6 text-center">
					<ComponentsCard
						heading="KGV SMART MOTOR"
						content="A KGV SMART MOTOR is an electric motor that is integrated into the
							hub of a vehicle’s wheel which directly drives the vehicle wheels.
							These vehicle hub motors are used in the application of E-mobility
							to drive trains in electric vehicles which can give the solution
							of an easy wheel drive system in the 2-wheeler or 4-wheel drive
							system."
					/>
					<ComponentsCard
						heading="KGV E-POWER HOUSE"
						content="The KGV E-POWER HOUSE is used to control and manage the power
              output through the motor, digital meter, and other accessories in
              hybrid electric vehicles. The KGV E-POWER HOUSE is single-phase
              with a power range of 1-2.5KW, a voltage range of 36-72V with a
              current supply of 20-40A."
					/>
					<ComponentsCard
						heading="DUEL FUEL THROTTLE"
						content="The DUEL FUEL THROTTLE is based on a Hall effect magnetic sensor
							for long operational life for the throttle speed controlled by the
							switches as Low-Medium-High and also for Forwa rd/Reverse
							direction."
					/>
					<ComponentsCard
						heading="DC/DC CONVERTER"
						content="A DC/DC converter is an electromechanical device that converts the
							direct current source from one level to another level that's high
							to low or vice versa. These DC/DC converters are used in high to
							low conversion in this application for 72/60/48V to 12 Volts."
					/>
					<ComponentsCard
						heading="HARNESS"
						content="Wire and accessories contain the wiring, male and female
							connectors, and battery box with other accessories to require the
							battery box fixing."
					/>
				</div>
			</div>

			<div className="bg-white py-10 px-4 sm:px-6 lg:px-8">
				{/* Top Box */}
				<div className="bg-white rounded-xl shadow-lg p-6 max-w-4xl mx-auto text-center">
					<h2 className="text-2xl font-bold font-inter text-green-700 ">
						Green Drive KGV E-Hybrid Bike{' '}
						<span className="text-orange-600">@14 Paise Per KM</span>
					</h2>
					<p className="text-lg text-gray-700 mt-1 mb-4 font-inter mx-12">
						Our CEO and MD are the driving force behind our innovation and
						success, leading with expertise and a commitment to excellence.
					</p>
					{/* <div className="flex flex-col md:flex-row justify-between items-center m-6 ">
            <div className="flex items-start text-green-600 text-sm font-medium  mt-8">
              <p className="text-7xl font-inter font-bold rotate-[-90deg] leading-none mt-6">
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  0
                </span>
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  %
                </span>
              </p>

              <div className="text-left text-xl font-bold ml-[-4px]">
                <p>Air Pollution</p>
                <p>Noise Pollution</p>
                <p>Range Anxiety</p>
                <p>Dependability on Petrol</p> 
                <p>Carbon Emission</p>
              </div>
            </div>

            <div className="flex items-start text-orange-600 text-sm font-medium  mt-8 ml-[-60px]">
              <p className="text-7xl font-inter font-bold rotate-[-90deg] leading-none mt-6">
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  1
                </span>
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  0
                </span>
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  0
                </span>
                <span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
                  %
                </span>
              </p>
              <div className="text-left text-xl font-bold ml-[-40px]">
                <p>Gearless Automatic Drive</p>
                <p>Powered By Dual Fuel tech</p>
                <p>Portable Charging batteries</p>
                <p>Fulfills 8 goals of SDG</p>
              </div>
            </div>
          </div> */}
					<div className="flex flex-col md:flex-row justify-between items-center gap-8 m-6">
						{/* Left */}
						<div className="flex items-start text-green-600 text-sm font-medium mt-8">
							<p className="text-5xl sm:text-6xl md:text-7xl font-inter font-bold rotate-[-90deg] leading-none mt-6">
								<span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
									0
								</span>
								<span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
									%
								</span>
							</p>

							<div className="text-left text-base sm:text-lg md:text-xl font-bold ml-[-4px] space-y-1">
								<p>Air Pollution</p>
								<p>Noise Pollution</p>
								<p>Range Anxiety</p>
								<p>Dependability on Petrol</p>
								<p>Carbon Emission</p>
							</div>
						</div>

						{/* Right */}
						<div className="flex items-start text-orange-600 text-sm font-medium mt-8">
							{/* Wrapper for 100% */}
							<div className="flex-shrink-0 w-[100px] sm:w-[120px] md:w-[140px] flex justify-center items-center ">
								<p className="text-5xl sm:text-6xl md:text-7xl font-inter font-bold rotate-[-90deg] leading-none mt-6 whitespace-nowrap">
									<span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
										1
									</span>
									<span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
										0
									</span>
									<span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
										0
									</span>
									<span className="drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)]">
										%
									</span>
								</p>
							</div>

							<div className="text-left text-base sm:text-lg md:text-xl font-bold ml-[-4px] space-y-1">
								<p>Gearless Automatic Drive</p>
								<p>Powered By Dual Fuel tech</p>
								<p>Portable Charging batteries</p>
								<p>Fulfills 8 goals of SDG</p>
							</div>
						</div>
					</div>
				</div>

				{/* Section Title */}
				<h3 className="text-center text-3xl font-playfair font-bold text-green-800 mt-12 mb-6">
					What makes <span className="text-green-600">KGV Better</span> than the
					rest
					<span className="text-green-600">?</span>
				</h3>
				<hr className="w-2/4 mx-auto border-t-2 border-green-600 mb-6" />

				{/* Connector Line */}
				<div className="relative flex justify-center items-start mx-auto max-w-7xl px-4 md:px-10 pt-10 overflow-x-auto">
					{/* Horizontal Line */}
					<div className="absolute top-6 left-0 right-0 h-0.5 bg-black z-0 ml-8 mr-8 sm:mx-20"></div>

					{/* Nodes */}
					<div className="flex flex-wrap justify-between w-full  text-sm z-10 mt-[-14px]">
						{/* Reusable Node Component */}
						{[
							'Warranty Provided',
							'No tampering with engine, Gears or Clutch',
							'Dual Fuel Technology',
							'Reduce Air & Noise pollution',
							'Charging as per convenience - Portable Battery',
							'No range anxiety',
						].map((text, idx) => (
							<div
								key={idx}
								className="flex flex-col items-center w-[160px] md:w-[180px]"
							>
								{/* Vertical line */}
								<div className="w-0.5 h-6 bg-black"></div>

								{/* Bubble */}
								<div className="bg-green-600 text-white px-4 py-3 rounded-full font-normal text-center w-full h-[80px] flex items-center justify-center text-xs md:text-sm leading-tight">
									{text.split('\n').map((line, i) => (
										<span key={i}>
											{line}
											<br />
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="bg-gradient-to-r from-purple-800 via-pink-600 to-yellow-400 py-12 px-4 sm:px-6 lg:px-8">
				<div className=" text-white rounded-xl p-10 max-w-7xl mx-auto ">
					{/* Title and Description */}
					<h2 className="text-4xl font-bold text-center text-yellow-400 mb-4">
						SDG Goals
					</h2>
					<p className="text-center text-sm md:text-xl max-w-3xl mx-auto mb-10">
						At Karishma Global Ventures, we are committed to achieving several
						Sustainable Development Goals (SDGs) set by the United Nations. Our
						primary focus areas include providing affordable and sustainable
						mobility solutions, reducing carbon emissions, promoting renewable
						energy usage, and contributing to economic growth and social equity.
						Through innovation and collaboration, we aim to make a positive
						impact on the environment and society, creating a better and more
						sustainable future for all.
					</p>

					{/* SDG Cards Grid */}
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-center">
						{/* Each Card */}
						<div className="bg-green-600 p-4 rounded text-white text-center font-bold text-lg">
							<div className="text-4xl mb-2">3</div>
							GOOD HEALTH <br /> AND WELL-BEING
						</div>
						<div className="bg-yellow-400 p-4 rounded text-white text-center font-bold text-lg">
							<div className="text-4xl mb-2">7</div>
							AFFORDABLE AND <br /> CLEAN ENERGY
						</div>
						<div className="bg-orange-500 p-4 rounded text-white text-center font-bold text-lg">
							<div className="text-4xl mb-2">9</div>
							INDUSTRY, INNOVATION <br /> AND INFRASTRUCTURE
						</div>
						<div className="bg-orange-400 p-4 rounded text-white text-center font-bold text-lg">
							<div className="text-4xl mb-2">11</div>
							SUSTAINABLE CITIES <br /> AND COMMUNITIES
						</div>
						<div className="bg-yellow-600 p-4 rounded text-white text-center font-bold text-lg">
							<div className="text-4xl mb-2">12</div>
							RESPONSIBLE <br /> CONSUMPTION <br /> AND PRODUCTION
						</div>
						<div className="bg-green-700 p-4 rounded text-white text-center font-bold text-lg">
							<div className="text-4xl mb-2">13</div>
							CLIMATE <br /> ACTION
						</div>
						<div className="bg-green-600 p-4 rounded text-white text-center font-bold text-lg">
							<div className="text-4xl mb-2">15</div>
							LIFE <br /> ON LAND
						</div>
						<div className="bg-blue-800 p-4 rounded text-white text-center font-bold text-lg">
							<div className="text-4xl mb-2">17</div>
							PARTNERSHIPS <br /> FOR THE GOALS
						</div>
					</div>
				</div>
			</div>
		</main>
	);
}
