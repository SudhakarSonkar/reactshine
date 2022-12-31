/* charity dummy data list :-
- Navbar
- Banner section
- Feature section
- Branch section
- Work section
- Milestone block
- Humanity block
- Promotion block
- Donation section
- Blog section
- Client block
- Footer
  - menu widget
  - copyright 
  - social links
*/

/* ------------------------------------ */
// Navbar menu
/* ------------------------------------ */
export const menuItems = [
  {
    label: 'Home',
    path: '#home',
    offset: '81',
    internal: true
  },
  {
    label: 'About Us',
    path: '#aboutus',
    offset: '100',
    internal: true
  },
  {
    label: 'Projects',
    path: '#projects',
    offset: '81',
    internal: true
  },
  {
    label: 'Media',
    path: '#media',
    offset: '81',
    internal: true
  },
  {
    label: 'Team',
    path: '/team',
    offset: '81',
    internal:false
  },
  {
    label: 'Contact',
    path: '#contact',
    offset: '81',
    internal: true
  },
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
import bannerSlide1 from 'common/assets/image/charity/banner/team.png';
import bannerSlide2 from 'common/assets/image/charity/banner/team4.png';
import bannerSlide3 from 'common/assets/image/charity/banner/team2.png';
import bannerSlide4 from 'common/assets/image/charity/banner/team3.png';

export const bannerSlides = [
  {
    id: 1,
    thumb_url: bannerSlide1,
  },
  {
    id: 2,
    thumb_url: bannerSlide2,
  },
  {
    id: 3,
    thumb_url: bannerSlide3,
  },
  {
    id: 4,
    thumb_url: bannerSlide4,
  },
];

/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/charity/feature/1.svg';
import featureIcon2 from 'common/assets/image/charity/feature/2.svg';
import featureIcon3 from 'common/assets/image/charity/feature/3.svg';
import featureIcon4 from 'common/assets/image/charity/feature/4.svg';
import featureIcon5 from 'common/assets/image/charity/feature/5.svg';
import featureIcon6 from 'common/assets/image/charity/feature/6.svg';

export const featureData = {
  title: 'Get Involved',
  slogan: 'It does not necessarily require time or money, it requires heart.',
  features: [
    {
      id:  1,
      icon: featureIcon1,
      title: 'Volunteer with Us ',
      description: 'Volunteering is all about doing good for others, without expecting something in return.',
      
    },
    {
      id: 2,
      icon: featureIcon2,
      title: 'Sponsor a Kid',
      description:
        'Make a little donation to adopt a kid so they can continue their education for another year',
    },
    {
      id: 3,
      icon: featureIcon3,
      title: 'Make a Donation',
      description: 'Donate one-time or on a monthly basis, so that we can keep helping those who are in need.',
    },
    {
      id: 4,
      icon: featureIcon4,
      title: 'Partner with Us',
      description:
        'Lets together help the underprivileged shine.',
    },
    {
      id: 5,
      icon: featureIcon5,
      title: 'Donate Goods',
      description: 'Your used books, clothes, and toys can fill someones world with happiness',
    },
    {
      id: 6,
      icon: featureIcon6,
      title: 'Spread the Word',
      description:
        'Share our story with your friends on social media.',
    },
  ],
};

/* ------------------------------------ */
// Branch section data
/* ------------------------------------ */
import thumbImage from 'common/assets/image/charity/branch/1.jpeg';
import thumbImage1 from 'common/assets/image/charity/branch/2.jpg';
import thumbImage2 from 'common/assets/image/charity/branch/3.jpg';
import thumbImage3 from 'common/assets/image/charity/branch/4.jpg';
import thumbImage4 from 'common/assets/image/charity/branch/5.jpg';
import thumbImage5 from 'common/assets/image/charity/branch/6.jpg';

export const branchData = [
  {
    id: 1,
    menuItem: 'Education Hut',
    image: thumbImage,
    slogan: 'WITH YOUR LOVE',
    title: `Education`,
    description:
      'Education is a basic human right as well as a necessity. In our education hut schools, we provide it at zero cost to the underprivileged children.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 2,
    menuItem: 'Prioritizing Health',
    image: thumbImage1,
    slogan: 'WITH YOUR CARE',
    title: `Prioritizing Health`,
    description:
      'Our team has organized various health awareness campaigns and camps to include a large mass of crowd towards improving life quality by a better health. We also raise funds for the needy through our NGO',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 3,
    menuItem: 'Khyaal',
    image: thumbImage2,
    slogan: 'WITH YOUR HELP',
    title: `Khyaal`,
    description:
      'A campaign for the life creators, women. It is an awareness campaign to educate women about menstrual hygiene and distribute sanitary pads, blankets etc. A series of events including a skit is conducted frequently throughout the year.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 4,
    menuItem: 'Blood Donation',
    image: thumbImage3,
    slogan: 'WITH YOUR LOVE',
    title: `Blood Donation`,
    description:
      'Our mission is saving life by fulfilling the urgent requirement of blood by circulating it through our team and social media platforms.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 5,
    menuItem: 'Plantation Drive',
    image: thumbImage4,
    slogan: 'WITH YOUR CARE',
    title: `Plantation Drive`,
    description:
      'Caring for our mother nature is equally important as caring for the human lives. We have conducted various Plantation Drives to plant a large number of trees and educate people about the need of saving our planet.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  {
    id: 6,
    menuItem: 'Book Bank',
    image: thumbImage5,
    slogan: 'WITH YOUR HELP',
    title: `Book Bank`,
    description:
      'Knowledge is the biggest wealth and we have got it stored in our book banks. Any person having the desire to study will not be disappointed as we have a book bank. People can come and take any book they wish and return as per need.',
    linkUrl: '#1',
    linkText: 'SEE MORE OF OUR IMPACT',
  },
  
];

/* ------------------------------------ */
// Work feature data
/* ------------------------------------ */
import mapPin from 'common/assets/image/charity/map-pin.svg';
import searchIcon from 'common/assets/image/charity/search-icon.svg';
import icon1p from 'common/assets/image/charity/icon-100p.svg';

export const workData = {
  title: 'How We Works',
  slogan:
    'We started as a camp meant for encouraging education, providing financial support and establishing a good society.',
  features: [
    {
      id: 1,
      icon: mapPin,
      title: 'Our Mission',
      description:
        'We have one prime aim of providing affordable education to those who are financially unfortunate. We also aim to provide a gentle push towards equality for women out there. The other aims being helping in bad times of person or family in need. Generating awareness about social evils still existing and making this world a little better place.',
    },
    {
      id: 2,
      icon: searchIcon,
      title: 'Our Plan',
      description:
        'As an NGO, we recieve collective help which we then transfer in same matters by providing service, money and awareness. All the years down the lane, we believe goodness does exists and we provide a channel to make it reach to the correct person. Each case per se is handled with care, authenticity and well being of both the donor and the beneficiary.',
    },
    {
      id: 3,
      icon: icon1p,
      title: 'Our Modus Operandi',
      description:
        'We generally work in our field by establishing Education Hut Centres. The choice of village, the curriculum of such centres and the facilities is determined by the caretaker of such Huts. At such Huts we organise our camps, awareness programs and teach for free. The education that we provide is never compromised in quality.',
    },
  ],
};
/* ------------------------------------ */
// Milestone block data
/* ------------------------------------ */
export const milestoneData = {
  title: 'ADOPT A CHILD',
  amount: '400+',
  text: 'STUDIES TILL DATE',
  counterItems: [
    {
      id: 1,
      amount: '600+',
      title: 'Volunteer',
    },
    {
      id: 2,
      amount: '30+',
      title: 'Projects',
    },
    {
      id: 3,
      amount: '6+',
      title: 'Year of Works',
    },
    {
      id: 4,
      amount: '10k+',
      title: 'People Helped',
    },
  ],
};

/* ------------------------------------ */
// Humanity block data
/* ------------------------------------ */
import humanityGlob from 'common/assets/image/charity/humanity-glob.png';

export const humanityData = {
  image: humanityGlob,
  slogan: 'ONLINE SOCIAL FUNDRAISING',
  title: 'We need your help to promotr humanity',
  text:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.',
  lists: [
    // {
    //   id: 1,
    //   text: 'Let them drink pure',
    // },
    // {
    //   id: 2,
    //   text: 'Ensure them medicare',
    // },
    // {
    //   id: 3,
    //   text: 'create opportunity of education',
    // },
  ],
};

/* ------------------------------------ */
// Promotion block data
/* ------------------------------------ */
import happyKids from 'common/assets/image/charity/promotion.svg';

export const promotionData = {
  slogan: 'GET YOUR COMMUNITY ON BOARD',
  title: 'We are creating a world with basic safety for all.',
  text1:
    'We exist to permanently end violent conict and exploitation facing our world’s most isolated and unprotected communities.',
  text2:
    'We partner with local visionaries in volatile conict zones to build community-run initiatives and drive global policy change to end violent conict, save lives, and give communities the safety they deserve.',
  lists: [
    // {
    //   id: 1,
    //   text: 'Let them drink pure',
    // },
    // {
    //   id: 2,
    //   text: 'Ensure them medicare',
    // },
    // {
    //   id: 3,
    //   text: 'create opportunity of education',
    // },
  ],
  image: happyKids,
};

/* ------------------------------------ */
// Donation form data
/* ------------------------------------ */
export const paymentPolicy = [
  {
    id: 1,
    title: 'One Time',
    value: 'oneTime',
    text: 'One Time donation given',
  },
  {
    id: 2,
    title: 'Ongoing',
    value: 'ongoing',
    text: 'Everymonth donation given',
  },
];

export const currencyOptions = [
  {
    id: 1,
    value: 'usd',
    title: '$ USD',
  },
  {
    id: 2,
    value: 'gbp',
    title: '£ GBP',
  },
  {
    id: 3,
    value: 'cny',
    title: '¥ CNY',
  },
];

/* ------------------------------------ */
// Blog post data
/* ------------------------------------ */
import thumb1 from 'common/assets/image/charity/blog/thumb-1.png';
import thumb2 from 'common/assets/image/charity/blog/thumb-2.png';

export const posts = [
  {
    id: 1,
    title: 'Uganda Embraces South Sudanese Refugees, For Now',
    excerpt:
      '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
    thumbUrl: thumb1,
    btnText: 'Learn More ',
    btnUrl: '#1',
  },
  {
    id: 2,
    title: 'BRITs Week 2019 together with O2 is here',
    excerpt:
      '72 million children around the world are not enrolled in school. Concern Worldwide focuses on providing basic education to those…',
    thumbUrl: thumb2,
    btnText: 'Learn More ',
    btnUrl: '#1',
  },
];

/* ------------------------------------ */
// Client block data
/* ------------------------------------ */
import windows from 'common/assets/image/charity/clients/1.png';
import airbnb from 'common/assets/image/charity/clients/2.png';
import adidas from 'common/assets/image/charity/clients/3.png';
import ibm from 'common/assets/image/charity/clients/4.png';
import amazon from 'common/assets/image/charity/clients/5.png';
import google from 'common/assets/image/charity/clients/6.png';

export const clients = [
  {
    id: 1,
    logo: windows,
    name: 'windows',
    link: '#1',
  },
  {
    id: 2,
    logo: airbnb,
    name: 'airbnb',
    link: '#2',
  },
  {
    id: 3,
    logo: adidas,
    name: 'adidas',
    link: '#3',
  },
  {
    id: 4,
    logo: ibm,
    name: 'ibm',
    link: '#4',
  },
  {
    id: 5,
    logo: amazon,
    name: 'amazon',
    link: '#5',
  },
  {
    id: 6,
    logo: google,
    name: 'google',
    link: '#6',
  },
];

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */
export const menuWidgets = [
  {
    id: 1,
    title: 'USEFUL LINKS',
    menu: [
      {
        id: 1,
        text: 'Home',
        link: '#1',
      },
      {
        id: 2,
        text: 'About Us',
        link: '#1',
      },
      {
        id: 3,
        text: 'Media',
        link: '#1',
      },
      {
        id: 4,
        text: 'Team',
        link: '#1',
      },
      {
        id: 5,
        text: 'Contact',
        link: '#1',
      },
    ],
  },
  {
    id: 2,
    title: 'OUR WORKS',
    menu: [
      {
        id: 1,
        text: 'Education Hut School',
        link: '#1',
      },
      {
        id: 2,
        text: 'Khyaaal',
        link: '#1',
      },
      {
        id: 3,
        text: 'Book Bank',
        link: '#1',
      },
      {
        id: 4,
        text: 'Blood Donation',
        link: '#1',
      },
      {
        id: 5,
        text: 'Blanket Distribution',
        link: '#1',
      },
    ],
  },
  {
    id: 3,
    title: 'Contact Us',
    menu: [
      {
        id: 1,
        text: 'Maharajganj Chauraha',
        link: '#1',
      },
      {
        id: 2,
        text: 'Gorakhpur, 273007',
        link: '#1',
      },
      {
        id: 3,
        text: 'Uttar Pradesh',
        link: '#1',
      },
    ],
  },
];

export const copyright = [
  {
    id: 1,
    text: 'Privacy Policy',
    link: '1#',
  },
  {
    id: 2,
    text: 'Terms and Conditions',
    link: '1#',
  },
];

import { Icon } from 'react-icons-kit';
import { linkedin } from 'react-icons-kit/fa/linkedin';
import { facebook } from 'react-icons-kit/fa/facebook';
import { twitter } from 'react-icons-kit/fa/twitter';
import { instagram } from 'react-icons-kit/fa/instagram';
import { youtube } from 'react-icons-kit/fa/youtube';

export const socialLinks = [
  {
    id: 1,
    icon: <Icon icon={instagram} />,
    name: 'instagram',
    link: 'https://www.instagram.com/shine_ngo_/',
  },
  {
    id: 2,
    icon: <Icon icon={facebook} />,
    name: 'facebook',
    link: 'https://www.facebook.com/Shinengo1',
  },
  {
    id: 3,
    icon: <Icon icon={youtube} />,
    name: 'youtube',
    link: 'https://www.youtube.com/c/ShineNGO-Gorakhpur',
  },
  {
    id: 4,
    icon: <Icon icon={twitter} />,
    name: 'twitter',
    link: 'https://twitter.com/shine_ngo_',
  },
  {
    id: 5,
    icon: <Icon icon={linkedin} />,
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/company/shine-educational-welfare-society/',
  },
];
