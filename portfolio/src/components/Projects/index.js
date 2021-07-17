import uq from "../../images/unanswered-questions.png";
import fitnessTracker from "../../images/dashboard.PNG";
import ecommerce from "../../images/ecommerce.jpg";
import devBlog from "../../images/dev-tech-blog.PNG";
import weatherDashboard from "../../images/weather-dashboard.PNG";
import employeeDirectory from "../../images/homepage-screenshot.PNG";

const projects = [
  {
    id: 1,
    title: "Unanswered Questions",
    href: "https://github.com/breyera/Unanswered-Questions-1",
    githref: "http://unanswered-questions.herokuapp.com/",
    image: uq,
    description:
      "A website based around philosophy, and the commonly known individuals therein.",
    languages:
      "JavaScript, APIs, MySQL, Node.js, Express, Tailwind, Handlebars.js, Socket.io",
  },
  {
    id: 2,
    title: "Fitness Tracker",
    href: "https://github.com/breyera/fitness-tracker",
    githref: "https://tranquil-waters-83609.herokuapp.com/",
    image: fitnessTracker,
    description:
      "Keep up with your workout plans and exercises and check progress on the dashboard to reach your fitness goals.",
    languages: "JavaScript, MongoDB, Mongoose, Heroku, Express",
  },
  {
    id: 3,
    title: "Developer Tech Blog",
    href: "https://github.com/breyera/dev-tech-blog",
    githref: "https://gentle-escarpment-54377.herokuapp.com/",
    image: devBlog,
    description:
      "Create an account/log in, to create, update, comment on or delete blogs.",
    languages: "Node, Express, Sequelize, MySQL, Handlebars.js, Bcrpyt",
  },
  {
    id: 4,
    title: "Employee Directory",
    href: "https://github.com/breyera/employee-directory/tree/main/employee-directory",
    githref: "https://breyera.github.io/employee-directory/",
    image: employeeDirectory,
    description:
      "Employee directory giving you quick access to filterable non-sensitive employee information.",
    languages: "JavaScript, React, Axios",
  },
  {
    id: 5,
    title: "What's the Weather",
    href: "https://github.com/breyera/whats-the-weather",
    githref: "https://breyera.github.io/whats-the-weather/",
    image: weatherDashboard,
    description: "A weather dashboard with a 5 day forecast.",
    languages: "HTML, CSS, JavaScript, Weather API",
  },
  {
    id: 6,
    title: "Ecommerce",
    href: "https://github.com/breyera/ecommerce",
    githref: "https://github.com/breyera/ecommerce",
    image: ecommerce,
    description:
      "Command-line application that lets users manage a e-commerce back end.",
    languages: "Node, Express, Sequelize, MySQL",
  },
];

export default projects;
