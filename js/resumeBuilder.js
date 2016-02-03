var bio = {
     "name" : "Albert Pucio",
     "role" : "System Administrator",
     "contact_info" : {
                "email":"acpucio@gmail.com",
              "mobile" : "(832) 492-1506",
             "twitter" : "@digdog3000",
              "github" : "acpucio",
            "location" : "Herndon, VA, USA"
	},
    "picture_url" : "https://a4-images.myspacecdn.com/images03/24/a663e3dee9664464bf8ba15fbdcd7025/full.jpg",
    "welcome_msg" : "Howdy! Happy New Years!",
    "skills" : ["TCP/IP", "Bash", "Linux Administration", "VSAT"]
}


var education = {
    "schools":[
	{
		"name" : "University of Houston-Downtown",
		"city" : "Houston, TX",
		"degree" : "BA",
		"major" :  "Computer Science",
		"graduation_date" : "Dec. 2000",
		"url" : "None"
	},
	{		
	
		"name" : "Houston Community College",
		"city" : "Houston, TX",
		"degree" : "None",
		"major" : "General Studies",
		"graduation_date" : "None"
	},
	{	

		"name" : "Texas State Technical College",
		"city" : "Waco, TX",
		"degree" : "Associates",
		"major" : "Chemistry",
		"graduation_date" : "June 1995"

	}
    ],
    "onlineCourses":[
	{
		"name" : "O'reilly School of Technology",
		"city" : "Sebastapol,CA",
		"degree" : "None",
		"major" :  "System Administration",
		"graduation_date" : "Dec. 2009",
		"online_course" : ["Javascript","HTML","Databases"]
	},
	{		
	
		"name" : "Coursera",
		"city" : "Mountain View, CA",
		"degree" : "None",
		"major" : "General Studies",
		"graduation_date" : "None",
		"online_course" : ["Python"]
	},
	{	

		"name" : "Udacity",
		"city" : "Mountain View, CA",
		"degree" : "Nano",
		"major" : "Full Stack Developer",
		"graduation_date" : "June 2017",
		"online_course" : ["Git/GitHub", "Advanced Operating Systems"]

	}
    ]


}

var work = {
	"jobs": [
	{
		"employer" : "Amazon Web Services",
		"title"	: "System Administrator",
		"location" : "Herndon, VA",
		"dates" : "11/2015 to Present" ,
		"description" : "Maintain code, troubleshoot systems and networks"
	
	},
	{
		"employer" : "AECOM",
		"title" : "System Administrator",
		"location" : "Chantilly, VA",
		"dates" : "04/2015 to 11/2015",
		"description" : "Apply patches, maintain system uptime, train team members"
	}
	
   ]
}

var projects = {
"projects": [

{
	"title": "IMNS TAM",
	"dates": "11/2012 to 11/2013",
	"description": "Manage Internet Gabon's VSAT infrastructure",
	"images": [
		"http://igt.com/photos/1.png ",
		"http://igt.com/photos/2.png ",
		"http://igt.com/photos/3/png "
	]

	},

		{
		"title": "VSAT Field Coordinator",
		"dates": "11/2007 to 11/2009",
		"description": "Manage Well Services land VSAT infrastructure",
		"images": [
			"http://slb.com/photos/1.png",
			"http://slb.com/photos/2.png",
			"http://slb.com/photos/3/png"
			]

	}
	]
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
}

for (job in work.jobs){
	// create ne wdiv for work experience
	$("#workExperience").append(HTMLworkStart);
	// concat employer and title
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replacy("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates),
	$(".work-entry:last").append(formattedDates);

	var formattedDescription = HTMLworkDescription.replace(%data%, work.jobs[job].description);
	$("work-entry:last").append(formattedDescription);
}
	
