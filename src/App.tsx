import 'normalize.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Skill from './pages/Skill';
import Experience from './pages/Experience';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import AutowallPrivacy from './pages/Other pages/AutowallPrivacy';

import psicon from './assets/psreact-icon.png'
import psthumb from './assets/psreact-thumb.jpg'
import lsicon from './assets/lorestore-icon.jpg'
import lsthumb from './assets/lorestore-thumb.jpeg'
import ccicon from './assets/collabchain-icon.jpg'
import ccthumb from './assets/collabchain-thumb.jpg'
import awicon from './assets/autowall-icon.jpg'
import awthumb from './assets/autowall-thumb.png'

const projectsData = {
  autowall: {
    link: "https://play.google.com/store/apps/details?id=com.autowall",
    icon: awicon,
    cover:awthumb,
    tag:["React Native"],
    title:"AutoWall",
    intro:"Auto Wall makes your device come alive by automatically changing wallpapers based on your preferences. Whether you want to showcase your favorite memories, stunning landscapes, or curated images from your Google Drive, Auto Wall gives you complete control over your wallpapers.",
    insp: "I have always been fascinated by personalizing my devices to my taste. And a wallpaper is not just an aesthetic choice, in my opinion, it is a reflection of one's personality. With this app, I am trying to provide a new option .",
    jrny: [
      "Coming from a react.js background it is relatively easier to transition into react native I believe. After all that's the purpose React native, to provide web developers to use their foundations of react to develop cross platform apps. But that doesn't mean one is going to find it all smooth sailing.",
      "In fact, setting up the work environment is always a chore for developers stepping into new areas. Fortunately, a good documentation provides that sense of direction one needs, it is like a map if one knows how to read one. And react native comes with a good documentation.",
      "While a lot of the things learnt from react.js comes in handy while working with react native, one needs to learn many new things too. How each operating system works, the things they allow and those they don't. For instance, this app of mine, won't work for ios. Because Apple does not allow programatically change wallpapers :(",
      "And then comes another big thing to get used to: the integration of 3rd party libraries into the code. Many of them need tinkering with the native files for the individual platforms, modifying the code. And one needs to have an understanding of what they are doing, the changes they are introducing to prevent errors. It is very easy to run into those I have seen.",
      "But the learning doesn't just end when the app is developed and ready. No, now comes the next step, releasing it on the app stores. One needs to jump through a lot of hoops to get their apps & games out into the public. But that's a good thing, the platforms are thorough in their process to make sure the end user does not receive any harm from a malicious application. It is daunting yes, so much more complicated than building a web app, but it is also that much more satisfactory. Your own app that users search for and use and share with their folks!"
    ]
  },
  collabchain: {
    link: "",
    icon: ccicon,
    cover:ccthumb,
    tag:["Solidity", "MongoDB", "Node.JS", "React.JS"],
    title:"Collab Chain",
    intro:"Welcome to Collab Chain, an online platform for researchers all across the world to collaborate on any research work, manage their resources, all with the security of blockchain technology.",
    insp: "Collabchain is my final year project for B.Tech, where I am working in a team of four. The idea for developing such a platform came from a team member who was inspired by the convinience platforms like Github, Gitlab, etc provide for collaboration among devs and aspired to do something similar for the research community.",
    jrny: [
      "We divided the work amongst ourselves such that I was responsible for the backend of the system. We were using Node.js for the server coupled with MongoDB for all the database requirements and solidity to create a blockchain network that would maintain an authentic and immutable log of all the activities being performed by our users.",
      "I had to learn how to write solidity code, and then design a code for contract that suited our requirements. Chatgpt did a lot of help, along with online learning resources, to solve conceptual doubts that I faced during the process. I even asked it to write a version of the contract that I could refer to, but one read through it with some dry run, and I realized the logic was hilariously flawed. Perhaps, there's still time in them replacing real developers. With my ethereum contract ready and tested, I moved on to building the central backend server.",
      "Since, storage on blockchains is expensive we decided that the majority of the data like the user data and the project data will be stored on a central server, while the blockchain shall serve a small but crucial purpose of maintaining immutable log of all the happenings in the projects maintained using our platform. The way our application worked was, the backend would receive requests from the frontend, perform the logical operations required, manipulate the data and push a request to our contract on the chain to create a log if required. Maintaining the atomicity of the operations was of paramount importance, either both the backend and blockchain code runs as expected or none of it does.",
      "Although I had previously worked on a backend application, my experience was very limited and so I was excited with this opportunity to enhance my learnings. While the structure of the code for the server application bore resemblance to my older application, there were many new additions like the introduction of Web3.js to interact with the smart contract, truffle for deployment of the said contract. Like any new project, this came with problems of its own, but reading through the docs helped a lot. No wonder everyone recommends them so much!",
      "Earlier, I had worked majorly with the frontend of applications, and felt the backend a bit daunting but more so boring. But as I worked through this project, I realized it is an equally exciting domain to work, if not more, with its own challenges and thrills to offer."
  ]
  },
  lorestore: {
    link: "",
    icon: lsicon,
    cover:lsthumb,
    tag:["MongoDB", "Node.JS", "React.JS", "TailwindCSS"],
    title:"The Lore Store",
    intro:"Introducing Lore Store, an engaging online book store where readers can explore an extensive collection of literary treasures. With a user-friendly interface, seamless navigation, and secure transactions via Stripe, Lore Store offers an immersive browsing experience.",
    insp: "During my B.Tech program, I was given the opportunity to work on a project related to software engineering. This project aimed to apply the theoretical knowledge we gained from studying various product development cycles into a practical setting. For my assignment, I was tasked with creating an online book store using a frontend framework of my choice and implementing a NoSQL backend system.",
    jrny: [
      "It was a semester-long project that began with the identification of a target user base, conducting surveys, and collecting data from potential users. One of the key lessons I learned during this project was the importance of asking the right questions to the appropriate audience. While gathering users' personal input was crucial, it needed to be verified with data before implementation.",
      "After identifying the user base and their product requirements, we created a Software Requirements Specification (SRS) and developed a project plan that included scheduling all stages of development and setting deadlines. Data flow diagrams were then constructed to provide a clear overview of the various processes involved before commencing the development phase.",
      "Initially, taking on a project of this scale as my first backend project felt daunting. However, by following the outlined steps and adhering to the established process, the development process became more streamlined. I approached the project by building one component at a time and gradually integrating them into the system. Whenever I encountered challenges, I referred to MongoDB documentation to find optimized solutions. Since the backend and frontend were deployed on separate servers, I faced hurdles in implementing Cross-Origin Resource Sharing (CORS). It took some time to overcome these obstacles, but once I understood how it worked, things became easier.",
      "Once a significant portion of the backend was completed, I shifted my focus to frontend development. I chose React to build the frontend and utilized Redux for state management and data sharing between components. To design the user interface, I sought inspiration from platforms like Dribbble, opting for a minimalistic and straightforward approach. I must admit that compared to backend development, frontend work required significantly more time and effort. The frontend development phase took me more than twice as long as the backend phase.",
      "Overall, the development process alone took approximately one and a half months. Some features proved more challenging to implement than others, and certain aspects had to be adjusted due to deadline constraints. Nevertheless, I was able to bring the project close to its initial plan. Upon deploying the finished work, I realized the complexities involved in integrating the frontend and backend seamlessly. Managing states during fetch requests and handling communication failures between the two servers were critical considerations. Neglecting these aspects could result in a system failure. This experience further deepened my appreciation for the tremendous effort developers put into running and maintaining massive platforms like Amazon and Flipkart.",
  ]
  },
  psreact: {
    link: "",
    icon: psicon,
    cover:psthumb,
    tag:["React.JS","TailwindCSS"],
    title:"PS React",
    intro:"Welcome to PS React, a platform built for casual gaming enthusiasts. Dive into a world of entertainment with classic games like Pokeduel, Hangman and Lights Out, designed to challenge and delight. Experience fun, sharpen your skills, with fellow gamers at PS React today.",
    insp: "When I was learning vanilla JS, I created a Pokémon game. It seemed logical to develop more games when I started working with React. There's a certain enthusiasm and excitement in working on an original idea rather than recreating existing projects.",
    jrny: [
      "When I first started learning React, one of the first significant assignments I received was to create a game called Hangman. At first, I wasn't quite sure what kind of game it was. upon some googling I discovered that Hangman is like a precursor to Wordle—a game where you try to guess the 5 letters of a random word within 6 attempts.  It seemed like a nice and easy task.",
      "However, the main purpose of this assignment was to learn React and its functionalities. Therefore, the game was supposed to be designed using a group of components, each with its own role. These components would come together to form the entire game, interacting with each other through states and props, and passing data among themselves. As for the words, I utilized an API that would provide a random word every time it was played.",
      "After completing Hangman, I worked on another game called Lights Out. In this game, the player is presented with a grid of lit and unlit cells, and the objective is to turn off all the lit cells. As I worked on this second assignment, an idea sparked in my head—I should combine all these games into a single application. Drawing on the concepts I had learned so far, such as component lifecycles, routing mechanisms, and events in React, I began building this collection of games, all written in React- thus the name, PS React.",
      "When I initially deployed the application, the user interface did not have an appeal to it and was not up to my satisfaction. Every time I opened the site, it bothered me. Almost a year later, I had an epiphany—I should adopt a Tinder-like cards layout. Swipe left, swipe right—simple and intuitive. However, I soon realized that this approach would not be ideal if a user wanted to revisit a game card after going through all five games. The Tinder-style approach wouldn't allow for that. So, I decided to implement a carousel of cards instead. Equipped with a better understanding of UI layouts, font pairing, color combinations, and the use of Tailwind CSS, I completely revamped the site to its current state.",
      "In the end, when I finally deployed the new version of the site, I felt a sense of accomplishment and pride in how far I had come. I could literally see the progress I had made. This, I believe, is a crucial aspect of being a developer or any artist in general—you learn, practice, and continually improve. It's an iterative process where you constantly refine your work."
  ]
  },
};

export default function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skill />} />
        <Route path="/autowall-privacy-policy" element={<AutowallPrivacy />} />
        <Route path="/projects" element={<Projects projects={projectsData} />} />
        <Route path="/projects/:projectid" element={<ProjectDetails projectsData={projectsData}/> } />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}