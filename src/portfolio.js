/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dinesh Kumar",
  title: "Hi all, I'm Dinesh",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Mobile applications with Flutter/ Android Native/ Jetpack Compose / Nodejs / Expressjs / MongoDB and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kSGSnsgi9nChSGgFsAZaR_9U41-2bSQZ/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dineshkumar-770",
  linkedin: "https://www.linkedin.com/in/thisisdineshkumar/",
  gmail: "kumardinesh0699@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/13992120/dinesh-kumar",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK MOBILE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive and responsive mobile and web applications using Flutter"
    ),
    emoji("⚡ Implement cross-platform Progressive Web Applications (PWA) with Flutter"),
    emoji(
      "⚡ Seamless integration of backend services such as Firebase, AWS, and DigitalOcean"
    ),
    emoji(
      "⚡ Expertise in building efficient APIs and managing cloud infrastructure"
    ),
    emoji(
      "⚡ Ensure optimal performance and user experience across all platforms"
    ),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [   
    {
      skillName: "Flutter",
      imagePath: "https://img.icons8.com/?size=100&id=pCvIfmctRaY8&format=png&color=000000"
    },
    {
      skillName: "Android Native",
      imagePath: "https://img.icons8.com/?size=100&id=17836&format=png&color=000000"
    },
    {
      skillName: "Node JS",
      imagePath: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000"
    },
    {
      skillName: "Express JS",
      imagePath: "https://img.icons8.com/?size=100&id=WNoJgbzDr3i2&format=png&color=000000"
    },
    {
      skillName: "Mongo Database",
      imagePath: "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
    },
    {
      skillName: "AWS",
      imagePath: "https://img.icons8.com/?size=100&id=33039&format=png&color=000000"
    },
    {
      skillName: "Firebase",
      imagePath: "https://img.icons8.com/?size=100&id=ROMfFZ1tMhpk&format=png&color=000000"
    },
    {
      skillName: "Docker",
       imagePath: "https://img.icons8.com/?size=100&id=cdYUlRaag9G9&format=png&color=000000"
    },
    {
      skillName: "Dart", 
      imagePath: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000"
    },
    {
      skillName: "Kotlin", 
      imagePath: "https://img.icons8.com/?size=100&id=ZoxjA0jZDdFZ&format=png&color=000000"
    },
    {
      skillName: "Javascript", 
      imagePath: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000"
    },
  ],
  display: true // Set false to hide this section, defaults to true, 
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Deenbandhu Chhotu Ram University of Science and Technology,",
      logo: require("./assets/images/dcrust.jpeg"),
      subHeader: "Bachelor Technology in Mechanical Engineering",
      duration: "August 2018 - July 2022",
      // desc: "Participated in the research of XXX and published 3 papers.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }, 
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Associate Software Engineer",
      company: "Antino Labs",
      companylogo: require("./assets/images/antino_labs_logo.jpeg"),
      date: "September 2022 – May 2023",
      desc: "Antino Labs provides IT service and consultancy to their clients. In Antino I worked on many different projects including the big the gaint startups like Rapido, Physics Wallah, Dunzo etc.",
      descBullets: [
        "Led development on over 3 projects, building innovative solutions from scratch and ensuring alignment with project requirements.",
        "Conducted thorough bug fixing and troubleshooting activities to uphold product quality and reliability",
        "Actively contributed in team collaboration sessions, offering insights and ideas to drive project innovation and address technical challenges"
      ]
    },
    {
      role: "Software Engineer",
      company: "Haeywa",
      companylogo: require("./assets/images/haeywa_logo.jpeg"),
      date: "June 2023 – Present",
      desc: "Haeywa is petty cash and business payments & management app to provide payments and reconciliation in a single workflow over UPI, simplifying the tracking of small expenses effortlessly for businesses.",
      descBullets: [
        "Maintain and enhance the HAEYWA application using Flutter to ensure seamless functionality and user experience.",
        "Lead bug fixing initiatives, ensuring reliability and performance standards.",
        "Collaborate with the team in regular discussions and brainstorming sessions to drive innovation and address technical challenges"
      ]
    }, 
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.google.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/haeywa_logo.jpeg"),
      projectName: "Haeywa",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [ 
    {
      url: "https://medium.com/@kumardinesh0699/implementing-upi-nfc-tag-with-flutter-ec26c61db858",
      title: "Implementing UPI NFC Tag with Flutter",
      description:
        "the process of creating a Flutter application that can read UPI (Unified Payments Interface) data from an NFC (Near Field Communication) tag. This application will detect NFC, read the UPI data, and navigate to a screen that displays this information."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-8571821961",
  email_address: "kumardinesh0699@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
