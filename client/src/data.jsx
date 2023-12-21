import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
  FaLock,
  FaGithub,
} from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { FiFileText, FiUser, FiLogOut, FiExternalLink } from "react-icons/fi";

import mhstore from "./assets/MhStore.png";
import mhslice from "./assets/Slice.png";
import doctor from "./assets/Doctor.png";
import busicox from "./assets/Busicox.png";
import interior from "./assets/Interior.png";
import hiking from "./assets/Hiking.png";
import medicust from "./assets/Medicust.png";
import resturant from "./assets/Resturant.png";
import hunt from "./assets/Hunt.png";
import kamaruka from "./assets/Kamakura.png";
import travel from "./assets/travel.png";
import cinemedia from "./assets/cinemedia.png";
import amazon from "./assets/Amazon.png";
import carhub from "./assets/carhub.png";
import hilink from "./assets/hilink.png";
import mainportfolio from "./assets/mainportfolio.png";
import blogsite from "./assets/blogsite.png";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav_icon" />,
    path: "/",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav_icon" />,
    path: "/about",
  },

  {
    id: 3,
    name: "Projects",
    icon: <FaFolderOpen className="nav_icon" />,
    path: "/portfolio",
  },

  {
    id: 4,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav_icon" />,
    path: "/contact",
  },
  // {
  //   id: 5,
  //   name: "Login",
  //   icon: <FaLock className="nav_icon" />,
  //   path: "/login",
  // },
  // {
  //   id: 6,
  //   name: "SignUp",
  //   icon: <FiLogIn className="nav_icon" />,
  //   path: "/signup",
  // },

  // {
  //   id: 7,
  //   name: "Logout",
  //   icon: <FiLogOut className="nav_icon" />,
  //   path: "/",
  // },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "MD. Mahadi",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Hasan",
  },

  {
    id: 3,
    title: "Age : ",
    description: "23 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Bangladeshi",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Dhaka, Bangladesh",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+880 1704672028",
  },

  {
    id: 8,
    title: "Email : ",
    description: "hasan.mahadi2903@gmail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "MD.Mahadi Hasan",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "Bangla, English, Hindi",
  },
];

export const status = [
  {
    id: 2,
    no: "20+",
    title: "Completed <br /> Projects",
  },
  {
    id: 1,
    no: "1+",
    title: "Years of <br /> Experience",
  },

  {
    id: 3,
    no: "30+",
    title: "Happy <br /> Customers",
  },

  {
    id: 4,
    no: "3+",
    title: " Awards <br /> Won",
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "October 2023 - PRESENT",
    title: "Software Engineer</span>",
    desc: "Not yet",
  },

  // {
  //   id: 2,
  //   category: "experience",
  //   icon: <FaBriefcase />,
  //   year: "2013 - 2018",
  //   title: "Fresher</span>",
  //   desc: "Not yet",
  // },

  // {
  //   id: 3,
  //   category: "experience",
  //   icon: <FaBriefcase />,
  //   year: "2005 - 2013",
  //   title: "Fresher</span>",
  //   desc: "Not yet",
  // },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2023",
    title: "BSc in Computer Science and Engineering </span>",
    desc: "Internation University of Business, Agriculture and Technology",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2019",
    title: "H.S.C </span>",
    desc: "Government Science Colleger, Tejgaon",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2017",
    title: "S.S.C </span>",
    desc: "Adarsha Biddya Niketon Manikdi",
  },
];

export const skills = [
  {
    id: 1,
    title: "Html",
    percentage: "90",
  },
  {
    id: 2,
    title: "Css",
    percentage: "88",
  },
  {
    id: 3,
    title: "Jquery",
    percentage: "70",
  },

  {
    id: 4,
    title: "Bootstrap",
    percentage: "88",
  },
  {
    id: 5,
    title: "Taliwind CSS",
    percentage: "72",
  },
  {
    id: 6,
    title: "Material UI",
    percentage: "76",
  },
  {
    id: 7,
    title: "Socket.io",
    percentage: "72",
  },

  {
    id: 8,
    title: "Javascript",
    percentage: "87",
  },
  {
    id: 9,
    title: "React",
    percentage: "85",
  },
  {
    id: 10,
    title: "Node",
    percentage: "82",
  },
  {
    id: 11,
    title: "Express",
    percentage: "84",
  },
  {
    id: 12,
    title: "MongoDB",
    percentage: "78",
  },
  {
    id: 13,
    title: "Next.js",
    percentage: "85",
  },
  {
    id: 14,
    title: "TypeScript",
    percentage: "80",
  },
];

export const portfolio = [
  {
    id: 18,
    img: mhstore,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "MH Store",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN Technology, Socket.io, TaliwindCss",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Multivendor_Ecommerce_Application.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mh-store-multivendor-ecommerce.vercel.app/",
      },
    ],
  },
  {
    id: 19,
    img: blogsite,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "MH Blgsite",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "TypeScript, Nextjs",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Blog_Site.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mh-blogsite.vercel.app/",
      },
    ],
  },
  {
    id: 20,
    img: mainportfolio,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "MH Portfolio",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN Technology, Nextjs",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Main_Portfolio.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mdmahadihasan.vercel.app/",
      },
    ],
  },
  {
    id: 21,
    img: cinemedia,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Cinemedia",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN Technology, TaliwindCss",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Cinemedia.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://cinemedia-client.vercel.app/",
      },
    ],
  },
  {
    id: 22,
    img: travel,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Travel World",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN Technology",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Travel_Booking_App.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://travel-world-client-mern.vercel.app/",
      },
    ],
  },
  {
    id: 23,
    img: amazon,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Amazon Clone (User Side & Frontend)",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN Technology",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Amazaon_Clone.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://amazaon-clone-client.vercel.app/",
      },
    ],
  },
  {
    id: 24,
    img: carhub,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Car Hub",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Nextjs, TypeScript",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Carhub.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mh-carhub.vercel.app/",
      },
    ],
  },
  {
    id: 25,
    img: hilink,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Hilink",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "Nextjs, TypeScript",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Hilink.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://hilink-lilac.vercel.app/",
      },
    ],
  },
  {
    id: 26,
    img: mhslice,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "MH Slice Delivery (Not responsive for all devices)",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN Technology",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Food-Ordering-Application.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mh-slice-client-mern.vercel.app/",
      },
    ],
  },

  {
    id: 27,
    img: doctor,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Doctor Appointment Application (Not responsive for all devices)",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "MERN Technology",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Doctor-Appointment-Application-.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://doctor-appointment-application.netlify.app",
      },
    ],
  },

  {
    id: 28,
    img: busicox,
    title: "Web Application",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Busicox",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, JQuery, Bootstrap etc.",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Busicox.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mahadihasan2903.github.io/Busicox/",
      },
    ],
  },

  {
    id: 29,
    img: interior,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Interior Design",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, JQuery, Bootstrap etc.",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Interior-Design.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mahadihasan2903.github.io/Interior-Design/",
      },
    ],
  },

  {
    id: 30,
    img: hiking,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Hiking Adventure",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, JQuery, Bootstrap etc.",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Hiking-Adventure.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mahadihasan2903.github.io/Hiking-Adventure/",
      },
    ],
  },

  {
    id: 31,
    img: medicust,
    title: "Web Application",

    details: [
      {
        title: "Project : ",
        desc: "Medicust",
      },
      {
        title: "Language : ",
        desc: "HTML, CSS, Javascript, JQuery, Bootstrap etc.",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Medicust.git",
      },

      {
        title: "Preview : ",
        desc: "https://mahadihasan2903.github.io/Medicust/",
      },
    ],
  },

  {
    id: 32,
    img: resturant,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Resturant",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, JQuery, Bootstrap etc.",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Resturant.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mahadihasan2903.github.io/Resturant/",
      },
    ],
  },

  {
    id: 33,
    img: hunt,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Hunt",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, JQuery, Bootstrap etc.",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/HUNT.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mahadihasan2903.github.io/HUNT/",
      },
    ],
  },

  {
    id: 34,
    img: kamaruka,
    title: "Web Application",

    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "kamakura Resturant (Not responsive for all devices)",
      },
      {
        icon: <FaCode />,
        title: "Language : ",
        desc: "HTML, CSS, Javascript, JQuery, Bootstrap etc.",
      },
      {
        icon: <FaGithub />,
        title: "Source : ",
        desc: "https://github.com/MahadiHasan2903/Kamakura-Resturant.git",
      },

      {
        icon: <FiExternalLink />,
        title: "Preview : ",
        desc: "https://mahadihasan2903.github.io/Kamakura-Resturant/",
      },
    ],
  },
];

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];
