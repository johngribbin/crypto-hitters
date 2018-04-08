import React, { Component } from 'react';
import ReactModal from 'react-modal';
import x from '../image/x.png';
import linkedin from '../image/linkedin.png';
import github from '../image/github.png';

class HeaderBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showAboutModal: false,
			showContactModal: false
		};

		this.handleOpenAboutModal = this.handleOpenAboutModal.bind(this);
		this.handleCloseAboutModal = this.handleCloseAboutModal.bind(this);
		this.handleOpenContactModal = this.handleOpenContactModal.bind(this);
		this.handleCloseContactModal = this.handleCloseContactModal.bind(this);
	}

	handleOpenAboutModal() {
		this.setState({ showAboutModal: true });
	}

	handleCloseAboutModal() {
		this.setState({ showAboutModal: false });
	}

	handleOpenContactModal() {
		this.setState({ showContactModal: true });
	}

	handleCloseContactModal() {
		this.setState({ showContactModal: false });
	}

	render() {
		return (
			<div className="header-bar__container">
				<h1 className="header-bar__app-title">CRYPTO HITTERS</h1>

				<div className="header-bar__icon-container hide-on-phone">
					<i class="material-icons md-36" onClick={this.handleOpenAboutModal}>
						info_outline
					</i>

					<i class="material-icons md-36" onClick={this.handleOpenContactModal}>
						email
					</i>
				</div>

				<ReactModal isOpen={this.state.showAboutModal} contentLabel="Minimal Modal Example">
					<img className="news__x float-right" src={x} onClick={this.handleCloseAboutModal} alt="X icon" />

					<div className="modal__container">
						<p className="modal__paragraph">
							This site was created to present price fluctuations of crypto assets and the news/gossip
							that may have caused them. Crypto Hitters could not have been made without resources
							provided by{' '}
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
							{''} If you wish to contact me directly, please do so via the contact options.
							<br />
							<br />
							Cheers,
							<br />John
						</p>
					</div>
				</ReactModal>

				<ReactModal isOpen={this.state.showContactModal} contentLabel="Minimal Modal Example">
					<img className="news__x float-right" src={x} onClick={this.handleCloseContactModal} alt="X icon" />

					<div className="modal__container">
						<div className="contact-modal__icon-container">
							<a
								target="_blank"
								rel="noopener noreferrer"
								href="https://www.linkedin.com/in/john-gribbin/"
							>
								<img className="contact-modal__icon" src={linkedin} alt="linkedin logo" />
							</a>
							<a target="_blank" rel="noopener noreferrer" href="https://github.com/johngribbin">
								<img className="contact-modal__icon" src={github} alt="github logo" />
							</a>
						</div>
						<a className="contact-modal__email-link" href="mailto:johnggribbin@gmail.com">
							johnggribbin@gmail.com
						</a>
					</div>
				</ReactModal>
			</div>
		);
	}
}

export default HeaderBar;
