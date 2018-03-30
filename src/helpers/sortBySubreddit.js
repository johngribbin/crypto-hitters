export default function sortBySubreddit(redditArr, cryptoName) {
	redditArr.forEach(function(obj) {
		// if subreddit name of news item contains chosen crypto name
		if (obj.data.subreddit.match(new RegExp(cryptoName, 'i'))) {
			var objMatch = redditArr.splice(redditArr.indexOf(obj), 1); // remove news item
			redditArr.unshift(objMatch[0]); // add to start of the array
		}
	});
	return redditArr;
}
