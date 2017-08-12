var bio = {
    
    name: "Hongyu Zhai",
    role: "Web Developer",
    contacts: {
        email: "harvey.zhai@gmail.com",
        mobile: "530-760-XXXX",
        github: "iamzhaihy",
        facebook: "Hongyu Zhai",
        location: "Davis, California"
    },
    biopic: "images/fry.jpg",
    skills: [
        "C++ Development",
        "Learning new things",
        "Speaking three languages",
        "Pretending to be a superhero"
    ],
    welcomeMessage: "Resume under construction",

    display: function () {
        // my name and role (displaed in the header)
        var formattedName = HTMLheaderName.replace("%data%", this.name);
        var formattedRole = HTMLheaderRole.replace("%data%", this.role);
        var formattedBioPic = HTMLbioPic.replace("%data%", this.biopic);
        var formattedMessage = HTMLwelcomeMsg.replace("%data%", this.welcomeMessage);
        $("#header").prepend(formattedRole, formattedName);
        $("#header").append(formattedBioPic, formattedMessage);

        // contact information (displaed in the topContacts)
        var formattedEmail = HTMLemail.replace("%data%", this.contacts.email);
        var formattedMobile = HTMLmobile.replace("%data%", this.contacts.mobile);
        var formattedGithub = HTMLgithub.replace("%data%", this.contacts.github);
        var formattedLocation = HTMLlocation.replace("%data%", this.contacts.location);
        $("#topContacts, #footerContacts").append(formattedEmail, formattedMobile, formattedGithub, formattedLocation);

        if (this.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < this.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", this.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }
    }
};

var education = {

    schools: [{
            name: "Jinan Foreign Language School",
            location: "Jinan, Shandong, China",
            degree: "High School Diploma",
            majors: ["Art & Humanities"],
            dates: "2012-09-01"
        },
        {
            name: "University of California, Davis",
            location: "Davis, California, United States",
            degree: "BS",
            majors: ["Computer Science"],
            dates: "2015-09-16"
        }
    ],
    onlineCourses: [{
            title: "Learning How to Learn",
            school: "University of California, San Diego",
            dates: "2017-05-01",
            url: "https://www.coursera.org/learn/learning-how-to-learn"
        },
        {
            title: "Data Science",
            school: "John Hopkins University",
            dates: "2017-05-01",
            url: "https://www.coursera.org/specializations/jhu-data-science"
        },
        {
            title: "Front-end Development Nanodegree",
            school: "Udacity",
            dates: "2016-07-03",
            url: "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
        }
    ],

    display: function () {
        if (this.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
            var schoolName, schoolDegree, nameDegree;
            var schoolDates, schoolLocation, schoolMajor;
            for (var i = 0; i < this.schools.length; i++) {
                schoolName = HTMLschoolName.replace('%data%', this.schools[i].name).replace('#', this.schools[i].url);
                schoolDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
                $(".education-entry:last").append(schoolName + schoolDegree);

                schoolDates = HTMLschoolDates.replace("%data%", this.schools[i].dates);
                $(".education-entry:last").append(schoolDates);

                schoolLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);
                $(".education-entry:last").append(schoolLocation);

                schoolMajor = HTMLschoolMajor.replace("%data%", this.schools[i].majors);
                $(".education-entry:last").append(schoolMajor);
            }
        }

        if (this.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses, HTMLschoolStart);
            var onlineTitle, onlineSchool, onlineDates, onlineURL;
            for (var j = 0; j < this.onlineCourses.length; j++) {
                onlineTitle = HTMLonlineTitle.replace("%data%", this.onlineCourses[j].title);
                onlineSchool = HTMLonlineSchool.replace("%data%", this.onlineCourses[j].school);
                $(".education-entry:last").append(onlineTitle + onlineSchool);

                onlineDates = HTMLonlineDates.replace("%data%", this.onlineCourses[j].dates);
                $(".education-entry:last").append(onlineDates);

                onlineURL = HTMLonlineURL.replace("%data%", this.onlineCourses[j].url);
                $(".education-entry:last").append(onlineURL);
            }
        }
    }
};

var work = {

    jobs: [{
            employer: "UC Davis EALC",
            title: "Chinese Tutor",
            location: "Davis, California",
            dates: "in progress",
            description: "I help teacher to teach in class, interacting with the students. For me, the happiest thing is helping others."
        },
        {
            employer: "Daily Bugle",
            title: "Reporter",
            location: "New York City",
            dates: "2000 - 2010",
            description: "I was a reporter looking for interesting news and eye-catching headlines. Working with Peter was really fun."
        },
        {
            employer: "Daily Planet",
            title: "Reporter",
            location: "Metropolis",
            dates: "2012 - 2014",
            description: "It was a fun experimence as well. My partner Clark was a relly nice guy, tall and strong. The only weird thing was that he went to telephone booth frequently for some reasons."
        }
    ],

    display: function () {
        if (this.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);
            var workEmployer, workTitle;
            var workDates, workLocation, workDescription;
            for (var i = 0; i < this.jobs.length; i++) {
                workEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
                workTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
                $(".work-entry:last").append(workEmployer + workTitle);

                workDates = HTMLworkDates.replace("%data%", this.jobs[i].dates);
                $(".work-entry:last").append(workDates);

                workLocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
                $(".work-entry:last").append(workLocation);

                workDescription = HTMLworkDescription.replace("%data%", this.jobs[i].description);
                $(".work-entry:last").append(workDescription);
            }
        }
    }
};

var projects = {
    projects: [{
        title: "Web Shooter for a Vigilante",
        dates: "2003",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur elit odio, a convallis turpis pharetra in. Quisque pretium felis et mollis elementum. Quisque a libero et erat vehicula vestibulum eu a magna. Integer placerat velit ipsum, quis congue ipsum laoreet eget. Curabitur quis nisi leo. Mauris nisl nunc, dignissim fringilla facilisis eu, pellentesque vitae ante. Phasellus rutrum ultrices efficitur. Curabitur in luctus urna. Proin eget est tortor. Quisque id lectus sem.",
        images: ["images/webshooter.jpg"]
    }],

    display: function () {
        if (this.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);
            var projectTitle, projectDates;
            var projectDescription, projectImage;
            for (var i = 0; i < this.projects.length; i++) {
                projectTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
                $(".project-entry:last").append(projectTitle);

                projectDates = HTMLprojectDates.replace("%data%", this.projects[i].dates);
                $(".project-entry:last").append(projectDates);

                for (var j = 0; j < projects.projects[i].images.length; j++) {
                    projectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                    $(".project-entry:last").append(projectImage);
                }

                projectDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);
                $(".project-entry:last").append(projectDescription);
            }
        }
    }
};

$("#mapDiv").append(googleMap);

bio.display();
work.display();
projects.display();
education.display();
