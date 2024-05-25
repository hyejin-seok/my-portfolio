export type ProjectType = {
  id: number
  title: string
  images: string[]
  description: string
  techStacks: string[]
  sourceUrl: string
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'FairyShare App',
    images: ['project1-1.webp', 'project1-2.webp', 'project1-3.webp'],
    description:
      'This is a real-time chat application built using Express.js, EJS, Socket.IO, MongoDB, and vanilla CSS. It was developed entirely with vanilla JavaScript, leveraging EJS for templating and vanilla CSS, without the use of any CSS libraries. \n\n Users can join different chat rooms, send and receive messages in real-time, and interact with other users.',
    techStacks: [
      'NestJS',
      'TypeScript',
      'PostgreSQL',
      'NextJS(React)',
      'TailwindCSS'
    ],
    sourceUrl: 'https://github.com/HAK2024/fairy-share'
  },
  {
    id: 2,
    title: 'Channel Cluster - Chat App',
    images: ['project1-1.webp', 'project1-2.webp', 'project1-3.webp'],
    description:
      'This is a real-time chat application built using Express.js, EJS, Socket.IO, MongoDB, and vanilla CSS. It was developed entirely with vanilla JavaScript, leveraging EJS for templating and vanilla CSS, without the use of any CSS libraries. \n\n Users can join different chat rooms, send and receive messages in real-time, and interact with other users.',
    techStacks: ['MongoDB', 'Socket.io', 'EJS', 'Mongoose', 'Express.js'],
    sourceUrl: 'https://github.com/hyejin-seok/channel-chat-app'
  },
  {
    id: 3,
    title: 'Quotes Collection App',
    images: ['project1-1.webp', 'project1-2.webp', 'project1-3.webp'],
    description:
      'This application allows users to explore inspirational quotes, save them to their personal collection, view detailed information about each quote, and even X(tweet) their favorite quotes.\n Built with React and Vite, and styled with Bootstrap CSS, this application provides a seamless user experience.',
    techStacks: ['React', 'Bootstrap', 'Vite', 'React Router'],
    sourceUrl: 'https://github.com/hyejin-seok/quotes-collection'
  },
  {
    id: 4,
    title: 'World Heart - NGO Site',
    images: ['project1-1.webp', 'project1-2.webp', 'project1-3.webp'],
    description:
      'This site is developed using HTML, SASS, JavaScript, and Webpack. Initially, I created the framework using only HTML and SASS, without the use of any CSS libraries, as part of my early learning process. Following my learning JavaScript, I implemented it using Webpack. \n\n The motivation behind building this NGO page stems from the multitude of global issues such as climate change, wars, diseases, poverty, and more. It is my hope that people recognize the role of NGOs more prominently and take collective action for a better world.',
    techStacks: ['Javascript', 'SCSS', 'HTML', 'Webpack'],
    sourceUrl: 'https://github.com/hyejin-seok/world-heart-NGO-page'
  },
  {
    id: 5,
    title: 'Jewellery Page',
    images: ['project1-1.webp', 'project1-2.webp', 'project1-3.webp'],
    description:
      'This is the first landing page I built, where I designed the entire structure and logo myself. My goal was to use only HTML and CSS, without relying on any CSS libraries. I implemented the rotating testimonials section and the hamburger navigation bar using only pure CSS, without any JavaScript. \n This project was an excellent opportunity to practice and refine my basic HTML and CSS skills.',
    techStacks: ['HTML', 'CSS'],
    sourceUrl: 'https://github.com/hyejin-seok/channel-chat-app'
  },
  {
    id: 6,
    title: 'Climate Change Infographic',
    images: ['project1-1.webp', 'project1-2.webp', 'project1-3.webp'],
    description:
      'This is an infographic, and it is  the first project I created after learning basic HTML and CSS. I designed and developed it myself, thoroughly enjoying the process. Through this project, I discovered my strong interest in both design and coding. \n I chose the topic of climate change because it is a significant issue today, and I wanted to raise awareness about its impact.',
    techStacks: ['HTML', 'CSS'],
    sourceUrl: 'https://github.com/hyejin-seok/channel-chat-app'
  },
  {
    id: 7,
    title: 'My Portfolio Site',
    images: ['project1-1.webp', 'project1-2.webp', 'project1-3.webp'],
    description:
      'This is a static website that I designed using Figma and built with Next.js. It includes features such as dark/light theme toggle, background music switch, and an email contact form. I created animation effects using Framer Motion. Building my portfolio was a very enjoyable experience.',
    techStacks: [
      'Next.js',
      'TailwindCSS',
      'Figma',
      'TypeScript',
      'Framer motion'
    ],
    sourceUrl: 'https://github.com/hyejin-seok/my-portfolio'
  }
]
