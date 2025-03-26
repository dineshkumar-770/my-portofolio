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
    "A highly skilled Full Stack Software Developer with 2 years and 6 months of experience in building scalable and high-performance applications. Proficient in Flutter, Android Native, Jetpack Compose, Go, and MySQL, with a strong focus on developing seamless, responsive, and efficient solutions. Experienced in integrating backend services, optimizing performance, and ensuring maintainable code architecture. Passionate about innovation and continuous learning, dedicated to delivering robust and user-centric applications."
  ),
  resumeLink: "",
  //https://docs.google.com/document/d/110l1R4ysuaXHX9t9T73DhYAFIMX0iPLca5dYDOK5SmU/edit?usp=sharing
    // "https://drive.google.com/uc?export=download&id=1er9OtG0YXF0BqmUkz_XhoZsFQngss_Em", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dineshkumar-770",
  linkedin: "https://www.linkedin.com/in/thisisdineshkumar/",
  gmail: "kumardinesh0699@gmail.com", 
  medium: "https://medium.com/@kumardinesh0699",
  stackoverflow: "https://stackoverflow.com/users/13992120/dinesh-kumar", 
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK MOBILE DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Design and develop high-performance, responsive mobile and web applications using Flutter, ensuring seamless cross-platform user experiences."
    ),
    emoji("⚡ Build scalable, cross-platform mobile solutions with Flutter, optimizing for efficiency, speed, and maintainability."),
    emoji(
      "⚡ Integrate powerful backend services like Firebase, AWS, DigitalOcean, and MySQL, ensuring secure, efficient, and data-driven applications."
    ),
    emoji(
      "⚡ Develop robust APIs, manage cloud infrastructure, and enhance backend performance with expertise in Go and MySQL."
    ),
    emoji(
      "⚡ Prioritize performance optimization and user experience, delivering high-quality, reliable, and scalable mobile applications."
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
      skillName: "Dart", 
      imagePath: "https://img.icons8.com/?size=100&id=7AFcZ2zirX6Y&format=png&color=000000"
    }, 
    {
      skillName: "Android Native",
      imagePath: "https://img.icons8.com/?size=100&id=17836&format=png&color=000000"
    },
    {
      skillName: "Kotlin",
      imagePath: "https://img.icons8.com/?size=100&id=ZoxjA0jZDdFZ&format=png&color=000000"
    },
    {
      skillName: "Go",
      imagePath: "https://img.icons8.com/?size=100&id=44442&format=png&color=000000"
    }, 
    {
      skillName: "MySQL Database",
      imagePath: "https://img.icons8.com/?size=100&id=rgPSE6nAB766&format=png&color=000000"
    },
    {
      skillName: "AWS",
      imagePath: "https://img.icons8.com/?size=100&id=wU62u24brJ44&format=png&color=000000"
    },
    {
      skillName: "Firebase",
      imagePath: "https://img.icons8.com/?size=100&id=ROMfFZ1tMhpk&format=png&color=000000"
    }, 
    {
      skillName: "Git",
       imagePath: "https://img.icons8.com/?size=100&id=20906&format=png&color=000000"
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
      Stack: "Flutter", //Insert stack or technology you have experience in
      progressPercentage: "100%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Golang",
      progressPercentage: "100%"
    },
    {
      Stack: "AWS Cloud Infrastructure",
      progressPercentage: "100%"
    },
    {
      Stack: "Database",
      progressPercentage: "100%"
    },
    {
      Stack: "Deployment and App Release",
      progressPercentage: "100%"
    },
    {
      Stack: "Version Control",
      progressPercentage: "100%"
    },

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
        "Developed mobile applications for clients, delivering high-quality, tailored solutions aligned with specific client needs and expectations.",
        "Led the development of 3+ projects, creating innovative solutions from scratch and ensuring adherence to project requirements",
        "Improved product quality and reliability by executing comprehensive bug fixes, troubleshooting, and performance enhancements.",
        "Collaborated with cross-functional teams to solve technical challenges and drive innovation, ensuring software success through rigorous testing and debugging."
      ]
    },
    {
      role: "Software Engineer",
      company: "Haeywa",
      companylogo: require("./assets/images/haeywa_logo.jpeg"),
      date: "June 2023 – Present",
      desc: "Haeywa is petty cash and business payments & management app to provide payments and reconciliation in a single workflow over UPI, simplifying the tracking of small expenses effortlessly for businesses.",
      descBullets: [
        "Responsible for maintaining and improving “HAEYWA Petty Cash App”, a petty cash management application, using Flutter.",
        "Enhanced app functionality, user experience, and performance by implementing new features and optimizing existing code.",
        "Led bug-fixing efforts, improving overall app reliability and reducing issues affecting end users.",
        "Collaborated with cross-functional teams to ensure smooth app operation and timely feature releases."
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
  title: "My Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH ALONG WITH SOME PERSONALS",
  projects: [
    {
      image: require("./assets/images/haeywa_logo.jpeg"),
      projectName: "Haeywa Petty Cash App",
      projectDesc: "1. I implemented prepaid card functionality in the HAEYWA app, incorporating \nbalance management, card usage tracking, and both Min and Full KYC for two providers: NSDL (with native Android/iOS integration) and LivQuik (featuring video KYC via WebSockets). To improve app efficiency, I enhanced performance by integrating Riverpod for state management and adopting the MVVM architecture. Additionally, I developed vendor payout management and integrated bill payment solutions using PayU and BBPS, along with a 4-level approval matrix for transaction verification. I also integrated advanced features like NFC tap-and-pay, enhancing user experience and expanding the app’s capabilities.",
       
    },
    {
      image: require("./assets/images/chefkart.webp"),
      projectName: "Chefkart Partner App",
      isHireable: true,
      projectDesc: "I enhanced the application’s functionality by developing comprehensive background location tracking, ensuring accurate user positioning for improved engagement. I integrated Google Maps APIs to deliver precise location services, enriching the user experience with interactive mapping features. Additionally, I designed and implemented an interactive chef tutorial module with video streaming and a question-and-answer system, facilitating effective learning and participation. I also integrated secure payment gateways like Razorpay and PayU, while implementing localization in three languages to support a diverse user base and expand market reach.",
    },
    {
      image: require("./assets/images/truepower.png"),
      projectName: "TruePower - EV Charging",
      projectDesc: "I developed the TruePower app, a user-friendly solution designed to help users locate nearby EV charging stations and book charging sessions effortlessly. The app features a mobile number authentication flow and integrates Google Maps API for accurate location tracking. I implemented a seamless session booking system and a referral program to enhance user engagement. Additionally, I incorporated Firebase Cloud Messaging (FCM) for real-time notifications and performed extensive bug fixes to ensure optimal app performance and reliability.",
    },
    {
      image: require("./assets/images/india_legal.png"),
      projectName: "India Legal",
      projectDesc: "I contributed to the development of the India Legal app as part of a team, implementing key features such as a voice calling feature using Flutter Calling UI Kit and Agora SDK, full app localization in multiple languages, bug fixing and performance optimization, and the integration of subscription plans. I followed the MVVM architecture and utilized BLoC state management to ensure efficient state handling and maintainability",
    },
    {
      image: require("./assets/images/playstore.png"),
      projectName: "TuTr",
      projectDesc: "TuTr is a comprehensive tuition management system built with a Flutter frontend and a Golang backend, designed to streamline communication and academic activities between teachers and students. It features class-wise teacher-created groups where students can access study materials, manage notes, and receive important updates via a dedicated notice board. The app includes a structured “Doubt Chat” for students to post queries with text and file uploads, allowing teachers and group members to respond asynchronously. TuTr also supports attendance tracking, enabling teachers to efficiently monitor student participation. With OTP-based logins and subscription management, it offers a scalable, cross-platform solution for modern educational institutions",
    },
    {
      image: require("./assets/images/gita_icon.png"),
      projectName: "Bhagavad Gita App",
      projectDesc: "I developed a comprehensive mobile application centered around the Bhagavad Gita, where the backend is implemented in Go. The raw data was efficiently loaded into MongoDB, allowing for seamless data retrieval and management. I designed and built robust APIs using Go, which were then deployed on AWS EC2 to ensure scalability and reliability. The front end was crafted using Flutter, delivering a smooth and interactive user experience. The app features include verse search functionality, bookmarking, and thematic categorization, enhancing user engagement and accessibility to the sacred text. This project showcases my expertise in full-stack development, cloud deployment, and my commitment to creating meaningful applications.",
       
    },
    {
      image: require("./assets/images/paperly_icon.png"),
      projectName: "Paperly Wallpapers App",
      projectDesc: "I developed a wallpaper application with a Go backend and Flutter frontend. Only administrators can upload wallpapers to AWS S3, and I configured the AWS SDK for smooth integration with EC2 and local environments. The app generates presigned URLs for uploaded images, which are accessible on the frontend. The home page displays all available images from MongoDB, while a categories screen allows users to browse different wallpaper categories. Additionally, I integrated Firebase Cloud Messaging (FCM) for notifications, ensuring users stay updated on new wallpapers. The application will be deployed soon.",
       
    },
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
