

var bio = {

	"name" : "Alain Armand",
	"role" : "Web Developer",
	"welcomeMessage" : "Thanks for checking out my work!",
	"contacts" : {
		"mobile" : "555-555-5555",
		"email"  : "joe@domain.com",
		"github" : "newguy",
		"twitter": "@haitibiz",
		"location" : "Quayaquil, Ecuador"
		},
	"pictureUrl" : "images/profilepic.jpg",
	"skills" : ["JS", "HTML5", "CSS3", "Digital Marketing"]
};
var role = HTMLheaderRole.replace('%data%', bio.role);
var name = HTMLheaderName.replace('%data%', bio.name);

$('#header').prepend(role);		// the # gets the html id in the .html file and puts var role there.
$('#header').prepend(name);	 	// $ is how jquery commands start.

var picture = HTMLbioPic.replace('%data%', bio.pictureUrl);
var message = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

$('#header').append(picture);
$('#header').append(message);

		// var skills = HTMLskills.replace('%data', bio.skills); // I am trying to put the bio.skill in HTML skills 
		// 													  // because that is where the jquery skills li (structured list) market is

		// $('#header').append(HTMLskills);	// I tried to append HTMLskills to header

		// The following section is the code to append the array skills to the header.
		// It uses a for loop that iterates over the skill array/one at a time before
		// using the replace %dat% method with skills and HTMLskills. Notice that since
		// skills is an array that we want to iterate they added var index in the brackets.

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);
	var formattedSkill = HTMLskills.replace('%data%', bio.skills[0]);
	$('#skills').append(formattedSkill);

	var formattedSkill = HTMLskills.replace('%data%', bio.skills[1]);
	$('#skills').append(formattedSkill);

	var formattedSkill = HTMLskills.replace('%data%', bio.skills[2]);
	$('#skills').append(formattedSkill);

	var formattedSkill = HTMLskills.replace('%data%', bio.skills[3]);
	$('#skills').append(formattedSkill);
}

// 	for (var index = 0; index < bio.skills.length; index++) {
//     $('#skills').append(HTMLskills.replace('%data%', bio.skills[index]));
// }
// $('#header').append(HTMLskillsStart);
// for (var index = 0; index < bio.skills.length; index++) {
//     $('#skills').append(HTMLskills.replace('%data%', bio.skills[index]));
// };

var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
$('#topContacts').append(mobile);

var email = HTMLemail.replace('%data%', bio.contacts.email);
$('#topContacts').append(email);

var github = HTMLgithub.replace('%data%', bio.contacts.github);
$('#topContacts').append(github);

var twitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
$('#topContacts').append(twitter);

		// for var _location : i had to use _location instead of var location because the html was crashing. 
		// dev console seems to say that location is already defined somewhere.

var _location = HTMLlocation.replace('%data%', bio.contacts.location);
$('#topContacts').append(_location);


var work = {
	"jobs" : [
	{
		"employer" : "Self",
		"title"    : "CEO",
		"dates"    : "2000-Present",
		"location" : "Port-Au-Prince, Haiti",
		"description" : "Tech and Solar applications"
	},
	{
		"employer" : "Self",
		"title"    : "CEO",
		"dates"    : "2000-Present",
		"location" : "Fort Lauderdale, FL",
		"description" : "Tech and Solar applications"
	}]
};

function displayWork() {
	for (job in work.jobs) {
	$('#workExperience').append(HTMLworkStart)
	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle
	// this concantenates formattedEmployer and formattedTitle so the show up together on the same line.
		$('.work-entry:last').append(formattedEmployerTitle); 
		// the "." in $('.work-entry:last') signifies that work-entry is a class
	var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
		$('.work-entry:last').append(formattedLocation);	
	var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
		$('.work-entry:last').append(formattedDates);
	var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
		$('.work-entry:last').append(formattedDescription);
	}
}

displayWork();

// ******** this is the locationizer function
// function locationizer(work-obj) {
// 	 for (location in work.jobs) {
// 	 	.get(work.jobs[location].location)

// 	 }
// }
// function locationizer(work_obj) {
    
//     var locationArray = [];

// 	for (job in work_obj.jobs) {
// 	 	var newLocation = work_obj.jobs[job].location;
// 	 	locationArray.push(newLocation); // .push will push newLocation to the end of items in array locationArray
//     }
//     return locationArray;
// }
// ****************locationizer function end

// for (job in work.jobs) {
// 	$('#workExperience').append(HTMLworkStart)
// 	var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
// 	var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
// 	var formattedEmployerTitle = formattedEmployer + formattedTitle
// 	// this concantenates formattedEmployer and formattedTitle so the show up together on the same line.
// 		$('.work-entry:last').append(formattedEmployerTitle); 
// 		// the "." in $('.work-entry:last') signifies that work-entry is a class
// 	var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
// 		$('.work-entry:last').append(formattedLocation);	
// 	var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
// 		$('.work-entry:last').append(formattedDates);
// 	var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
// 		$('.work-entry:last').append(formattedDescription);
		

// work.display = function() {					
// 	for (job in work.jobs) {
// 		$('#workExperience').append(HTMLworkStart); 
// 		var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[job].employer);
// 		$('.work-entry:last').append(formattedEmployer);

// 		var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[job].title);
// 		$('.work-entry:last').append(formattedTitle);

// 		var formattedDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
// 		$('.work-entry:last').append(formattedDates);

// 		var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
// 		$('.work-entry:last').append(formattedLocation);

// 		var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
// 		$('.work-entry:last').append(formattedDescription);
// 		}
// 	};
// $('#workExperience').append(work.display);


var projects = {
	"projects" : [
	{
		"title"    : "CEO",
		"dates"    : "2000-Present",
		"description" : "Tech and Solar applications",
		"images"   : ["images/DigiLab-LOGO.jpg", "images/AIC-LOGO.jpg"]
	},
	{
		"title"    : "CEO",
		"dates"    : "2000-Present",
		"description" : "Tech and Solar applications",
		"images"   : ["images/DigiLab-LOGO.jpg", "images/AIC-LOGO.jpg"]
	}]
};

projects.display = function() {					
	for (project in projects.projects) {
		$('#projects').append(HTMLprojectStart); 
		var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
		$('.project-entry:last').append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
		$('.project-entry:last').append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
		$('.project-entry:last').append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[project].images[image]);
		$('.project-entry:last').append(formattedImage);
			}
		}
	}
};
$('#projects').append(projects.display);
// console.log(projects.display);

var education = {
	"schools" : [
	{
		"name" : "Hard Knocks U",
		"location" : "Gainesville, FL",
		"degree"  : "Bachelors of Arts - Philosophy",
		"majors" : ["Hustle Philosophy", "Art Philosophy", "Busines Philosophy"],
		"dates" : "1992-1995",
		"url"   : "www.ufl.edu"
		
	},
	{
		"name" : "Hard Knocks Law School",
		"location" : "Washington, DC",
		"degree"  : "Doctor of Law",
		"majors" : ["Hustle Philosophy", "Art Philosophy", "Busines Philosophy"],
		"dates" : "1996-1999",
		"url"   : "www.howard.edu"
	}],
	
	"onlineCourses" : [
		{
			"title" : "Javascript Basics",
			"school" : "Udacity",
			"dates"  : "May 2015",
			"url"	: "https://www.udacity.com/course/javascript-basics--ud804"
		},
		{
			"title" : "Intro to HTML and CSS",
			"school" : "Udacity",
			"dates"  : "May 2015",
			"url"	: "https://www.udacity.com/course/intro-to-html-and-css--ud304"
		}
	]
};

education.display = function() {					
	for (ed in education.schools) {
		$('#education').append(HTMLschoolStart); 
		var formattedName = HTMLschoolName.replace('%data%', education.schools[ed].name);
		$('.education-entry:last').append(formattedName);

		var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[ed].location);
		$('.education-entry:last').append(formattedLocation);

		var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[ed].degree);
		$('.education-entry:last').append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace('%data%', education.schools[ed].dates);
		$('.education-entry:last').append(formattedDates);

		var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[ed].majors);
		$('.education-entry:last').append(formattedMajor);
	}
	$('.education-entry:last').append(HTMLonlineClasses);
	for (mooc in education.onlineCourses) {
		var formattedonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[mooc].title);
		$('.education-entry:last').append(formattedonlineTitle);

		var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[mooc].school);
		$('.education-entry:last').append(formattedonlineSchool);

		var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[mooc].dates);
		$('.education-entry:last').append(formattedonlineDates);

		var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[mooc].url);
		$('.education-entry:last').append(formattedonlineURL);
		}
	};
$('#education').append(education.display);


function inName() {
	var name = window.name;
	name = name.trim().split(" ");
	console.log(name);
	name[1]=name[1].toUpperCase();
	// console.log(name[1]);
	name[0]=name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
	// console.log(name[0]);
	return name[0] +" "+ name[1];
	
}
var name = $('#name').text();

$('#main').append(internationalizeButton);

$('#mapDiv').append(googleMap);


// $('#main').append(googleMap);

