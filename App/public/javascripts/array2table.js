// build HTML table data from an array (one or two dimensional)
function generateTable(data) {
	var html = '';

	if (typeof (data[0]) === 'undefined') {
		return null;
	}

	if (data[0].constructor === String) {
		html += '<tr>\r\n';
		for (var item in data) {
			html += '<td>' + data[item] + '</td>\r\n';
		}
		html += '</tr>\r\n';
	}

	if (data[0].constructor === Array) {
		for (var row in data) {
			html += '<tr>\r\n';
			for (var item in data[row]) {
				html += '<td>' + data[row][item] + '</td>\r\n';
			}
			html += '</tr>\r\n';
		}
	}

	if (data[0].constructor === Object) {
		for (var row in data) {
			html += '<tr>\r\n';
			for (var item in data[row]) {
				html += '<td>' + item + ':' + data[row][item] + '</td>\r\n';
			}
			html += '</tr>\r\n';
		}
	}

	return html;
}