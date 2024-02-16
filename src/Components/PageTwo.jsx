import React from 'react'
import './Styles/Page2.css'
import page2img from '../assets/Images/page2.jpg'

const PageTwo = () => {
	return (
		<div className='page2'>
			<div className="page2__content">
				<p className='tale'>A tale of time</p>

				<div className="text-contents">
					<h2 className='header2'>
						Riding into the Sunset: A Journey through Time
					</h2>
					<p>
						<span className="colored-text">	As the adventurer races towards the disappearing sun, it's a reminder to embrace life's journey with bravery and passion. Each passing moment holds </span>the promise of new discoveries and experiences, urging us to seize the day and embark on our own quests. Let this captivating image be a beacon of inspiration, reminding us to chase our dreams with unwavering resolve, for the horizon is but a canvas for our aspirations.
					</p>
				</div>

			</div>
			<div className="page2__bg">
				<div className="page2__img-container">
					<img src={page2img} alt="" />
				</div>
			</div>
		</div>
	)
}

export default PageTwo
