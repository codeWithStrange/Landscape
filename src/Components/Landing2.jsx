import React, { useEffect, useState, useRef } from 'react'
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft, faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(TextPlugin);


const Landing = () => {
	useEffect(() => {
		const words = [
			'Statistics reflect the exact data, collected from authentic sources',
			'Statistics is the science of learning from data, and of measuring, controlling, and communicating uncertainty.'
		];

		let mainTimeline = gsap.timeline({
			repeat: -1 
		});

		words.forEach((word, index) => {
			let textTimeline = gsap.timeline({
				repeat: 1,
				yoyo: true,
				repeatDelay: 1 
			});

			textTimeline.to('.typewriter', {
				duration: 3, 
				text: word, 
				ease: 'power1.inOut'
			});

			mainTimeline.add(textTimeline);
		});

		return () => {
			
			mainTimeline.kill();
		};
	}, []);





	useEffect(() => {
		const lenis = new Lenis()

		lenis.on('scroll', ScrollTrigger.update)

		gsap.ticker.add((time) => {
			lenis.raf(time * 1000)
		})

		gsap.ticker.lagSmoothing(0)

		return () => {

		}
	}, [])


	useEffect(() => {
		const bgWrapper = document.querySelector('.bg-wrapper');
		const backgrounds = document.querySelectorAll('[class^="bg-"]');
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: bgWrapper,
				start: 'top top',
				scrub: true,
			},
		});

		
		backgrounds.forEach(bg => {
			const speed = bg.dataset.scrollSpeed;
			tl.to(
				bg, {
				y: 40 * speed,
				duration: 2
			}, 0)
		})



	}, [0]);






	const [time, setTime] = useState(new Date());
	const [mode, setMode] = useState('Day')
	function handleMode() {
		setTimeout(() => {
			setMode(prevState => prevState === 'Day' ? 'Night' : 'Day')
		}, 150);

	}

	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	const hour = time.getHours();
	const minute = time.getMinutes();

	const overlayStyle = {
		position: 'absolute',
		top: 0,
		bottom: 0,
		right: 0,
		left: 0,
		backgroundColor: mode === 'Night' ? 'rgba(6, 6, 6, 0.7)' : mode === 'Day' ? 'rgba(6, 6, 6, 0.4)' : '',
		zIndex: -1,
		display: 'block',
	};

	useEffect(() => {
		document.querySelector('.bottom-1')
			.classList.add('load');
		document.querySelector('.bottom-2')
			.classList.add('load');
		document.querySelector('.bottom-3')
			.classList.add('load');
		document.querySelector('.bottom-4')
			.classList.add('load');
		document.querySelector('.bottom-5')
			.classList.add('load');
		document.querySelector('.first')
			.classList.add('load');
		document.querySelector('.middle-right')
			.classList.add('load');
		document.querySelector('.middle-left')
			.classList.add('load');

	})


	return (
		<>
			<div className="main">
				<div style={overlayStyle}></div>
				<div className="bg-wrapper">
					<div className="bg-4" data-scroll-speed='5'></div >
					<div className="bg-3" data-scroll-speed='5'></div >
					<div className="bg-2" data-scroll-speed='5'></div >
					<div className="bg-1" data-scroll-speed='4'></div >
				</div>

				<div className="top">
					<div className="first">
						<h1>LANDSCAPE</h1>
						<div className='time-mode' onClick={handleMode}>
							<FontAwesomeIcon icon={mode === "Day" ? faSun : faMoon} style={{ color: "white", }} className="mode-svg" />
						</div>
					</div>
				</div>
				<div className="middle">
					<div className="middle-left">
						<div className="middle-left-up">
							<h3>The North Lake Iceland</h3>
						</div>
						<div className="middle-left-down">
							<div className="arrow-left arrows">
								<FontAwesomeIcon icon={faArrowLeft} style={{ color: "black", }} />
							</div>
							<div className="arrow-right arrows">
								<FontAwesomeIcon icon={faArrowRight} style={{ color: "black", }} />
							</div>


						</div>



					</div>
					<div className="middle-right">
						<a href="#">
							-16&deg;C very cold
						</a>
					</div>
				</div>
				<div className="bottom">
					<div className="bottom-1 bottom-section">
						<div className="bottom-title">
							<p>Statistics</p>
						</div>
						<div className="bottom-main">
							<span className="typewriter">

							</span>
							<span className="cursor"></span>

						</div>
					</div>
					<div className="bottom-2 bottom-section">
						<div className="bottom-title">
							Coverage kms
						</div>
						<div className="bottom-main number">
							11
						</div>
					</div>
					<div className="bottom-3 bottom-section">
						<div className="bottom-title">
							Flight
						</div>
						<div className="bottom-main number">
							7
						</div>
					</div>
					<div className="bottom-4 bottom-section">
						<div className="bottom-title">
							Time
						</div>
						<div className="bottom-main time">
							{hour < 10 && '0'}{hour}:{minute < 10 && '0'}{minute}
						</div>
					</div>
					<div className="bottom-5 bottom-section">
						<div className="bottom-title">
							Get your ticket <br /> for the lowest price
						</div>
						<div className="bottom-main">
							<button>More Info</button>
						</div>
					</div>
				</div>
			</div>

		</>
	)
}

export default Landing
