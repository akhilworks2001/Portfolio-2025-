export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'MovieFacts',
    desc: 'This web applictaion is a treasure trove of cinematic delights, offering comprehensive details about your favorite films. Discover insightful ratings, captivating trailers, and in-depth casting information for each movie in our collection.',
    subdesc:
      'Built with React and Router-DOM for dynamic UI and navigation, Axios for API fetching, SCSS for styling, React-Player for trailers, and Redux for state management.',
    href: "https://movie-facts.vercel.app/",
    code: "https://github.com/akhilworks2001/MovieFacts",
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Axios',
        path: 'assets/axios.png',
      },
      {
        id: 3,
        name: 'Redux',
        path: '/assets/redux.png',
      },
      {
        id: 4,
        name: 'Sass',
        path: '/assets/sass.png',
      },
    ],
  },
  {
    title: 'E-commerce',
    desc: 'this web hosts a scalable and secure e-commerce platform with a comprehensive set of features for both customers and administrators. Users can enjoy seamless product browsing, a streamlined checkout process. Admins can efficiently manage products, orders, and user accounts, with access to detailed analytics.',
    subdesc:
      'Built with React and Router-DOM, Firebase for secure authentication management, Redux-Saga for state management, and Bootstrap for responsive design.',
    href: 'https://e-commerce-two-nu-93.vercel.app',
    code: "https://github.com/akhilworks2001/E-commerce",
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: 'assets/bootstrap.png',
      },
      {
        id: 3,
        name: 'Firebase',
        path: '/assets/firebase.png',
      },
      {
        id: 4,
        name: 'Redux',
        path: '/assets/redux.png',
      },
    ],
  },
  {
    title: 'Youtube Clone',
    desc: 'This web application mimics the core features of YouTube, including video playback, search functionality, likes, subscibers and views.',
    subdesc:
      'Developed using React and Router-DOM for a dynamic UI and smooth navigation, Axios for efficient API fetching, Tailwind for responsive styling, and React-Player for seamless video playback.',
    href: 'https://youtube-kappa-mocha.vercel.app',
    code: "https://github.com/akhilworks2001/Youtube",
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Router',
        path: '/assets/router.png',
      },
    ],
  },
  {
    title: 'Pro Veterinarian',
    desc: 'This web application serves as a demonstration of front-end styling techniques using HTML and Bootstrap framework. It offers a curated collection of styled components, layouts, and responsive design patterns.',
    subdesc:
      'Built with HTML for structured content and Bootstrap for responsive design, ensuring a visually appealing and mobile-friendly layout with pre-styled components.',
    href: 'https://akhilworks2001.github.io/Pro-Veterinarian',
    code: 'https://github.com/akhilworks2001/Pro-Veterinarian',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'HTML',
        path: '/assets/html.png',
      },
      {
        id: 2,
        name: 'Bootstrap',
        path: 'assets/bootstrap.png',
      },
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet, isLaptop) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4.5, -6, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : isLaptop ? [9, -5.5, 0] : [9, -5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : isLaptop ?  [12, 3, 0] : [6, 4, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : isLaptop ? [-24, 10, 0] : [-19, 7, 0],
    targetPosition: isSmall ? [-6, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : isLaptop ? [-13, -13, -10] : [-12, -14, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];

export const downloadCV = () => {
  const link = document.createElement('a');
  link.href = '/Akhil_latest.pdf'; 
  link.download = 'Akhil_latest.pdf';
  link.click();
};

export const images = [
  {src: "/assets/html.png", alt: "html"},
  {src: "/assets/css.png", alt: "css"},
  {src: "/assets/sass.png", alt: "sass"},
  {src: "/assets/bootstrap.png", alt: "bootstrap"},
  {src: "/assets/tailwind.png", alt: "tailwind"},
  {src: "/assets/javascript.png", alt: "javascript"},
  {src: "/assets/reactjs.png", alt: "react"},
  {src: "/assets/firebase.png", alt: "firebase"},
  {src: "/assets/framer.png", alt: "framer"},
  {src: "/assets/git.png", alt: "git"},
  {src: "/assets/next.png", alt: "next"},
  {src: "/assets/nodejs.png", alt: "nodejs"},
  {src: "/assets/redux.png", alt: "redux"},
  {src: "/assets/axios.png", alt: "axios"},
  {src: "/assets/typescript.png", alt: "typescript"},
  {src: "/assets/express.png", alt: "express"},
]