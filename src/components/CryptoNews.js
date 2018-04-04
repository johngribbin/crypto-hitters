import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

import leftArrow from '../image/left-arrow.png';
import questionMark from '../image/questionmark.png';
import x from '../image/x.png';
import chart from '../image/analytics.png';
import webSearch from '../image/websearch.png';

import getRedditResults from '../helpers/getRedditResults';
import sortBySubreddit from '../helpers/sortBySubreddit';

import RedditResults from './RedditResults';

import { Link } from 'react-router-dom';

class CryptoNews extends Component {
	constructor(props) {
		super(props);

		this.state = {
			redditResults: [],
			showModal: false
		};
		// the modal that opens when '?' at top of page is clicked.
		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	componentDidMount() {
		getRedditResults(this.props.chosenCryptoName).then(response => {
			var sortedRedditResults = sortBySubreddit(response.data.data.children, this.props.chosenCryptoName);

			this.setState({
				redditResults: sortedRedditResults
			});
		});
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.chosenCryptoName !== nextProps.chosenCryptoName) {
			getRedditResults(nextProps.chosenCryptoName).then(response => {
				var sortedRedditResults = sortBySubreddit(response.data.data.children, this.props.chosenCryptoName);

				this.setState({
					redditResults: sortedRedditResults
				});
			});
		}
	}

	handleOpenModal() {
		this.setState({ showModal: true });
	}

	handleCloseModal() {
		this.setState({ showModal: false });
	}

	render() {
		ReactModal.setAppElement('#root');

		return (
			<div className="news__container">
				<div className="news__reddit-container">
					<div className="news__icon-container">
						<Link to="/">
							<img className="news__left-arrow float-left" src={leftArrow} alt="left arrow icon" />
						</Link>
						<img
							className="news__question-mark"
							src={questionMark}
							onClick={this.handleOpenModal}
							alt="question mark icon"
						/>
						<ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
							<img className="news__x float-right" src={x} onClick={this.handleCloseModal} alt="X icon" />

							<div className="modal__container">
								<h2 className="modal__heading">Reddit Community Results</h2>
								<p className="modal__paragraph">
									This page aims to bring together the most relevant Reddit posts for the crypto asset
									chosen.
								</p>
								<ul className="modal__list">
									<li>Posts with more comments are given priority.</li>
									<li>
										Green colored SubReddit links signify a greater chance of a relevant post and
										will always appear first.
									</li>
									<li>
										Use the chart icon at top right of the page to view the previous 60 day price
										action.
									</li>
									<li>
										If posts displayed are not satisfactory, please make use of the web search (by
										DuckDuckGo) shortcut at the bottom of the page.
									</li>
								</ul>
							</div>
						</ReactModal>
						<Link to="/chart">
							<img className="news__chart-icon float-right" src={chart} alt="chart icon" />
						</Link>
					</div>

					<ul className="news__reddit-list">
						<RedditResults
							redditResults={this.state.redditResults}
							chosenCryptoName={this.props.chosenCryptoName}
						/>
					</ul>
					<div className="news__icon-container">
						<a
							href={`https://duckduckgo.com/?q=${
								this.props.chosenCryptoName
							}+cryptocurrency+news&t=hb&atb=v109-3&df=d&ia=web`}
							target="_blank"
						>
							<img className="news__web-search-icon" src={webSearch} alt="web search icon" />
						</a>
					</div>
				</div>
			</div>
		);
	}
}

CryptoNews.propTypes = {
	chosenCryptoName: PropTypes.string,
	chosenCryptoSymbol: PropTypes.string
};

export default CryptoNews;
