//metadata
export const mainTitle = "LevaniDze Web Designer & Photographer"; //metadadta Title
export const companyDescription =
  "I create modern & functional, SEO-optimized custom-designed websites for businesses, including restaurants, gardening services, travel agencies, and more. Along with web development, I offer professional photography to elevate your online presence and perfectly align with your business needs."; //metadata title
//info
export const companyName = "LevaniDze";
export const companyFullName = "LevaniDze";
export const underLogo = ""; //Restaurant or Web agency or...
export const companyDomain = "https://Levanidze.com";
export const googleVerification = "";
export const googleAnalyticsId = "";
export const companyLogo =
  "https://github.com/levanydze/SUP/blob/main/VkLeo/assets/LevaniDze..png?raw=true";

// menu list order
export const sectionOrder = [
  "example", //keep examole here as it is
  //set menu categories down here
  // "dinner",
  // "breakfast",
  // "dessert",
  // "lunch",
  // "drinks",
  // "special",
];
export const socialMediaLinks = [
  {
    facebook: "https://www.facebook.com/levanidze/",
    instagram: "https://www.instagram.com/artoflevanidze/",
    linkedin: "https://www.linkedin.com/in/levanidze/",
    twitter: "https://twitter.com/levanydze",
  },
];

//nav items and sort
import { NavItemProps } from "../components/header/header3/Navigation";
export const navItems: NavItemProps[] = [
  { title: "HOME", url: "/", homePage: true },
  { title: "Photography", url: "/photography" },
  // { title: "SERVICES", url: "/services" },
  // { title: "WEBSITES", url: "/websites" },
  // { title: "CONTACT", url: "/contact" },
  // { title: "BOOK A MEET", url: "/reservation", button: true },
];

// firebase iner menuLink for fetching menu for specific restaurant
// for example: export const firebaseMenuLink = "chachaab/menu";
// export const firebaseMenuLink = "chachaab/menu";
