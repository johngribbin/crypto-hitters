import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import getRedditResults from '../helpers/getRedditResults';
import sortBySubreddit from '../helpers/sortBySubreddit';
import RedditResults from './RedditResults';
import { Link } from 'react-router-dom';

class CryptoNews extends Component {
	state = {
		redditResults: [],
		showModal: false
	};

	componentDidMount() {
		const { chosenCryptoName } = this.props;

		getRedditResults(chosenCryptoName).then(response => {
			let sortedRedditResults = sortBySubreddit(response.data.data.children, chosenCryptoName);

			this.setState({
				redditResults: sortedRedditResults
			});
		});
	}

	componentWillReceiveProps(nextProps) {
		const { chosenCryptoName } = this.props;

		if (chosenCryptoName !== nextProps.chosenCryptoName) {
			getRedditResults(nextProps.chosenCryptoName).then(response => {
				let sortedRedditResults = sortBySubreddit(response.data.data.children, chosenCryptoName);

				this.setState({
					redditResults: sortedRedditResults
				});
			});
		}
	}

	handleOpenModal = () => {
		this.setState({ showModal: true });
	};

	handleCloseModal = () => {
		this.setState({ showModal: false });
	};

	render() {
		ReactModal.setAppElement('#root');
		const { showModal, redditResults } = this.state;
		const { handleOpenModal, handleCloseModal } = this;
		const { chosenCryptoName, chosenCryptoSymbol } = this.props;

		return (
			<div>
				<h1 className="news__app-title">CRYPTO HITTERS</h1>
				{/* help icon moves to top right on cell phone view */}
				<div className="news__phone-help-icon">
					<i className="material-icons md-36" onClick={handleOpenModal}>
						help
					</i>
				</div>
				<section className="news__header-section">
					<div className="news__icon-container--left">
						<Link to="/">
							<i className="material-icons md-48 float-left">keyboard_arrow_left</i>
						</Link>
					</div>

					<div className="news__header-container-center">
						<div className="news__crypto-logo-name-container">
							<img
								className="news__ticker-image"
								src={`https://raw.githubusercontent.com/cjdowner/cryptocurrency-icons/master/128/color/${chosenCryptoSymbol.toLowerCase()}.png`}
								alt={chosenCryptoSymbol}
							/>
							<h1 className="news__header-text">{chosenCryptoName}</h1>
						</div>
						REDDIT COMMUNITY RESULTS
					</div>

					<div className="news__icon-container--right">
						<a
							href={`https://duckduckgo.com/?q=${chosenCryptoName}+cryptocurrency+news&t=hb&atb=v109-3&df=d&ia=web`}
							target="_blank"
						>
							<div className="hide-on-phone">
								<i className="material-icons md-36">language</i>
							</div>
						</a>
						<Link to="/chart">
							<i className="material-icons md-36">show_chart</i>
						</Link>
						<div className="hide-on-phone">
							<i className="material-icons md-36" onClick={handleOpenModal}>
								help
							</i>
						</div>
					</div>
				</section>

				{/* this is the 'help' modal content */}
				<ReactModal isOpen={showModal} contentLabel="Minimal Modal Example">
					<i className="material-icons md-36 float-right" onClick={handleCloseModal}>
						close
					</i>
					<div className="modal__container">
						<div className="modal__content-container">
							<h2 className="modal__heading">REDDIT COMMUNITY RESULTS</h2>
							<p className="modal__paragraph">
								This page aims to bring you the most relevant Reddit posts for the crypto asset chosen.
							</p>
							<ul className="modal__list">
								<li className="modal__list-item">Posts with more comments are given priority.</li>
								<li className="modal__list-item">
									Green colored SubReddit links signify a greater chance of a relevant post and will
									always appear first.
								</li>
								<li className="modal__list-item">
									Click the chart icon to view the previous 60 days price action.
								</li>
								<li className="modal__list-item">
									If reddit posts are not satisfactory, click the globe icon to launch a web search by
									DuckDuckGo.
								</li>
								{/* the globe icon appears inside help modal on cellphone views */}
								<li className="modal__list-item modal__globe-icon-list-item">
									<a
										href={`https://duckduckgo.com/?q=${chosenCryptoName}+cryptocurrency+news&t=hb&atb=v109-3&df=d&ia=web`}
										target="_blank"
									>
										<div className>
											<i className="material-icons md-36">language</i>
										</div>
									</a>
								</li>
							</ul>
						</div>
					</div>
				</ReactModal>

				<ul className="news__reddit-list">
					<RedditResults redditResults={redditResults} chosenCryptoName={chosenCryptoName} />
				</ul>
			</div>
		);
	}
}

CryptoNews.propTypes = {
	chosenCryptoName: PropTypes.string,
	chosenCryptoSymbol: PropTypes.string
};

export default CryptoNews;
