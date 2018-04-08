import React, { Component } from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';

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
							<i class="material-icons md-36 float-left">keyboard_arrow_left</i>
						</Link>
						<a
							href={`https://duckduckgo.com/?q=${
								this.props.chosenCryptoName
							}+cryptocurrency+news&t=hb&atb=v109-3&df=d&ia=web`}
							target="_blank"
						>
							<i class="material-icons md-36">language</i>
						</a>
						<Link to="/chart">
							<i class="material-icons md-36">show_chart</i>
						</Link>
						<i class="material-icons md-36" onClick={this.handleOpenModal}>
							help
						</i>

						<ReactModal isOpen={this.state.showModal} contentLabel="Minimal Modal Example">
							<i class="material-icons md-36 float-right" onClick={this.handleCloseModal}>
								close
							</i>
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
					</div>

					<ul className="news__reddit-list">
						<RedditResults
							redditResults={this.state.redditResults}
							chosenCryptoName={this.props.chosenCryptoName}
						/>
					</ul>
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
