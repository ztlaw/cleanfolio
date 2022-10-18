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
    "Over the last few years, while working in my government job doing data analysis and in a public service position,I realized that lot of the work I was doing could be automated with a lot less human error. I took it upon myselfto learn JavaScript, and in turn, learning Web-Development to further hone my skills. Since the onset of the pandemic, while working,  I've also been freelancing in Web Dev to help support myself and my family. ",
  resume: 'https://example.com',
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
  'Node'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'waltlungan@gmail.com',
}

export { header, about, projects, skills, contact }
