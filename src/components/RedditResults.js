import React, { Component } from 'react';
import PropTypes from 'prop-types';

const backupImg = 'https://b.thumbs.redditmedia.com/bPKOyEBxXWkTmItsSshOs-j273O2_3ZlrU9tbqnSC9Q.jpg';

class RedditResults extends Component {
	render() {
		return this.props.redditResults.map(result => (
			<li key={result.data.id} className="news__reddit-item">
				<div className="news__reddit-item-content small-text">
					<a href={result.data.url} target="_blank">
						<img
							className="news__reddit-item-thumbnail"
							src={result.data.thumbnail !== 'self' ? result.data.thumbnail : backupImg}
							href={result.data.url}
							target="_blank"
							alt="Reddit Thumbnail"
						/>
					</a>
					<h3>
						{result.data.title.length > 100
							? `${result.data.title.substring(0, 100)}...`
							: result.data.title}
					</h3>
					<p>{result.data.num_comments} comments</p>
					<a className="news__reddit-item-link" href={result.data.url} target="_blank">
						Link
					</a>
					<a
						className={
							// if subreddit name contains the chosenCryptoName, render the link green
							result.data.subreddit.match(new RegExp(this.props.chosenCryptoName, 'i'))
								? 'news__reddit-item-link float-right regular-green'
								: 'news__reddit-item-link float-right'
						}
						href={`https://www.reddit.com/r/${result.data.subreddit}`}
						target="_blank"
						name={result.data.subreddit}
					>
						Subreddit
					</a>
				</div>
			</li>
		));
	}
}

RedditResults.propTypes = {
	redditResults: PropTypes.arrayOf(PropTypes.object),
	chosenCryptoName: PropTypes.string
};

export default RedditResults;
