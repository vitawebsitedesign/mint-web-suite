export function encodeHtmlId(r) {
	return r.replace(/\s+/g, '-')
		.replace(/'/g, '_');
}

export function dataFilenameToLocalDateTime(filename) {
	const timeInFilename = /(\d+)(-)(\d+)(\sUTC)$/;
	const timeInJSDateTime = /(\d{2}:\d{2})(:\d{2})(.+)/;

	const removedFileExtension = filename.replace(/.json/, '');
	const markedAsUtc = removedFileExtension + ' UTC';

	try {
		const replacedHyphenWithColonInTime = markedAsUtc.replace(timeInFilename, '$1:$3$4');
		const fullDateTimeStr = new Date(replacedHyphenWithColonInTime).toString();
		const dateAndTimeOnly = fullDateTimeStr.toString().replace(timeInJSDateTime, '$1');
		return dateAndTimeOnly;
	} catch(e) {
		console.error(e);
		return null;
	}
}
