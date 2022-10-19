const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://github.com/ztlaw',
  title: 'WL',
  
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Walt Lungan',
  role: 'Full Stack Web Developer and Software Engineer',
   photo:  '/images/headshot.jpg', // why doesnt this image path work?
  // photo: 'http://placekitten.com/200/300',
  description:
    "As a web developer, I strive to help local businesses create a positive impact in their online presence, whether their goal is to sell a product or provide a service. Through SEO, modern web accessibility guidelines, and responsive design, I create websites and full-stack web applications for everybody to experience. I look forward to being able to work with you!  ",
  resume: 'https://github.com/ztlaw/Resume/raw/main/Walt%20Lungan%20Resume%2010182022.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/walt-lungan/',
    github: 'https://github.com/ztlaw',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Restaurant Website',
    description:
      'A static restaurant-themed website using HTML5, CSS and VanillaJS. Please read more on github!',
    stack: ['HTML5', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/ztlaw/restaurant-website',
    livePreview: 'https://transcendent-palmier-0c4df3.netlify.app/',
  },
  {
    name: 'Go! Social & Fitness',
    description:
      'A full stack web application catered to anyone who exercises and wants to share their journey with others.',
    stack: ['MongoDB', 'Javascript', 'React', 'Express', 'Bootstrap', 'JSX'],
    sourceCode: 'https://github.com/ztlaw/go-social-and-fitness',
    livePreview: 'https://github.com',
  },
  {
    name: 'Homework Bound Assignment Tracker',
    description:
      'A full stack web application created for students of all grades to document and track their school assignments.',
    stack: ['MongoDB', 'Javascript', 'React', 'Express'],
    sourceCode: 'https://github.com/ztlaw/homework-bound',
    livePreview: 'https://homeworkbound.herokuapp.com/',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Express',
  'MongoDB',
  'Node', 
  'MySQL', 
  'PostgreSQL'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'waltlungan@gmail.com',
}

export { header, about, projects, skills, contact }
