var moment = require('moment');

// Regex for matching days of the week.
var daysOfTheWeek = /\b((mon|tues|wed(nes)?|thur(s)?|fri|sat(ur)?|sun)(day)?)\b/gi;

// Regex for testing if sentence refers to the current week.
var currentWeek = /\b(on|this)\b/gi

// Regex for testing if sentence refers to the next week.
var nextWeek = /\b(next|following)\b/gi

function parseDate(sentence) {
	// Format to be used when returning date information
	const DATE_FORMAT = 'dddd, MMMM Do YYYY';

	if (/\b(today)\b/gi.test(sentence)) {
		return moment().format(DATE_FORMAT);
	}

	// Match the day of the week from the sentence. 
	var day = sentence.match(daysOfTheWeek)[0] || undefined;

	if (!day) {
		throw new Error('No day of the week specified.');
	}

	if (currentWeek.test(sentence)) {
		var date = moment().day(day);
		
		if (date.diff(moment()) < 0) {
			date.add(7, 'days');
			return date.format(DATE_FORMAT);
		} else {
			return date.format(DATE_FORMAT);
		}
	} else if (nextWeek.test(sentence)) {
		return moment().day(day).add(7, 'days').format(DATE_FORMAT);
	}
}
