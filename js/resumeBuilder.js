var bio = {
    "name": "Mirza Baig",
    "role": "JavaScript Ninja",
    "welcomeMessage": "Read below to know more about me",
    "contacts": {
        "location": "Swindon, UK",
        "mobile": "07599001234",
        "email": "mmabaig18@gmail.com",
        "twitter": "mmabaig18",
        "github": "https://github.com/MirzaMBaig"
    },
    "blog": "yet to create",
    "picture": "./images/fry.jpg",
    "skills": ["Passionate Developer", "HTML", "CSS", "JavaScript"]

};

bio.display = function () {
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    var contactGeneric = HTMLcontactGeneric.replace("%contact%", "address");
    contactGeneric = contactGeneric.replace("%data%", bio.contacts.location);
    $("#topContacts").append(contactGeneric);
    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));

    $("#header").append(HTMLbioPic.replace("%data%", bio.picture));
    $("#header").append(HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage));

    if (bio.skills) {
        $("#header").append(HTMLskillsStart);
        for (var skill in bio.skills) {
            var skills = HTMLskills.replace("%data%", bio.skills[skill]);
            $("#skills").append(skills);
        }
    }
};

//Work
var work = {
    "jobs": [
        {
            "employer": "Monitise Plc",
            "title": "J2EE Dev",
            "location": "London, UK",
            "dates": "June 2012 - present",
            "description": "Monitise is a leading global Mobile Money specialist. We help businesses profit from Mobile Money by simplifying its complexity and providing a single point of connection to an ecosystem of partners. We already work with over 350 financial institutions and many other leading businesses across global territories to make the most of the opportunities in the space."

        },
        {
            "employer": "The Travel Crop",
            "title": "Analyst Programmer",
            "location": "London, UK",
            "dates": "May 2010 - May 2012",
            "description": "The Travel Corporation provides holidays and experiences of a lifetime. Our commitment is to consistently deliver outstanding service, experience and value to each and every customer."

        },
        {
            "employer": "Ageas UK",
            "title": "Java Developer",
            "location": "Bournemouth, UK",
            "dates": "Jan 2010 - Apr 2010",
            "description": "Ageas provides both non-life and life products, which are distributed through a range of channels including brokers, IFAs, intermediaries, affinity partners and the Internet, as well as various wholly or partially-owned companies"

        }
    ]
};

work.display = function () {
    $("#workExperience").append(HTMLworkStart);
    for (var job in work.jobs) {
        var empAndTitle = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        empAndTitle = empAndTitle.concat(HTMLworkTitle.replace("%data%", work.jobs[job].title))
        $(".work-entry:last").append(empAndTitle);
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[job].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
    }
}

//Projects
var projects = {
    "projects": [
        {
            "title": "Mobile Banking",
            "dates": "June 2012 - present",
            "description": "Mobile Banking",
            "images": ["./images/197x148.gif", "./images/197x148.gif"]
        },
        {
            "title": "Tropics",
            "dates": "Jan 2010 - Apr 2010",
            "description": "Insurance Product",
            "images": [".//images//197x148.gif", ".//images//197x148.gif"]
        },
        {
            "title": "Insurance",
            "dates": "Jan 2010 - Apr 2010",
            "description": "Insurance Product",
            "images": ["./images/197x148.gif", "./images/197x148.gif"]
        }
    ]
}

projects.display = function () {

    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects["projects"][project].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects["projects"][project].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects["projects"][project].description));
        for (var image in projects["projects"][project].images) {
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects["projects"][project].images[image]));
        }

    }
}

//Education
var education = {
    "schools": [
        {
            "name": "Jawaharlal Nehru Technological University",
            "location": "Hyderabad, India",
            "degree": "B.Tech",
            "major": "Computer Science",
            "dates": "2004"
        },
        {
            "name": "Sri Chaitanaya Jr Kalashala",
            "degree": "Intermediate",
            "location": "Hyderabad, India",
            "major": "Maths,Physics,Chemistry",
            "dates": "2000"
        }
    ]
    ,

    "onlineCourses": [
        {
            "title": "JavaScript Syntax",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://www.udacity.com"
        },
        {
            "title": "HTML CSS Dev",
            "school": "Udacity",
            "dates": "2014",
            "url": "http://www.udacity.com"
        }
    ]
};

education.display = function () {
    $("#education").append(HTMLschoolStart);
    for (var school in education.schools) {
        var schoolNameAndDegree = HTMLschoolName.replace("%data%", education.schools[school].name);
        schoolNameAndDegree = schoolNameAndDegree.concat(HTMLschoolDegree.replace("%data%", education.schools[school].degree))
        $(".education-entry:last").append(schoolNameAndDegree);
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
    }
}

education.displayOnlineEducation = function () {
    $(".education-entry:last").append(HTMLonlineClasses);
    for (var school in education.onlineCourses) {
        var schoolNameAndDegree = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
        schoolNameAndDegree = schoolNameAndDegree.concat(HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school))
        $(".education-entry:last").append(schoolNameAndDegree);
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[school].url));
    }
}

//Maps
function displayWhereILivedAndWorked() {
    $("#mapDiv").append(googleMap);
}

//invoke
bio.display();
work.display();
projects.display();
education.display();
education.displayOnlineEducation();
displayWhereILivedAndWorked();


