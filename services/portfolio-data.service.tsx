import { IUserDetails } from "../components/sections/landing/landing";
import { IInfoCard } from "../components/shared/info-card/info-card";
import { SkillEnum } from "../constants";
import { IProject } from "../components/shared/project/project";
import { skillMap } from "../components/shared/skill/skill";
import { ISocialIcon } from "../components/shared/social/social";

export default class PortfolioDataService {
  public static readonly userDetails: IUserDetails = {
    firstName: "J Salvador",
    lastName: "Navarro",
    title: "Full Stack Web Developer"
  };

  public static readonly aboutTextList: string[] = [
    `A web developer with an artist's soul, I am a former program/project manager with development
    experience within global companies. I thrive where I can work with extraordinary people who understand
    success comes only when you work hard together as a team.`,
    `A person who deeply cares about others with a weakness for patting dog`
  ];

  public static readonly experienceList: IInfoCard[] = [
    {
      logo: "general-assembly-reviews-logo.jpg",
      headings: {
        primary: "GA (General Assembly)",
        secondary: "Full Stack Web Developer Fellow",
        tertiary: "Jan 2019 - April 2019"
      },
      description:
        `- Recipient of the Adobe Digital Academy scholarship in 2019.
        - General Assembly’s Web Development Immersive (WDI): 12-week intensive program to dive into the world of web development, focused developing responsive web applications 
        `
    },
    {
      logo: "udacity_mark.png",
      headings: {
        primary: "udacity",
        secondary: "Full Stack Web Developer Nanodegree Fellow",
        tertiary: "Sept 2018 - Jan 2019"
      },
      description:
        `This Nanodegree focuses on designing and implementing relational database systems. Build dynamic software application backend systems with Python and the Flask application framework.
        Configure and deploy applications to the cloud using Linux.
        `
    },
    {
      logo: "Intel_logo.svg",
      headings: {
        primary: "intel",
        secondary: "Validation Program Manager",
        tertiary: "July 2008 - Dec 2017"
      },
      description:
        `- Managed multiple platform validation programs simultaneously
        - Coordinated validation of Server/Workstation platforms and server PCH with worldwide distributed teams
        - Planned and executed project deliverables; reported status and issues in different forums
        - Led platform sighting reviews to prioritize issue resolution and meet program milestones
        `,
    },
    {
      logo: "Intel_logo.svg",
      headings: {
        primary: "intel",
        secondary: "Software Engineer and Team Lead",
        tertiary: "Apr 2004 - June 2008"
      },
      description:
        `- Designed, developed and supported test content to validate intel hardware products in Windows, Linux and Unix operating systems
        - Validation Content Development team lead, served as main contact for the test content developed for desktop/workstation/server based projects used worldwide
        - Produced data obtained through SQL queries to gain efficiency reducing test content by 50% and consequently staff resources
        `,
    },
    {
      logo: "IBM_logo.svg",
      headings: {
        primary: "IBM",
        secondary: "Software Engineer and Debugger",
        tertiary: "Nov 2000 - March 2004"
      },
      description:
        `- Debugged and supported the IBM 4690 OS using version control systems
        - Attended hands-on training for three months in Raleigh, NC 
        `,
      isLast: true
    }
  ];

  public static readonly educationList: IInfoCard[] = [
    {
      logo: "Cinvestav_seal.png",
      headings: {
        primary: "Mexican Polytechnic Institute CINVESTAV Research Center",
        secondary: "Master in Computer Science",
        tertiary: ""
      },
      description:
        `- Recipient of a full achievement-based scholarship
        - Thesis Project: Formal Circuit Verification Using Petri Nets`,
    },
    {
      logo: "escudo_itt_200x200.png",
      headings: {
        primary: "Nayarit Institute of Technology",
        secondary: "Systems Engineering",
        tertiary: ""
      },
      description:
        `- Concentration in SQL database design and management`,
      isLast: true
    }
  ];

  public static readonly projectList: IProject[] = [
    {
      id: 0,
      name: "TOC--creator",
      description: {
        overview:
          "React based App, it creates a Table of Content based on <h> tag hierachy",
        detailed:
          `TOC--Creator is a tool which can be used in knowledge/articles/content databases to create a table of content based on < H > HTML tags hierarchy, i.e., < H2 > tags are subcontent inside < H1 > tags, < H3 > tags are sub-content of < H2 > tags, and so onProvided an string from an HTML file, this app parses the <h> tags and creates its table of content. 
          The new HTML file can be saved to mongoDB`,
      },
      img: "TOC-mainscreen.jpg",
      tagList: [SkillEnum.react, SkillEnum.mongodb, SkillEnum.js, SkillEnum.node, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/jsnavarr/TOC--Creator",
        website: "https://toc--creator.herokuapp.com/"
      },
      releaseDate: "April 2019"
    },
    {
      id: 1,
      name: "FoodRaiserATX",
      description: {
        overview:
          "An app that connects food businesses to nonprofit organizations",
        detailed:
          `What is It?:

          An app that connects food businesses to nonprofit organizations thus abiding with laws to feed the hunger population.
          
          Our Mission:
          
          Connecting surplus food with our neighbors in need.
          
          This is For:
          
          Restaurants, Catering Businesses, Food Vendors, etc. with an excess amount of food who hate to see it go to waste.
          
          Nonprofits who believe that no person should be left unfed, and are on a mission to end hunger.`
      },
      img: "FoodRaiserATXMS.jpg",
      tagList: [SkillEnum.django, SkillEnum.python, SkillEnum.postgresql, SkillEnum.js, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/jsnavarr/FoodRaiserATX",
        website: "https://foodraiseratx.herokuapp.com/"
      },
      releaseDate: "March 2019"
    },
    {
      id: 2,
      name: "Project Name",
      description: {
        overview:
          "",
        detailed:
          "dish-of-the-day is the airb&b of home made food. People can publish in advance the dishes they are cooking and customers can order them using the app."
      },
      img: "DishOfTheDayMS.jpg",
      tagList: [SkillEnum.mongodb, SkillEnum.node, SkillEnum.js, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/jsnavarr/dish-of-the-day",
        website: "https://dish-of-the-day.herokuapp.com/"
      },
      releaseDate: "March 2019"
    },
    {
      id: 3,
      name: "guessColor",
      description: {
        overview:
        "guessColor is a game which will let user guess what colors has to mix in order to obtain the target color",
        detailed:
          `guessColor will display a target color in the background (let's say green) then 3 bubbles will drop from the top (let's say red, yellow and blue), the user must catch in a bucket 2 of those bubbles to obtain the target color (in this case it has to be yellow and blue), if user gets the target color then he gets points, if he does not then his score will be reduced. User starts with an score of 10 and he will get 1 point for guessing each target color or reduce his score by 1 point if he does not. The target color will be reset every 20 seconds until the player ends the game or player runs out of points.

          When there is match the bucked will be filled with the target color surrounded by green.
          
          When there is a missmatch the bucket color will be surrounded by red.`
      },
      img: "guessColorMS.jpg",
      tagList: [ SkillEnum.js, SkillEnum.jquery, SkillEnum.html5, SkillEnum.css3],
      url: {
        github: "https://github.com/jsnavarr/guessColor",
        website: "http://splendid-cough.surge.sh"
      },
      releaseDate: "February 2019"
    }
  ];

  public static readonly skillList: SkillEnum[] = Array.from(skillMap.entries())
    .filter(([key, value]) => value.showAsDefault !== false)
    .map(([key, value]) => key);

  public static readonly socialIconList: ISocialIcon[] = [
    {
      id: "ln",
      name: "LinkedIn",
      url: "https://www.linkedin.com/j-salvador-navarro",
      icon: "fa-linkedin"
    },
    {
      id: "gh",
      name: "GitHub",
      url: "https://github.com/jsnavarr",
      icon: "fa-github"
    },
  ];
}
