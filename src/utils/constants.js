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
    company: "RUBIKA",
    designation: "Web Developer & Designer",
    duration: "September 2022 - May 2023",
    companyImg: "rubika.png",
    description: (
      <>
        In my role as a FullStack Web Developer & Designer at RUBIKA, I crafted immersive digital experiences that seamlessly blended creativity and technology. I was the driving force behind projects like Car Showcase 2023, where I harnessed the power of Next.js 13 to create a cutting-edge web platform. The Mobile Sales Website for Dollarsforphone.com stands testament to my design finesse, employing React.js and Figma to ensure a seamless, user-friendly interface. Additionally, I contributed to diverse projects like Toyota, Pizza, and Cooked Loved, leveraging WordPress and a suite of technologies to deliver engaging and visually appealing websites.
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
        At CODEVERY, my journey as a FullStack Web Developer & Designer was marked by innovation and versatility. I spearheaded projects like DC Training, an Ecommerce platform developed on WordPress, coupled with Ecommerce plugins and advanced JavaScript libraries, enhancing user interactions. The dynamic Road Skills School, crafted with React.js and a Themeforest theme, showcased my prowess in modern web technologies. I seamlessly integrated WordPress with React in projects like Bartell Global and Big Issue, ensuring a harmonious fusion of functionality and aesthetics.
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
        During my tenure as a FullStack Web Developer & Designer at DIGIS, I left an indelible mark through projects that showcased both creativity and technical expertise. The Fitness Club, powered by Next.js, exemplified my proficiency in cutting-edge frameworks, creating a seamless user experience. Simultaneously, I utilized the robust capabilities of WordPress in projects like Skillcrush, Cooperhewitt, and Little Beaver, crafting visually stunning and intuitive websites. My time at DIGIS honed my skills, enabling me to create captivating digital landscapes that resonate with users.
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
    title: "Car Showcase 2023",
    image: "carshowcase",
    link: null,
    source: "https://github.com/DevRex-0201/Next-CarShowacase",
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
    title: "Road Skills School",
    image: "reactschool",
    link: "https://road-skills-school.web.app/",
    source: "https://github.com/DevRex-0201/React-OnlineSchool",
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
    title: "Fitness Club",
    image: "fitnessclub",    
    link: null,
    source: "https://github.com/DevRex-0201/Next-Ecommerce-SPEQ",
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
    title: "Cooked and Loved",
    image: "cookedloved",
    link: "https://www.cookedandloved.com/",
    source: "https://github.com/DevRex-0201/WP-CookedLoved",
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
