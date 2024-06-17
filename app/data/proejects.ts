export type ProjectType = {
  id: number
  title: string
  images: string[]
  type: 'page' | 'app'
  descriptions: string[]
  features: string[]
  techStacks: string[]
  sourceCode: string | null
  liveDemo: string | null
}

export const projects: ProjectType[] = [
  {
    id: 1,
    title: 'FairyShare App',
    images: [
      'fairy-1.webp',
      'fairy-2.webp',
      'fairy-3.webp',
      'fairy-4.webp',
      'fairy-5.webp',
      'fairy-6.webp',
      'fairy-7.webp'
    ],
    type: 'app',
    descriptions: [
      'The Share House app helps users assign tasks and track expenses with their housemates using shared calendars and lists. We developed this app to address the challenges of communal living and to promote fairness and harmony in shared spaces, as reflected in the name "FAIRy Share House."',
      'Technologies used are Next.js, TypeScript, React Query, Tailwind CSS, Storybook for the frontend. For the backend, NestJS, PostgreSQL, Prisma, Jest. Tools include Docker, Figma, and GitHub Actions.',
      '< Test Account > \n Email: felip@example.com \n Password: password'
    ],
    features: [
      'User Accounts: Registration, profile management, and house creation with custom rules and expense tracking options.',
      'House Information: Displays house rules and member details., Task Management: Schedule tasks on a shared, color-coded calendar, with the ability to mark tasks as completed.',
      'Expense Tracking: Monitors shared household expenses and tracks unpaid expenses.',
      'Reminders: Users receive notifications for upcoming tasks and unpaid expenses on the main page.'
    ],
    techStacks: ['NestJS', 'PostgreSQL', 'React', 'TypeScript', 'TailwindCSS'],
    sourceCode: 'https://github.com/HAK2024/fairy-share',
    liveDemo: 'https://fairyshare.xyz/'
  },
  {
    id: 2,
    title: 'Channel Cluster - Chat App',
    images: ['chat-1.webp', 'chat-2.webp', 'chat-3.webp', 'chat-4.webp'],
    type: 'app',
    descriptions: [
      'This is a real-time chat application built using Express.js, EJS, Socket.IO, MongoDB, and vanilla CSS. It was developed entirely with vanilla JavaScript, leveraging EJS for templating and vanilla CSS, without the use of any CSS libraries.',
      'Users can join different chat rooms, send and receive messages in real-time, and interact with other users.'
    ],
    features: [
      'User Authentication: Uses bcrypt and cookie sessions to ensure user data is secure.',
      'Multiple Chat Rooms: Users can join and leave various chat rooms based on their interests.',
      'Real-time Chat: Built with Socket.IO for live communication without needing to refresh the page.'
    ],
    techStacks: ['Socket.io', 'Express.js', 'MongoDB', 'Mongoose', 'EJS'],
    sourceCode: 'https://github.com/hyejin-seok/channel-chat-app',
    liveDemo: null
  },
  {
    id: 3,
    title: 'Post-it Blog',
    images: [
      'blog-1.webp',
      'blog-2.webp',
      'blog-3.webp',
      'blog-4.webp',
      'blog-5.webp',
      'blog-6.webp'
    ],
    type: 'app',
    descriptions: [
      'This application allows users to create, read, update, and delete (CRUD) short post-it style notes and image posts. Users can also bookmark their favorite posts and images.',
      'The app is built with Next.js and TypeScript, styled with Tailwind CSS, and uses Cloudinary for image storage. Next Auth is used to ensure secure user authentication, while React Dropzone provides a user-friendly drag-and-drop interface for image uploads.'
    ],
    features: [
      'Post-It Style Notes Blog: Users can create, read, update, delete, and bookmark post-it style notes.',
      'Image Blog: Users can upload images, manage them, and bookmark their favorite images. Images can be uploaded via drag-and-drop or by selecting files.',
      'Cloudinary Integration: Uploaded images are stored securely using Cloudinary cloud service.',
      'Authentication: Users can sign up, log in, and log out.',
      'Contact Page: Users can send messages directly to the blog team through a simple, user-friendly form.'
    ],
    techStacks: ['Next.js', 'Prisma', 'TypeScript', 'Next Auth', 'Cloudinary'],
    sourceCode: 'https://github.com/hyejin-seok/post-it-blog-app',
    liveDemo: null
  },
  {
    id: 4,
    title: 'Quotes Collection App',
    type: 'app',
    images: [
      'quotes-1.webp',
      'quotes-2.webp',
      'quotes-3.webp',
      'quotes-4.webp'
    ],
    descriptions: [
      'This application allows users to explore inspirational quotes, save them to their personal collection, view detailed information about each quote, and even tweet(X) their favorite quotes.',
      'Built with React and Vite, and styled using Bootstrap CSS, the Quotes Collection web application utilizes these technologies to provide a responsive and efficient user experience. It employs React Router DOM for smooth navigation between views, enhancing usability and accessibility.'
    ],
    features: [
      'Browse Quotes: Users can explore a curated collection of inspirational quotes sourced from an external API.',
      'Save Quotes: Users can save their favorite quotes to their personal collection for later reference.',
      'View Details: Detailed information about each quote, including the author and source, can be viewed within the application.',
      'Quotes Collections: Users can save their favorite quotes and manage their collection by adding, viewing, and deleting quotes.',
      'Tweet Quotes: Users can easily share their favorite quotes on Twitter with a single click of a button.'
    ],
    techStacks: ['React', 'Vite', 'React Router', 'Bootstrap'],
    sourceCode: 'https://github.com/hyejin-seok/quotes-collection',
    liveDemo: null
  },
  {
    id: 5,
    title: 'World Heart - NGO Site',
    images: ['ngo-1.webp', 'ngo-2.webp'],
    type: 'page',
    descriptions: [
      'This site is developed using HTML, SASS, JavaScript, and Webpack. Initially, I created the framework using only HTML and SASS, without the use of any CSS libraries, as part of my early learning process. Following my learning JavaScript, I implemented it using Webpack.',
      'The motivation behind building this NGO page stems from the multitude of global issues such as climate change, wars, diseases, poverty, and more. It is my hope that people recognize the role of NGOs more prominently and take collective action for a better world.'
    ],
    features: [
      'Navigation: Users can navigate through different sections of the website using the main menu or the navigation menu, which includes a hamburger icon for easy access on mobile devices.',
      'Hamburger Nav: Initially, 🍔 was created using only SASS, with CSS used to display and hide it.',
      'Donate Modal: Users can donate to the organization by selecting different donation frequencies (monthly, bimonthly, quarterly, or one-time) via a modal window.',
      'Subscription Form: Users can subscribe to join projects of the organization and receive updates from the organization by providing their email addresses via a subscription form.',
      'Responsive Design: The application is designed to be accessible and functional across various devices and screen sizes. '
    ],
    techStacks: ['JavaScript', 'Sass', 'HTML', 'Webpack'],
    sourceCode: 'https://github.com/hyejin-seok/world-heart-NGO-page',
    liveDemo: null
  },
  {
    id: 6,
    title: 'My Portfolio Site',
    images: [
      'portfolio-1.webp',
      'portfolio-2.webp',
      'portfolio-3.webp',
      'portfolio-4.webp'
    ],
    type: 'page',
    descriptions: [
      'My personal portfolio website not only showcases my skills and projects as a web developer but also highlights my design capabilities using Figma and Next.js.',
      'This site is a reflection of my personal style and technical expertise, featuring both functionality and aesthetics.'
    ],
    features: [
      'Interactive Animations: Utilize Framer Motion, Tailwind CSS to create fluid, eye-catching animations that make the UI lively and engaging.',
      'Project Card/Modal: Clickable project cards reveal detailed modals with dynamic images, tech stack, key features, source code, and live demo links.',
      'Dynamic Theme Switching: Toggle between dark and light modes for a comfortable viewing experience regardless of the environment or time of day.',
      'Contact Form: Seamlessly send emails via a user-friendly form, facilitated by the Resend library.',
      'Scroll Buttons: Easy navigation with "Scroll Down" to move to the next section and "Scroll to Top" button that appears as you move away from the top.',
      'Background Music: An optional background music feature that users can turn on to enhance their experience while browsing through the portfolio.'
    ],
    techStacks: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Framer', 'Figma'],
    sourceCode: 'https://github.com/hyejin-seok/my-portfolio',
    liveDemo: 'https://hyejinseok.com/'
  },
  {
    id: 7,
    title: 'Jewellery eCommerce Page',
    images: ['jewellery-1.webp', 'jewellery-2.webp'],
    type: 'page',
    descriptions: [
      'This is the first landing page I built, where I designed the entire structure and logo independently, aiming for a clean and efficient user interface.',
      'My goal was to use only HTML and CSS, without relying on any CSS libraries. I implemented dynamic features such as a rotating testimonials section and a responsive hamburger navigation bar using pure CSS, avoiding the need for JavaScript.',
      'This project was an excellent opportunity to practice and refine my basic HTML and CSS skills.'
    ],
    features: [
      'Responsive Navbar',
      'CSS-only Hamburger Menu',
      'Video in Hero Section',
      'Rotating Testimonials with Keyframe Animations',
      'Styling with Pseudo-elements and Pseudo-classes',
      'Fully Responsive Design'
    ],
    techStacks: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/hyejin-seok/Jewellery-Page',
    liveDemo: null
  },
  {
    id: 8,
    title: 'Climate Change Infographic',
    images: ['info-1.webp', 'info-2.webp'],
    type: 'page',
    descriptions: [
      'This infographic is the first project I created after learning basic HTML and CSS. I designed and developed it myself, thoroughly enjoying the process. Through this project, I discovered my strong interest in both design and coding.',
      'I chose the topic of climate change because it is a significant issue today, and I wanted to raise awareness about its impact.'
    ],
    features: [
      'Dynamic title with Keyframe Animations',
      'Enhanced Typography with Text Shadows',
      'Creative Text Styling Using Pseudo-elements',
      'Fully Responsive Design'
    ],
    techStacks: ['HTML', 'CSS'],
    sourceCode: 'https://github.com/hyejin-seok/climate-infographic',
    liveDemo: null
  }
]
