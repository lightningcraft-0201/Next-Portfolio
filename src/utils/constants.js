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
  TbBrandDjango
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
  { text: "Contact", path: "/contact" },
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
    company: "1Digitalstack.ai",
    designation: "Software Engineer 1",
    duration: "March 2022 - Present",
    companyImg: "1ds.jpg",
    description: (
      <>
        <ul>
          <li>
            I work on Reviniti, an analytics product designed for e-commerce
            players in the bid management domain. Solely migrated the old
            codebase from a templating engine (PugJS) to React with TypeScript.
          </li>
          <li>
            Engaged in developing new features, refactoring code, enhancing
            product performance, bug fixes and contributing towards achieving
            high scalability for the product.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Fact.MR",
    designation: "Associate Consultant Level 01",
    duration: "Dec 2020 - July 2021",
    companyImg: "fmr.svg",
    description: (
      <>
        <ul>
          <li>
            Engaged in creating comprehensive client-specific and syndicated
            research reports, along with SEO-focused articles and collateral
            materials within the domains of chemicals, materials, consumer
            goods, and industrial goods.
          </li>
          <li>
            Expertly estimated market valuations and conducted primary research
            in collaboration with industry experts to validate data, extract
            valuable market insights.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Portfolio Website",
    image: "portfolio-website",
    link: null,
    source: "https://github.com/vaheedsk36/portfolio-website-nextjs",
  },
  {
    type: "WEB-APP",
    title: "Dollars for Phone",
    image: "dollarsforphone",
    link: "https://www.dollarsforphone.com/",
    source: "https://github.com/DevRex-0201/React-MobileSales",
  },
  {
    type: "WEB-APP",
    title: "Toyota",
    image: "toyota",
    link: "https://www.toyota.com.br/",
    source: "https://github.com/DevRex-0201/WP-Toyota",
  },
  {
    type: "WEB-APP",
    title: "Pizza",
    image: "pizza",
    link: "https://modpizza.com/",
    source: "https://github.com/DevRex-0201/WP-ModPizza",
  },
  {
    type: "WEB-APP",
    title: "DC Training",
    image: "bodybuilding",
    link: "https://www.bodybuilding.com/",
    source: "https://github.com/DevRex-0201/WP-BodyBuilding",
  },
  {
    type: "WEB-APP",
    title: "Cooked and Loved",
    image: "cookedloved",
    link: "https://www.cookedandloved.com/",
    source: "https://github.com/DevRex-0201/WP-CookedLoved",
  },
  {
    type: "WEB-APP",
    title: "Bartell Global",
    image: "bartellglobal",
    link: "https://www.bartellglobal.com/",
    source: "https://github.com/DevRex-0201/WP-BartelGlobal",
  },
  {
    type: "WEB-APP",
    title: "Little Beaver",
    image: "littlebeaver",
    link: "https://www.littlebeaver.com/",
    source: "https://github.com/DevRex-0201/WP-LittleBeaver",
  },
  {
    type: "WEB-APP",
    title: "Cooperhewitt",
    image: "cooperhewitt",
    link: "https://www.cooperhewitt.org/",
    source: "https://github.com/DevRex-0201/WP-CooperHewitt",
  },
  {
    type: "WEB-APP",
    title: "Big issue",
    image: "bigissue",
    link: "https://www.bigissue.com/",
    source: "https://github.com/DevRex-0201/WP-BigIssue",
  },
  {
    type: "WEB-APP",
    title: "Skill Crush",
    image: "skillcrush",
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
    href: "https://join.skype.com/invite/yPE8eQ0TRND9",
    icon: FaSkype,
    backgroundColor: "social.twitter",
    hoverColor: "social.twitterHover",
  },
  {
    href: "https://www.instagram.com/codersk36/",
    icon: FaInstagram,
    backgroundColor: "social.instagram",
    hoverColor: "social.instagramHover",
  },
  {
    href: "https://ua.linkedin.com/in/volodymyr-rybak-b4b910130",
    icon: FaLinkedin,
    backgroundColor: "social.linkedin",
    hoverColor: "social.linkedinHover",
  },
  {
    href: "https://codersk36.hashnode.dev/",
    icon: FaHashnode,
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
