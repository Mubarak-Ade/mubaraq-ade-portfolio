import React, {useState, useEffect, useRef} from 'react'
import profile from '../assets/profile.jpg'
import arrowLeft from '../assets/solid/arrow-left.svg'

function Hero() {
	// const [index, setIndex] = useState(0);
	
	const [changeBg, setChangeBg] = useState(0);
	const images = ["bg-img-1", "bg-img-2", "bg-img-3"]
	const transit = useRef();
	const interval = 2000

	useEffect(() => {
		const intervalId = setTimeout(() => {
			setChangeBg((changeBg + 1) % images.length)
			transit.current.style.transition = "ease-in-out 2s all"
		}, interval);
		return () => clearInterval(intervalId);
	}, [changeBg, images, interval]);


	// setTimeout(handleChange, 1000)
	return (
		<div id='hero' ref={transit} className={`h-screen md:p-32 
		text-[#ffffff] flex flex-col  ${images[changeBg]} 
		justify-around bg-cover bg-center w-full`}>
			<div className="flex flex-col-reverse items-center md:flex-row 
			m-4 justify-around">
				<h2 className="text-5xl">
					<span className='text-transparent font-bold relative overflow-hidden 
					before:content-["SHINA"] before:absolute before:top-0 before:left-0 before:w-0
					before:h-full before:border-r-[3px] before:overflow-hidden before:text-white
					before:animate-type'>SHINA</span>
				</h2>
				<div className="m-4">
					<img className='size-60 rounded-full' src={profile} alt="" />
				</div>
			</div>
			<div className="flex flex-col text-center items-center md:text-start md:items-baseline md:gap-10">
				<p className='font-serif text-xl text-pretty p-4'><p>Hi, I'm Mubaraq Ibrahim, a passionate web developer specializing<br />  in front-end technologies. 
					Explore my work and get to know me better.</p></p>
				<button className="mx-2 text-white bg-indigo-600 border-0 p-3 w-32 focus:outline-none hover:bg-indigo-700 rounded text-lg ">
						My Works
				</button>
			</div>
		</div>
	)
}

export default Hero