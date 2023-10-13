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
  TbBrandGmail
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
    company: "RUBIKA",
    designation: "Web Developer & Designer",
    duration: "September 2022 - May 2023",
    companyImg: "rubika.png",
    description: (
      <>
        I served as a dynamic FullStack Web Developer & Designer at RUBIKA, where I transformed digital experiences through innovative design and seamless development. One of my key accomplishments was designing the Mobile Sales Website, focusing on user-friendly interfaces and visually appealing designs using Figma. I also contributed significantly to prominent websites like Toyota and Pizza, employing technologies like Swiper, Modernizr, OWL Carousel, and JQuery for optimal user interactions and engagemen Designt.
      </>
    ),
  },
  {
    company: "CODEVERY",
    designation: "Web Developer & Designer",
    duration: "September 2020 - August 2022",
    companyImg: "codevery.png",
    description: (
      <>
        During my tenure at CODEVERY, I excelled as a FullStack Web Developer & Designer, leading impactful projects that redefined digital landscapes. Notably, I developed DC Training, an Ecommerce platform, utilizing WordPress with Ecommerce plugins, LanySizes, and JQuery. I also contributed to projects such as Bartell Global, creating seamless websites using WordPress and the Astra theme, and Big Issue, where I integrated React with WordPress for enhanced functionality and user experience.
      </>
    ),
  },
  {
    company: "DIGIS",
    designation: "Web Developer & Designer",
    duration: "January 2018 - August 2020",
    companyImg: "digis.png",
    description: (
      <>
        As a FullStack Web Developer & Designer at DIGIS, I played a key role in shaping digital platforms with creativity and technical expertise. My contributions included projects like Skillcrush, where I leveraged WordPress to create intuitive user interfaces, and Cooperhewitt and Little Beaver, where I utilized WordPress to build visually appealing and functional websites. My work at DIGIS honed my skills in WordPress development, ensuring seamless and responsive web experiences for users.
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "Projects",
    title: "My Portfolio",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/DevRex-0201/Next-Portfolio",
  },
  {
    type: "Projects",
    title: "Dollars for Phone",
    image: "dollarsforphone",
    link: "https://www.dollarsforphone.com/",
    source: "https://github.com/DevRex-0201/React-MobileSales",
  },
  {
    type: "Projects",
    title: "Toyota",
    image: "toyota",
    link: "https://www.toyota.com.br/",
    source: "https://github.com/DevRex-0201/WP-Toyota",
  },
  {
    type: "Projects",
    title: "Pizza",
    image: "pizza",
    link: "https://modpizza.com/",
    source: "https://github.com/DevRex-0201/WP-ModPizza",
  },
  {
    type: "Projects",
    title: "DC Training",
    image: "bodybuilding",
    link: "https://www.bodybuilding.com/",
    source: "https://github.com/DevRex-0201/WP-BodyBuilding",
  },
  {
    type: "Projects",
    title: "Cooked and Loved",
    image: "cookedloved",
    link: "https://www.cookedandloved.com/",
    source: "https://github.com/DevRex-0201/WP-CookedLoved",
  },
  {
    type: "Projects",
    title: "Bartell Global",
    image: "bartellglobal",
    link: "https://www.bartellglobal.com/",
    source: "https://github.com/DevRex-0201/WP-BartelGlobal",
  },
  {
    type: "Projects",
    title: "Little Beaver",
    image: "littlebeaver",
    link: "https://www.littlebeaver.com/",
    source: "https://github.com/DevRex-0201/WP-LittleBeaver",
  },
  {
    type: "Projects",
    title: "Cooperhewitt",
    image: "cooperhewitt",
    link: "https://www.cooperhewitt.org/",
    source: "https://github.com/DevRex-0201/WP-CooperHewitt",
  },
  {
    type: "Projects",
    title: "Big issue",
    image: "bigissue",
    link: "https://www.bigissue.com/",
    source: "https://github.com/DevRex-0201/WP-BigIssue",
  },
  {
    type: "Projects",
    title: "Skill Crush",
    image: "skillcrush",
    link: "https://skillcrush.com/",
    source: "https://github.com/DevRex-0201/WP-SkillCrush",
  },
  {
    type: "Designs",
    title: "Dollars for Phone Design",
    image: "f_reactmobile",
    link: "https://www.dollarsforphone.com/",
    source: "https://github.com/DevRex-0201/React-MobileSales",
  },
  {
    type: "Designs",
    title: "Toyota Design",
    image: "f_toyota",
    link: "https://www.toyota.com.br/",
    source: "https://github.com/DevRex-0201/WP-Toyota",
  },
  {
    type: "Designs",
    title: "Pizza Design",
    image: "f_pizza",
    link: "https://modpizza.com/",
    source: "https://github.com/DevRex-0201/WP-ModPizza",
  },
  {
    type: "Designs",
    title: "Bartell Global Design",
    image: "f_bartellglobal",
    link: "https://www.bartellglobal.com/",
    source: "https://github.com/DevRex-0201/WP-BartelGlobal",
  },
  {
    type: "Designs",
    title: "Little Beaver Design",
    image: "f_littlebeaver",
    link: "https://www.littlebeaver.com/",
    source: "https://github.com/DevRex-0201/WP-LittleBeaver",
  },
  {
    type: "Designs",
    title: "Cooperhewitt Design",
    image: "f_cooperhewitt",
    link: "https://www.cooperhewitt.org/",
    source: "https://github.com/DevRex-0201/WP-CooperHewitt",
  },
  {
    type: "Designs",
    title: "Big issue Design",
    image: "f_bigissue",
    link: "https://www.bigissue.com/",
    source: "https://github.com/DevRex-0201/WP-BigIssue",
  },
  {
    type: "Designs",
    title: "Skill Crush Design",
    image: "f_skillcrush",
    link: "https://skillcrush.com/",
    source: "https://github.com/DevRex-0201/WP-SkillCrush",
  },
];


export const socialMediaLinks = [
  {
    href: "https://github.com/vaheedsk36",
    icon: FaGithub,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
  {
    href: "https://volodymyrrybak.ua@gmail.com",
    icon: TbBrandGmail,
    backgroundColor: "purple.700",
    hoverColor: "purple.600",
  },
  {
    href: "https://join.skype.com/invite/xlqmhpwVZ4qL",
    icon: FaSkype,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  {
    href: "https://turtle-yfu4177.slack.com/archives/C060WQWFCUD",
    icon: FaSlack,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://t.me/+jcFHZRpM_BNjMGJl",
    icon: FaTelegram,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  {
    href: "https://discordapp.com/users/1162261037635088434",
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
