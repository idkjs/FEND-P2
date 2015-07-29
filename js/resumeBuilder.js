var bio = {
 "name": "Alain Armand",
 "role": "Web Developer",
 "welcomeMessage": "Thanks for checking out my work!",
 "contacts": {
  "mobile": "555-555-5555",
  "email": "joe@domain.com",
  "github": "newguy",
  "twitter": "@haitibiz",
  "location": "Quayaquil, Ecuador"
  },
 "pictureUrl": "images/profilepic.jpg",
 "skills": ["JS", "HTML5", "CSS3", "Digital Marketing"]
};

bio.display = function() {
 var role = HTMLheaderRole.replace('%data%', bio.role);
 var name = HTMLheaderName.replace('%data%', bio.name);

 $('#header').prepend(role);
 $('#header').prepend(name);

 var picture = HTMLbioPic.replace('%data%', bio.pictureUrl);
 var message = HTMLwelcomeMsg.replace('%data%', bio.welcomeMessage);

 $('#header').append(picture);
 $('#header').append(message);

 $('#header').append(HTMLskillsStart);
 var len = bio.skills.length;
 for (var i = 0; i < len; i++) {
 var formattedSkill = HTMLskills.replace('%data%', bio.skills[i]);
 $('#skills').append(formattedSkill);
 }

 var mobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
 $('#topContacts').append(mobile);
 $('#footerContacts').append(mobile);

 var email = HTMLemail.replace('%data%', bio.contacts.email);
 $('#topContacts').append(email);
 $('#footerContacts').append(email);

 var github = HTMLgithub.replace('%data%', bio.contacts.github);
 $('#topContacts').append(github);
 $('#footerContacts').append(github);

 var twitter = HTMLtwitter.replace('%data%', bio.contacts.twitter);
 $('#topContacts').append(twitter);
 $('#footerContacts').append(twitter);

 var _location = HTMLlocation.replace('%data%', bio.contacts.location);
 $('#topContacts').append(_location);
 $('#footerContacts').append(_location);

}

bio.display();

var work = {
 "jobs": [
 {
  "employer": "Self",
  "title": "CEO",
  "dates": "2000-Present",
  "location": "Port-Au-Prince, Haiti",
  "description": "Tech and Solar applications"
 },
 {
  "employer": "Self",
  "title": "CEO",
  "dates": "2000-Present",
  "location": "Fort Lauderdale, FL",
  "description": "Tech and Solar applications"
 }]
};

work.display = function() {
 var len = work.jobs.length;
 for (var i = 0; i < len; i++){
 var formattedEmployer = HTMLworkEmployer.replace('%data%', work.jobs[i].employer);
 var formattedTitle = HTMLworkTitle.replace('%data%', work.jobs[i].title);
 var formattedEmployerTitle = formattedEmployer + formattedTitle
 $('#workExperience').append(HTMLworkStart);
 $('.work-entry:last').append(formattedEmployerTitle);
 var formattedLocation = HTMLworkLocation.replace('%data%', work.jobs[i].location);
 $('.work-entry:last').append(formattedLocation);
 var formattedDates = HTMLworkDates.replace('%data%', work.jobs[i].dates);
 $('.work-entry:last').append(formattedDates);
 var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[i].description);
 $('.work-entry:last').append(formattedDescription);
 }
}

work.display();

var projects = {
 "projects": [
 {
  "title": "CEO",
  "dates": "2000-Present",
  "description": "Tech and Solar applications",
  "images": ["images/DigiLab-LOGO-200-200.jpg", "images/AIC-LOGO-200-200.jpg"]
 },
 {
  "title": "CEO",
  "dates": "2000-Present",
  "description": "Tech and Solar applications",
  "images": ["images/AIC-LOGO-200-200.jpg", "images/DigiLab-LOGO-200-200.jpg"]
 }]
};

projects.display = function() {
  // iterate through all the projects
  var len = projects.projects.length;
  for (var i = 0; i < len; i++) {

    $('#projects').append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace('%data%', projects.projects[i].title);
    $('.project-entry:last').append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace('%data%', projects.projects[i].dates);
    $('.project-entry:last').append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace('%data%', projects.projects[i].description);
    $('.project-entry:last').append(formattedDescription);
    //iterate through images in project
    if (projects.projects[i].images.length > 0) {
      var count = projects.projects[i].images.length;
      for (var x = 0; x < count; x++) {
        var formattedImage = HTMLprojectImage.replace('%data%', projects.projects[i].images[x]);
        $('.project-entry:last').append(formattedImage);
      }
    }
  }
};

$('#projects').append(projects.display);

var education = {
 "schools": [
 {
  "name": "Hard Knocks U",
  "location": "Gainesville, FL",
  "degree": "Bachelors of Arts - Philosophy",
  "majors": ["Hustle Philosophy", "Art Philosophy", "Busines Philosophy"],
  "dates": "1992-1995",
  "url": "www.ufl.edu"

 },
 {
  "name": "Hard Knocks Law School",
  "location": "Washington, DC",
  "degree": "Doctor of Law",
  "majors": ["Hustle Philosophy", "Art Philosophy", "Busines Philosophy"],
  "dates": "1996-1999",
  "url": "www.howard.edu"
 }],

 "onlineCourses": [
  {
   "title": "Javascript Basics",
   "school": "Udacity",
   "dates": "May 2015",
   "url" : "https://www.udacity.com/course/javascript-basics--ud804"
  },
  {
   "title": "Intro to HTML and CSS",
   "school": "Udacity",
   "dates": "May 2015",
   "url" : "https://www.udacity.com/course/intro-to-html-and-css--ud304"
  }
 ]
};

education.display = function() {
 $('#education').append(HTMLschoolStart);
 var len = education.schools.length;
  for (var i = 0; i < len; i++) {

  var formattedName = HTMLschoolName.replace('%data%', education.schools[i].name);
  $('.education-entry:last').append(formattedName);

  var formattedLocation = HTMLschoolLocation.replace('%data%', education.schools[i].location);
  $('.education-entry:last').append(formattedLocation);

  var formattedDegree = HTMLschoolDegree.replace('%data%', education.schools[i].degree);
  $('.education-entry:last').append(formattedDegree);

  var formattedDates = HTMLschoolDates.replace('%data%', education.schools[i].dates);
  $('.education-entry:last').append(formattedDates);

  var formattedMajor = HTMLschoolMajor.replace('%data%', education.schools[i].majors);
  $('.education-entry:last').append(formattedMajor);
}
  if (education.onlineCourses.length > 0) {
    $('.education-entry:last').append(HTMLonlineClasses);
    var count = education.onlineCourses.length;
	  for (var i = 0; i < count; i++) {

	  var formattedonlineTitle = HTMLonlineTitle.replace('%data%', education.onlineCourses[i].title);
	  $('.education-entry:last').append(formattedonlineTitle);

	  var formattedonlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[i].school);
	  $('.education-entry:last').append(formattedonlineSchool);

	  var formattedonlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[i].dates);
	  $('.education-entry:last').append(formattedonlineDates);

	  var formattedonlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[i].url);
	  $('.education-entry:last').append(formattedonlineURL);
	  }
   }
  }

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


