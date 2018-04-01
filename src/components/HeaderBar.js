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
				<a className="header-bar__link hide-on-phone" onClick={this.handleOpenAboutModal}>
					<h3 className="header-bar__link-text">About</h3>
				</a>
				<h1 className="header-bar__header-text">Crypto Hitters</h1>
				<a className="header-bar__link hide-on-phone" onClick={this.handleOpenContactModal}>
					<h3 className="header-bar__link-text">Contact</h3>
				</a>
				<ReactModal isOpen={this.state.showAboutModal} contentLabel="Minimal Modal Example">
					<img className="news__x float-right" src={x} onClick={this.handleCloseAboutModal} alt="X icon" />

					<div className="modal__container">
						<p className="modal__paragraph">
							I have often found myself in a repititive loop that involves checking daily moves of various
							crypto assets followed by making my way to reddit in the hope of finding out the news/gossip
							that may have led to the move.
							<br />
							<br />
							With this app I decided to bring together these steps by combining cold hard data (in the
							form of the table and the chart) and hopefully enough relevant posts from the the crypto
							reddit community. All of the code is open source and hosted on {''}
							<a
								className="white-text"
								target="_blank"
								rel="noopener noreferrer"
								href="https://github.com/johngribbin/crypto-hitters"
							>
								GitHub.
							</a>
							<br />
							<br />
							Please feel free to fork the code, open a request, or reach out to me via the contact links
							with any suggestions you might have.
							<br />
							<br />
							Cheers, John.
						</p>
					</div>
				</ReactModal>

				<ReactModal isOpen={this.state.showContactModal} contentLabel="Minimal Modal Example">
					<img className="news__x float-right" src={x} onClick={this.handleCloseContactModal} alt="X icon" />

					<div className="modal__container">
						<a className="contact-modal__email-link" href="mailto:johnggribbin@gmail.com">
							<h2 className="modal__heading">johnggribbin@gmail.com</h2>
						</a>

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
					</div>
				</ReactModal>
			</div>
		);
	}
}

export default HeaderBar;
