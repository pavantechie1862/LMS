import { v4 as uuidv4 } from "uuid";
import TimelineView from "../TimelineView";

import "./index.css";
import Header from "../Header";

const timelineItemsList = [
  {
    id: uuidv4(),
    categoryId: "COURSEID",
    title: "21 April 2020",
    courseTitle: "Basic Programming Concepts",
    description:
      "In this video, we will cover the fundamentals of programming. We will explore what programming is and why it is important, as well as introduce you to some basic programming concepts using the Python programming language.",
    duration: "50 Min",
    youtubeUrl: "https://www.youtube.com/watch?v=quW5dAGpXiU",
    playList: "https://www.youtube.com/watch?v=quW5dAGpXiU",
  },

  {
    id: uuidv4(),
    categoryId: "COURSEID",
    title: "23 April 2020",
    courseTitle: "Learning a Programming Language",
    description:
      "In this beginner-friendly video, we will explore the basics of Python programming. Starting from the ground up, we will cover essential concepts such as variables, data types, and control structures, before moving on to more advanced topics such as functions and modules. Along the way, we will work on several coding exercises and projects to reinforce our learning. ",
    duration: "30 hrs",
    youtubeUrl: "https://youtu.be/hEgO047GxaQ",
    playList:
      "https://youtube.com/playlist?list=PLsyeobzWxl7poL9JTVyndKe62ieoN-MZ3",
  },

  {
    id: uuidv4(),
    categoryId: "COURSEID",
    title: "25 April 2020",
    courseTitle: "Algorithms and Data Structures",
    description:
      "In this video, we'll dive into the world of algorithms and data structures, exploring the fundamentals of computer science that underpin much of modern software development. We'll start by discussing the importance of algorithms and data structures, and how they help us solve complex problems efficiently.",
    duration: "45 hrs",
    youtubeUrl: "https://youtu.be/CHhwJjR0mZA",
    playList:
      "https://youtube.com/playlist?list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY",
  },

  {
    id: uuidv4(),
    categoryId: "COURSEID",
    title: "27 April 2020",
    courseTitle: "Building Simple Programs",
    description:
      "In this video, we'll build a simple calculator application using Python. We'll start by discussing the basics of Python programming and how we can use it to create graphical user interfaces (GUIs). From there, we'll use the Tkinter library to create a user interface for our calculator, complete with buttons and input fields.",
    duration: "20 hrs",
    youtubeUrl: "https://youtu.be/6CZB6VTy3Hg",
    playList:
      "https://youtube.com/playlist?list=PLl316cKxhMxtOWHa88kDqm42uWz1aqGfD",
  },

  {
    id: uuidv4(),
    categoryId: "COURSEID",
    title: "29 April 2020",
    courseTitle: "Building Complex Programs",
    description:
      "In this video, we will cover the fundamentals of programming. We will explore what programming is and why it is important, as well as introduce you to some basic programming concepts using the Python programming language.",
    duration: "9 hrs",
    youtubeUrl: "https://youtu.be/FOGRHBp6lvM",
    playList:
      "https://youtube.com/playlist?list=PLjVLYmrlmjGfAUdLiF2bQ-0l8SwNZ1sBl",
  },

  {
    id: uuidv4(),
    categoryId: "COURSEID",
    title: "01 May 2020",
    courseTitle: "Applications of programming",
    description:
      "In this video, we'll explore the wide range of applications of Python programming, from data analysis to web development and beyond. We'll start by discussing the basics of Python programming and its unique features, including its simplicity and versatility. From there, we'll dive into several practical examples of how Python is used in the real world, such as data analysis and visualization, machine learning and artificial intelligence, web development with popular frameworks like Django and Flask, and automation and scripting.",
    duration: "30 min",
    youtubeUrl: "https://youtu.be/kLZuut1fYzQ",
    playList: "https://youtu.be/kLZuut1fYzQ",
  },

  {
    id: uuidv4(),
    categoryId: "COURSEID",
    title: "05 May 2020",
    courseTitle: "Project-1",
    description:
      "In this video, we'll work on building a medium-sized project using Python. We'll start by discussing the basics of Python programming and how we can use it to develop medium-sized projects. From there, we'll dive into a specific project idea, such as a personal finance tracker or a task management system. ",
    duration: "1 hr",
    youtubeUrl: "https://youtu.be/Y2iD-InK334",
    playList: "https://youtu.be/kLZuut1fYzQ",
  },

  {
    id: uuidv4(),
    categoryId: "COURSEID",
    title: "07 May 2020",
    courseTitle: "Project-2",
    description:
      "In this video, we'll work on building a major project using Python. We'll start by discussing the basics of Python programming and how we can use it to develop large-scale projects. From there, we'll dive into a specific project idea, such as a social media platform or an e-commerce website. We'll discuss how to plan and architect the project, and how to break it down into smaller, manageable components.",
    duration: "20 min",
    youtubeUrl: "https://youtu.be/pQeFxdT3FGY",
    playList: "https://youtu.be/kLZuut1fYzQ",
  },

  {
    id: uuidv4(),
    categoryId: "COURSEID",
    title: "10 May  2020",
    courseTitle: "Deploying Applications",
    description:
      "In this video, we'll work on building a major project using Python. We'll start by discussing the basics of Python programming and how we can use it to develop large-scale projects. From there, we'll dive into a specific project idea, such as a social media platform or an e-commerce website. We'll discuss how to plan and architect the project, and how to break it down into smaller, manageable components.",
    duration: "45 min",
    youtubeUrl: "https://youtu.be/KjFc9wZ0gFw",
    playList: "https://youtu.be/KjFc9wZ0gFw",
  },
];

const Course = () => (
  <div>
    <Header />
    {/*Below component render lectures in chronological order */}
    <TimelineView timelineItemsList={timelineItemsList} />
  </div>
);

export default Course;
