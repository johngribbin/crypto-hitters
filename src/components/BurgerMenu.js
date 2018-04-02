import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import linkedin from '../image/linkedin.png';
import github from '../image/github.png';

class BurgerMenu extends Component {
	render() {
		return (
			<Menu right>
				<div>
					<p>
						This site was created to present price fluctuations of crypto assets and the news/gossip that
						may have caused them. Crypto Hitters could not have been made without resources provided by{' '}
						<a
							className="white-text"
							target="_blank"
							rel="noopener noreferrer"
							href="https://coinmarketcap.com/"
						>
							CoinMarketCap
						</a>
						{', '}
						<a
							className="white-text"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.reddit.com/"
						>
							Reddit
						</a>
						{` and `}
						<a
							className="white-text"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.cryptocompare.com/"
						>
							CrytoCompare.
						</a>
						<br />
						<br />
						Crypto Hitters is open source and hosted on {''}
						<a
							className="white-text"
							target="_blank"
							rel="noopener noreferrer"
							href="https://github.com/johngribbin/crypto-hitters"
						>
							GitHub.
						</a>
						{''} If you wish to contact me directly, please do so via contact options below.
						<br />
						<br />
						Cheers,
						<br />John
					</p>
				</div>

				<div className="contact-modal__icon-container">
					<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/john-gribbin/">
						<img className="contact-modal__icon" src={linkedin} alt="linkedin logo" />
					</a>
					<a target="_blank" rel="noopener noreferrer" href="https://github.com/johngribbin">
						<img className="contact-modal__icon" src={github} alt="github logo" />
					</a>
				</div>
				<a className="contact-modal__email-link" href="mailto:johnggribbin@gmail.com">
					johnggribbin@gmail.com
				</a>
			</Menu>
		);
	}
}

export default BurgerMenu;
