import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaMailchimp,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaSkype,
  FaDiscord,
  FaTelegram,
  FaSlack,
} from "react-icons/fa";

import {
  TbBrandVue,
  TbBrandNuxt,
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
  TbBrandWordpress,
  TbBrandLaravel,
  TbBrandTailwind,
  TbBrandMongodb,
  TbBrandMysql,
  TbBrandFigma,
  TbBrandDjango,
  TbBrandGoogle
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiPug,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "About", path: "/about" },
  { text: "Skills", path: "/skills" },
  { text: "Projects", path: "/projects" },
  { text: "Experience", path: "/experience" },
];

export const interestsData = [
  {
    interest: "Software Engineering",
    icon: BsCodeSlash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Internet of Things",
    icon: FcElectronics,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "Web Scraping",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "Tailwind",
    icon: TbBrandTailwind,
  },
  {
    name: "Python",
    icon: FaPython,
  },
  {
    name: "Django",
    icon: TbBrandDjango,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "VueJS",
    icon: TbBrandVue,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Wordpress",
    icon: TbBrandWordpress,
  },
  {
    name: "Laravel",
    icon: TbBrandLaravel,
  },
  {
    name: "Figma",
    icon: TbBrandFigma,
  },
  {
    name: "Mongodb",
    icon: TbBrandMongodb,
  },
  {
    name: "MySQL",
    icon: TbBrandMysql,
  }
];

export const workData = [
  {
    company: "DIGITPOL",
    designation: "Web Developer & Automation Expert",
    duration: "September 2022 - May 2023",
    companyImg: "rubika.png",
    description: (
      <>
        This project marked a significant milestone for our company, highlighting our tailored solutions for a prominent U.S. brand. My role involved using a diverse technology stack, including WordPress WooCommerce, PHP, MySQL, and Yoast SEO, to develop a robust main platform for 'Smart Minds' (smartminds.one). Additionally, I played a key role in integrating a state-of-the-art real-time chatting platform (collaboration.smartminds.one), utilizing Django, React-Socket, and React-TypeScript. My contribution was further enhanced by employing advanced design principles through Figma, ensuring a seamless and user-friendly experience.
      </>
    ),
  },
  {
    company: "RADICA SYSTEMS LIMITED",
    designation: "Intern",
    duration: "September 2020 - August 2022",
    companyImg: "codevery.png",
    description: (
      <>
        During my internship, I contributed to the development of several key projects, including 'Cooked and Loved', 'US Body Building' (BodyBuilding.com), and 'Mobile E-commerce Site' (DollarsForPhone.com). These projects were primarily built using MERN stack and React.js, offering me substantial experience and proficiency in modern web development technologies. My role in these diverse projects showcases my ability to adapt and deliver in various web development contexts, enhancing my skills in both front-end and back-end development.
      </>
    ),
  },
  {
    company: "UPWOK",
    designation: "Freelancer",
    duration: "January 2018 - August 2020",
    companyImg: "digis.png",
    description: (
      <>
        As a freelancer on Upwork, I have successfully developed various e-commerce and landing page projects, notably for 'Odigeo Connect', 'Warby Parker', and 'Hipcamp'. My expertise extends beyond web development to encompass automatic data analysis, data extraction, data combination, and image processing. This diverse skill set has allowed me to contribute to a range of projects, demonstrating my versatility and technical proficiency in both web development and data processing domains.
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "Web",
    title: "Car Showcase 2023",
    image: "carshowcase",
    link: null,
    source: "https://github.com/DevRex-0201/Next-CarShowacase",
  },
  {
    type: "Web",
    title: "Toyota",
    image: "toyota",
    link: "https://www.toyota.com.br/",
    source: "https://github.com/DevRex-0201/WP-Toyota",
  },
  {
    type: "Web",
    title: "Road Skills School",
    image: "reactschool",
    link: "https://road-skills-school.web.app/",
    source: "https://github.com/DevRex-0201/React-OnlineSchool",
  },
  {
    type: "Web",
    title: "DC Training",
    image: "bodybuilding",
    link: "https://www.bodybuilding.com/",
    source: "https://github.com/DevRex-0201/WP-BodyBuilding",
  },
  {
    type: "Web",
    title: "Fitness Club",
    image: "fitnessclub",    
    link: null,
    source: "https://github.com/DevRex-0201/Next-Ecommerce-SPEQ",
  },
  {
    type: "Web",
    title: "Pizza",
    image: "pizza",
    link: "https://modpizza.com/",
    source: "https://github.com/DevRex-0201/WP-ModPizza",
  },  
  {
    type: "Web",
    title: "Cooked and Loved",
    image: "cookedloved",
    link: "https://www.cookedandloved.com/",
    source: "https://github.com/DevRex-0201/WP-CookedLoved",
  },
  {
    type: "Web",
    title: "Dollars for Phone",
    image: "dollarsforphone",
    link: "https://www.dollarsforphone.com/",
    source: "https://github.com/DevRex-0201/React-MobileSales",
  },
  {
    type: "Web",
    title: "Bartell Global",
    image: "bartellglobal",
    link: "https://www.bartellglobal.com/",
    source: "https://github.com/DevRex-0201/WP-BartelGlobal",
  },
  {
    type: "Web",
    title: "Little Beaver",
    image: "littlebeaver",
    link: "https://www.littlebeaver.com/",
    source: "https://github.com/DevRex-0201/WP-LittleBeaver",
  },
  {
    type: "Web",
    title: "Cooperhewitt",
    image: "cooperhewitt",
    link: "https://www.cooperhewitt.org/",
    source: "https://github.com/DevRex-0201/WP-CooperHewitt",
  },
  {
    type: "Web",
    title: "Big issue",
    image: "bigissue",
    link: "https://www.bigissue.com/",
    source: "https://github.com/DevRex-0201/WP-BigIssue",
  },
  {
    type: "Web",
    title: "Skill Crush",
    image: "skillcrush",
    link: "https://skillcrush.com/",
    source: "https://github.com/DevRex-0201/WP-SkillCrush",
  },
  {
    type: "Automation",
    title: "Scraping Toolkit For US Job Sites",
    image: "Py-US-Sites-ScrapingToolKit",
    link: "https://www.dollarsforphone.com/",
    source: "https://github.com/DevRex-0201/Py-US-Sites-Scraping-ToolKit",
  },
  {
    type: "Automation",
    title: "Automated Data Extraction and Transformation Tool",
    image: "Py-Automatic-Data-Extraction-Transformation",
    link: "https://www.toyota.com.br/",
    source: "https://github.com/DevRex-0201/WP-Toyota",
  },
  {
    type: "Automation",
    title: "Pizza Design",
    image: "Py-Automatic-Data-Extraction-Transformation",
    source: "https://github.com/DevRex-0201/Py-Automatic-Data-Extraction-Transformation.git",
  },
  {
    type: "Automation",
    title: "DNA Bet Data Scraping and Logging",
    image: "py-lottoe-scraper",
    link: "https://drive.google.com/file/d/1p2l2MHc4DB4CBRd-Ll9WorAQEu8YNAYN/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-DNA-Bet-Data-Scraping",
  },
  {
    type: "Automation",
    title: "Shareholder Meeting Voting Data Scraper",
    image: "py-voting_scraper",
    link: "https://drive.google.com/file/d/1-OtaDkjpABUefRRqXjnf3lYccmRQGfMI/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-Shareholder-VotingData-Scraper",
  },
  {
    type: "Automation",
    title: "Judicial Reports Data Extractor",
    image: "extractor",
    link: "https://drive.google.com/file/d/1Mc46d3WJl2AmhDeNig3cBlbeZfAUAgAS/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-Reports-Data-Extractor",
  },
  {
    type: "Automation",
    title: "Web Scraping and File Download Script",
    image: "pdf&mp3_downloader",
    link: "https://drive.google.com/file/d/1eJHEY_-FR-wwVOaV-_YZGTKIwPx72ayI/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-Scraping-PDF-MP3-Downloader",
  },
  {
    type: "Automation",
    title: "NEF to JPEG Converter",
    image: "py-nef-jpg",
    source: "https://github.com/DevRex-0201/Py-NEF-JPEG-Converter",
  },
  {
    type: "Automation",
    title: "Translation and Data Upload Tool",
    image: "translation",
    link: "https://drive.google.com/file/d/1YR85TWRDuvrvJlJHK5CgYCQgdT857A2A/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-Translation-and-Data-Upload-Tool",
  },
  {
    type: "Automation",
    title: "YouTube Video Downloader",
    image: "py-video-downloader",
    link: "https://drive.google.com/file/d/1ztljYdrFuyDd719e1CdsK2Rp_9prfKuF/view?usp=drive_link",
    source: "",
  },
  {
    type: "Automation",
    title: "Image Cropping Processor",
    image: "image_crop",
    link: "https://drive.google.com/file/d/1jEX7336rLk1PZ5ZE7m_FxkuDGASvDe7s/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-Image-Croper",
  },
  {
    type: "Automation",
    title: "Cryptocurrency Data Scraper",
    image: "Py-Cryptocurrency-Scraper",
    link: "https://drive.google.com/file/d/10Jhiy6MHYIuvQ1q5WwVW6LwjVGgR9KiI/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-Cryptocurrency-Scraper",
  },
  {
    type: "Automation",
    title: "Web Scraping and SEC Forms Download Script",
    image: "scraping_downloader",
    link: "https://drive.google.com/file/d/1RgDf8e8VBdzymq2dIVkAxHOZAWtQgP7n/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-SECForms-Downloader",
  },
  {
    type: "Automation",
    title: "Google Sheets PDF Downloader",
    image: "pdf_download",
    link: "https://drive.google.com/file/d/1j3OVPLV8pt5Df5Op93d067Wnv3nd0yk3/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-GoogleSheets-PDF-Downloader",
  },
  {
    type: "Automation",
    title: "OpenAI Data Extraction Application",
    image: "chatGPT",
    link: "https://drive.google.com/file/d/1fl50_yp1ZuMqPc3pRdpsq-1t3wWf4cDw/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-Text-CSV",
  },
  {
    type: "Automation",
    title: "Tkinter ChatGPT Interaction Project",
    image: "text_csv",
    link: "https://drive.google.com/file/d/1Tqjb4t08Ux2Wo3A3V37c6I-Jk35mWqhk/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-ChatGPT-Interaction",
  },
  {
    type: "Automation",
    title: "Watermark and Upload Images to Google Drive",
    image: "watermark",
    link: "https://drive.google.com/file/d/1_0fjYa_iLsTgU3-D4LtjH4hobgMRv4bV/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-Watermark-Upload",
  },
  {
    type: "Automation",
    title: "Image Filter Processing Project",
    image: "image_filter",
    source: "https://github.com/DevRex-0201/Py-Image-Filter",
  },
  {
    type: "Automation",
    title: "JSON to CSV Converter",
    image: "json_csv",
    link: "https://drive.google.com/file/d/1OQP4cQNev6Sf7WXoTaTXbVHUOJaKbVn_/view?usp=drive_link",
    source: "https://github.com/DevRex-0201/Py-JSON-CSV-Converter",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/DevRex-0201",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://join.skype.com/invite/pR8b43dpA110",
    icon: FaSkype,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  {
    href: "https://join.slack.com/t/jinming-workspace/shared_invite/zt-2al6gxl6r-bZXckQi8cPq8wukDiv76Ew",
    icon: FaSlack,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://discord.gg/mgmdzMhMG8",
    icon: FaDiscord,
    backgroundColor: "social.hashnode",
    hoverColor: "social.hashnodeHover",
  },
];

export const query = `
query GetUserArticles($page: Int = 0) {
  user(username: "vaheed") {
    publication {
      posts(page: $page) {
        title
        brief
        slug
        coverImage
      }
    }
  }
}
`;
