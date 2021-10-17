/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Dylan Kleinman",
  title2: "Dylan Kleinman",
  logo_name: "CUE",
  resumeLink: "",
  mail: "dylankkleinman@gmail.com",
  subheader: `I am a 25 year old Web Developer and Project Manager from Santa Monica.   
  I love surfing, golfing, my dog, street art, video games, traveling, and meeting new people.  I focus on creating applications
  that are eye catching while being effective and simple.`,
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/dylankleinman",
  linkedin: "https://www.linkedin.com/in/dylankleinman",
  gmail: "dylankkleinman@gmail.com",
};

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "💻 Develop mobile-first web applications focusing on creativity while ensuring intuitiveness",
        "💻 Experience using modern frameworks such as React.js to create single-page applications",
        "💻 Fetching and Pushing to local or cloud hosted databases and APIs",
        "💻 Creating application backends with Node and Express",
        "💻 Web3 and Solidity Integration",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Postman",
          fontAwesomeClassname: "logos:postman-icon",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#f89820",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Visual Studio Code",
          fontAwesomeClassname: "logos:visual-studio-code",
          style: {
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Project Management",
      fileName: "CloudInfraImg",
      skills: [
        "✉️ Experience managing the development of a large scale website",
        "✉️ Experience with prioritizing build requirements and development time management",
        "✉️ Use various tracking softwares to stay on top of completed tasks",
        "✉️ Stay in constant communication with the customer to provide transparency of the product",
      ],
      softwareSkills: [
        {
          skillName: "Trello",
          fontAwesomeClassname: "fa-trello",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "JIRA",
          fontAwesomeClassname: "logos:jira",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Excel",
          fontAwesomeClassname: "vscode-icons:file-type-excel",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Powerpoint",
          fontAwesomeClassname: "vscode-icons:file-type-powerpoint",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Word",
          fontAwesomeClassname: "vscode-icons:file-type-word",
          style: {
            color: "#336791",
          },
        },
        // {
        //   skillName: "MongoDB",
        //   fontAwesomeClassname: "simple-icons:mongodb",
        //   style: {
        //     color: "#47A248",
        //   },
        // },
        // {
        //   skillName: "Docker",
        //   fontAwesomeClassname: "simple-icons:docker",
        //   style: {
        //     color: "#1488C6",
        //   },
        // },
        // {
        //   skillName: "GitHub Actions",
        //   fontAwesomeClassname: "simple-icons:githubactions",
        //   style: {
        //     color: "#5b77ef",
        //   },
        // },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of California, Santa Cruz",
      subtitle: "Bachelors of Science in Computer Science",
      logo_path: "ucsc-inverted.png",
      alt_name: "UCSC",
      duration: "2014-2018",
      descriptions: [
        "⚡ Completed Bachelors of Science in Computer Science",
        "⚡ Received Deans Honors awards for achieving excellent GPA",
        "⚡ Focused on team based projects extending more than a single quarter",
        "⚡ Tutor and TA for introductory coding classes",
      ],
      website_link: "https://www.ucsc.edu/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Operating Systems",
      subtitle: "Python",
      logo_path: "ucsc.png",
      alt_name: "UCSC",
      color_code: "#47A048",
    },
    {
      title: "Mobile and Web Applications",
      subtitle: "HTML, CSS, Java, Javascript, Swift, jQuery",
      logo_path: "ucsc.png",
      alt_name: "UCSC",
      color_code: "#E2405F",
    },
    {
      title: "Software Engineering and Agile Approach",
      subtitle: "HTML, CSS, jQuery",
      logo_path: "ucsc.png",
      alt_name: "UCSC",
      color_code: "#47A048",
    },
    {
      title: "React - The Complete Guide",
      subtitle: "Javascript, CSS",
      logo_path: "udemy.png",
      alt_name: "Udemy",
      color_code: "#2AAFED",
    },
    {
      title: "Machine Learning",
      subtitle: "C, Python",
      logo_path: "ucsc.png",
      alt_name: "UCSC",
      color_code: "#fe0037",
    },
    {
      title: "Complete C# Unity Game Developer 3D",
      subtitle: "C#",
      logo_path: "udemy.png",
      alt_name: "Udemy",
      color_code: "#2AAFED",
    },
    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
};

// Experience Page
const experience = {
  title: "Professional Experience",
  subtitle: "Jobs and Internships",
  description: `I am currently employed as a customer and technical project lead for a widely used web
    based file storage and sharing system.  I also have professional experience as a full time web developer working with 
    HTML, CSS, and JS.`,
  sections: [
    {
      title: "Work Experience",
      experiences: [
        {
          title: "Customer and Technical Project Lead",
          company: "Unison Global",
          company_url: "https://www.unisonglobal.com/",
          logo_path: "Unisonglobal.png",
          duration: "Jan 2020 - Present",
          location: "Los Angeles",
          description: `Project lead coordinating the development of a web based file storage and review system provided to the US Air Force.
          Work with development team to produce efficient and innovative new features as well as fix bugs and upgrade current features.
          Communicated with the customer on a daily basis to gather and understand requirements for software build improvements as well as bug and defect fixes.
          Made critical decisions to define priority of build tasks and development hours all while staying under budget. 
          Managed the development of each semi-annual software update including meeting and instructing the development team, QA and integration testing, organization of the build schedule and tasks, and presentation to the customer.
          `,
          color: "#0071C5",
        },
        {
          title: "Web Developer",
          company: "LinQuest",
          company_url: "https://www.linquest.com/",
          logo_path: "linquest.png",
          duration: "July 2018 - January 2020",
          location: "Los Angeles",
          description: `Software Engineer working with a team following agile development. 
          Developed internal website with HTML, XSLT, Javascript, CSS, and jQuery  on a Sharepoint Server.  
          Revamped table building strategy by building tables with REST and  DataTables plugin instead of XSLT, significantly decreasing page load  times. 
          Introduced bootstrap css to standardize the website’s styling. 
          Participated in scrum meetings, coordination with product owners, and  collaboration with other teammates. 
          `,
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Internships/Training",
      experiences: [
        {
          title: "Web Development Intern",
          company: "LinQuest",
          company_url: "https://www.linquest.com/",
          logo_path: "linquest.png",
          duration: "Summer 2017",
          location: "Los Angeles",
          description: `Software intern working to develop various web applications. 
            Main project was building a custom Badge and Security Card tracking system using Microsoft Sharepoint. 
            The tracking system consisted of several lists for storing IDs and descriptions, 
            as well as forms and other custom pages built from HTML, CSS, and Javascript.`,
          color: "#4285F4",
        },
        {
          title: "Programming Tutor",
          company: "University of California Santa Cruz",
          company_url: "https://www.ucsc.edu/",
          logo_path: "ucsc.png",
          duration: "January 2016 - January 2018",
          location: "Santa Cruz",
          description: `Provided small group and individual for an introductory java  programming class at UC Santa Cruz.  
          Participated in weekly meetings with class professor to schedule one on one sessions for struggling students. 
          Held weekly drop in hours for students to ask questions and receive tips for programs. `,
          color: "#196acf",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description: `My personal time is spent working on new web development and video game development projects.  
    I focus on staying up to date with modern technologies such as React.js and the Unity Game Engine.  I have also been
    spending time learning solidity and understanding web3 and blockchain technology.  My web development projects
    are mainly front end with some full stack using HTML, CSS, and JavaScript (React) and my video games are coded in C#.`,
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "profile.jpg",
    description:
      "Feel free to reach out to me on any of the below platforms and I will get back to you as soon as possible.",
  },
};

const projects = {
  data: [
    {
      id: "2",
      name: "JarryChain",
      url: "https://jarrychain.dylankleinman.com/",
      github: "https://github.com/dylankleinman/JarryChain",
      description: `JarryChain is a React.js crypto portfolio tracker with Web3 wallet integration.   
        Built with react-bootstrap, react-router-dom, and Axios for API requests.`,
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "NPM",
          iconifyClass: "logos:npm-icon",
        },
        {
          name: "Web3",
          iconifyClass: "simple-icons:web3dotjs",
          color: "#4285F4",
        },
        {
          name: "BlueHost",
          iconifyClass: "carbon:ibm-cloud-dedicated-host",
          color: "#ee3c26",
        },
      ],
    },
    {
      id: "4",
      name: "Burger-Builder",
      url: "https://github.com/harikanani/personal-portfolio",
      github: "https://github.com/dylankleinman/burger-builder",
      description: `Burger building and ordering app built with React, Firebase, Axios, React-Router-Dom for routing, and 
        React.lazy() for lazy loading.`,
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Firebase",
          iconifyClass: "logos:firebase",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "5",
      name: "Blockchain-Election",
      github: "https://github.com/dylankleinman/Election_Blockchain_dev",
      description: `Simple voting election platform built in React with Web3 integration.  This application uses the solidity language
      to push and pull data from a local running blockchain hosted with truffle.`,
      languages: [
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Web3",
          iconifyClass: "simple-icons:web3dotjs",
          color: "#4285F4",
        },
        {
          name: "Solidity",
          iconifyClass: "file-icons:solidity",
          color: "#2AAFED",
        },
        {
          name: "Truffle",
          iconifyClass: "file-icons:truffle",
          color: "#6863A6",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
      ],
    },
    {
      id: "3",
      name: "Weather-Checkin",
      github: "https://github.com/dylankleinman/Weather-Checkin-App",
      url: "https://weather-checkin-app.herokuapp.com/",
      description: `Weather checkin app built HTML/CSS, and Javascript with Google Maps, and multiple API integrations.  
      Backend built with Node.js and MongoDB.`,
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Node",
          iconifyClass: "logos-nodejs",
        },
        {
          name: "MongoDB",
          iconifyClass: "vscode-icons:file-type-mongo",
        },
        {
          name: "Heroku",
          iconifyClass: "logos:heroku-icon",
        },
      ],
    },
    {
      id: "1",
      name: "Dylan Kleinman Website v1",
      github: "https://github.com/dylankleinman/DylanKleinmanWebsite",
      url: "",
      description: `The first version of my website built with HTML, CSS, and Javascript with use of jQuery.  
        Not currently live but available on Github`,
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "jQuery",
          iconifyClass: "akar-icons:jquery-fill",
          color: "#196acf",
        },
        {
          name: "BlueHost",
          iconifyClass: "carbon:ibm-cloud-dedicated-host",
          color: "#ee3c26",
        },
      ],
    },
    {
      id: "6",
      name: "Thanos Snap",
      github: "https://github.com/dylankleinman/thanosSnap",
      url: "https://dylankleinman.github.io/thanosSnap/",
      description: `Built with HTML/CSS and jQuery.  This project was to integrate Three.js animations to achieve a particle effect
      similar to thanos when he snaps his finger.`,
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "Three.js",
          iconifyClass: "bx:bx-library",
          color: "#47A048",
        },
        {
          name: "jQuery",
          iconifyClass: "akar-icons:jquery-fill",
          color: "#196acf",
        },
      ],
    },
    {
      id: "7",
      name: "Project MARS",
      url: "https://dylankleinman.itch.io/mars",
      github: "https://github.com/dylankleinman/3_Project_MARS",
      description: `A rocket flying and landing game built the Unity Game Engine.  All gameplay coded in C# and objects created from scratch.
      Password: Rocketman`,
      languages: [
        {
          name: "Unity",
          iconifyClass: "bx:bxl-unity",
          color: "dimgray",
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp",
        },
      ],
    },
    {
      id: "8",
      name: "Argon Assault",
      url: "https://dylankleinman.itch.io/argon-assault",
      github: "https://github.com/dylankleinman/4_Argon_Assault",
      description: `A rails shooter game built with the Unity Game Engine.  All gameplay coded with C# with objects and landscapes 
        created from scratch as well as imported from external sites.  Password: Jamaica`,
      languages: [
        {
          name: "Unity",
          iconifyClass: "bx:bxl-unity",
          color: "dimgray",
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp",
        },
      ],
    },
    {
      id: "9",
      name: "Bitcrawler",
      url: "https://dylankleinman.itch.io/bitcrawler",
      github: "https://github.com/dylankleinman/Bitcrawler",
      description: `A tower defence game built with the Unity Game Engine.  Coded with C# using BFS to allow for custom pathfinding
      for enemy AI.  Password: Crawl`,
      languages: [
        {
          name: "Unity",
          iconifyClass: "bx:bxl-unity",
          color: "dimgray",
        },
        {
          name: "C#",
          iconifyClass: "logos:c-sharp",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
