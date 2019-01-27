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

	if (date.diff(moment()) < 0) {
		date.add(7, 'days');
	}

	console.log(date.format("dddd, MMMM Do YYYY"));

} else if (/\b(today)\b/gi.test(testSentence)) {
	let date = moment();

	console.log(date.format('dddd, MMMM Do YYYY'));

} else if (nextWeek.test(testSentence)) {
	let date = moment().day(testSentence.match(daysOfTheWeek)[0]).add(7, 'days');

	console.log(date.format('dddd, MMMM Do YYYY'));
}
