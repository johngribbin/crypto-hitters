import React, { Component } from 'react';
import ReactModal from 'react-modal';
import linkedin from '../image/linkedin.png';
import github from '../image/github.png';

class HeaderBar extends Component {
	state = {
		showAboutModal: false,
		showContactModal: false
	};

	handleOpenAboutModal = () => {
		this.setState({ showAboutModal: true });
	};

	handleCloseAboutModal = () => {
		this.setState({ showAboutModal: false });
	};

	handleOpenContactModal = () => {
		this.setState({ showContactModal: true });
	};

	handleCloseContactModal = () => {
		this.setState({ showContactModal: false });
	};

	render() {
		ReactModal.setAppElement('#root');
		const { showAboutModal, showContactModal } = this.state;
		const { handleOpenAboutModal, handleCloseAboutModal, handleOpenContactModal, handleCloseContactModal } = this;

		return (
			<div className="header-bar__container">
				<h1 className="header-bar__app-title">CRYPTO HITTERS</h1>

				<div className="header-bar__icon-container hide-on-phone">
					<i className="material-icons md-36" onClick={handleOpenAboutModal}>
						info_outline
					</i>

					<i className="material-icons md-36" onClick={handleOpenContactModal}>
						email
					</i>
				</div>

				<ReactModal isOpen={showAboutModal} contentLabel="Minimal Modal Example">
					<i className="material-icons md-36 float-right" onClick={handleCloseAboutModal}>
						close
					</i>

					<div className="modal__container">
						<div className="modal__content-container">
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
					</div>
				</ReactModal>

				<ReactModal isOpen={showContactModal} contentLabel="Minimal Modal Example">
					<i className="material-icons md-36 float-right" onClick={handleCloseContactModal}>
						close
					</i>

					<div className="modal__container">
						<div className="modal__content-container">
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
					</div>
				</ReactModal>
			</div>
		);
	}
}

export default HeaderBar;
