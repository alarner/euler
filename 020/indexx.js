
Conversation opened. 1 read message.

Skip to content
Using Gmail with screen readers
Aaron
Search


to:jobs@trello.com 


Take me to Inbox
Gmail
COMPOSE
Labels
Inbox (11)
Sent Mail
All Mail
900dpi Error (762)
a@900dpi.com (2)
a@bcqa.co (16)
Blogs (487)
Devjoist
hi@900dpi.com (28)
Meetup (853)
Orion Studio
thirdsteplabs.com (1)
More 
Hangouts

 
 
 
 
Move to Inbox More 
3 of 3  
 
Print all In new window
lawnmower

Aaron Larner <anlarner@gmail.com>
AttachmentsFeb 1

to jobs 
Hi Trello Folks,
I was really excited to see that you had some job openings on Hacker News today. I'm a huge JavaScript nerd, currently working as a Front-end Engineering Instructor at a code school where I get to spread my love of everything JS. I miss writing code, so I'm just starting my job hunt for a new position that allows me to work with JavaScript / Node. I was initially drawn to the server developer position, but I think my skill-set particularly aligns well with the Internal Software Developer position.

In my previous role as the CTO of an art / technology start-up I did a lot of work developing technology solutions to internal problems. Specifically I built an analytics dashboard that was emailed out to each employee every day that summarized the key metrics for the company. That dashboard integrated with google analytics as well as the company's salesforce database. I also built a number of other internal tools for our sales staff.

At my current position I've built an internal tool for students to submit homework and for me to and my teaching assistant to easily grade and give feedback on that homework. I've also been working on a small tool to analyze the order of topics that our instructors teach in order to get a better idea of an ideal curriculum.

All of this combined with the fact that I loved Trello and literally use it to plan my life (I have a "Ten Year" Trello board that I update daily) makes me really excited to learn more about the positions you have open. I've attached my resume as well as the code I wrote to solve your programming challenge.

Looking forward to hearing from you.

Best,
Aaron Larner
2 Attachments 
 
Preview attachment resume.pdf
PDF
resume.pdf
Preview attachment trello.js

Javascript
trello.js
	
Click here to Reply or Forward
5.35 GB (35%) of 15 GB used
Manage
Terms - Privacy
Last account activity: 2 hours ago
Details
Trello Recruiting
Add to circles

Show details

'use strict';

// Notes...

// Int64 hash (String s) {
//     Int64 h = 7
//     String letters = "acdegilmnoprstuw"
//     for(Int32 i = 0; i < s.length; i++) {
//         h = (h * 37 + letters.indexOf(s[i]))
//     }
//     return h
// }

// function hash(s) {
// 	let h = 7;
// 	let letters = 'acdegilmnoprstuw';
// 	for(let i=0; i<s.length; i++) {
// 		h = (h * 37 + letters.indexOf(s[i]));
// 	}
// }

// newHash = previousHash * 37 + letters.indexOf(s[i]);
// previousHash = (newHash - letters.indexOf(s[i]))/37

console.assert(getStrings(7)[0] === '');
console.assert(getStrings(680131659347)[0] === 'leepadg');
console.log(getStrings(930846109532517));


// From a hash, calculate all possible strings (array)
// that could have generated that hash.
function getStrings(hash) {
	let results = [];
	if(hash === 7) {
		return [''];
	}
	else if(hash < 7*37) {
		return [];
	}
	else {
		let options = getPreviousHashOptions(hash);

		for(let i=0; i<options.length; i++) {
			let strings = getStrings(options[i].hash);
			for(let j=0; j<strings.length; j++) {
				results.push(strings[j] + options[i].letter);
			}
		}
	}
	return results;
}

// From a given hash, calculate all possible previous
// iterations of that hash, along with the corresponding
// letter.
function getPreviousHashOptions(currentHash) {
	let options = [];
	let letters = 'acdegilmnoprstuw';
	for(let i=0; i<letters.length; i++) {
		let guess = (currentHash - i)/37;
		if(guess > 0 && guess === Math.floor(guess)) {
			options.push({
				letter: letters.charAt(i),
				hash: guess
			});
		}
	}
	return options;
}
trello.js
Open with
2 of 2 items
resume.pdftrello.jsDisplaying trello.js.