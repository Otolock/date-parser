var moment = require('moment');

var daysOfTheWeek = /\b((mon|tues|wed(nes)?|thur(s)?|fri|sat(ur)?|sun)(day)?)\b/g;
var currentWeek = /\b(on|this)\b/gi
var nextWeek = /\b(next|following)\b/gi

var testSentence = process.argv[2] || "On monday";

if (currentWeek.test(testSentence)) {
	let date = moment().day(testSentence.match(daysOfTheWeek)[0]);

	console.log(date.format("dddd, MMMM Do YYYY"));
}

if (nextWeek.test(testSentence)) {
	let date = moment().day(testSentence.match(daysOfTheWeek)[0]).add(7, 'days');

	console.log(date.format('dddd, MMMM Do YYYY'));
}
