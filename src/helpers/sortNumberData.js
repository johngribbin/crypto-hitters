export default function sortNumberData(currentArr, headerName) {
	const sortedArr = currentArr.sort(function(a, b) {
		return b[headerName] - a[headerName];
	});
	return sortedArr;
}
