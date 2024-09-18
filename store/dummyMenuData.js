// stack icon
import htmlIcon from '/assets/image/logo/download__1_-removebg-preview.png'
import cssIcon from '/assets/image/logo/download__2_-removebg-preview.png'
import tailIcon from '/assets/image/logo/download-removebg-preview.png'
import reactIcon from '/assets/image/logo/images-removebg-preview.png'
import vueIcon from '/assets/image/logo/Vue.js_Logo_2.svg-removebg-preview.png'
import nuxtIcon from '/assets/image/logo/1_kI9G1WD481p1OYHEBv6KxA-removebg-preview.png'
import nextIcon from '/assets/image/logo/ae35edce19e64c53e5d455b22e8a2c82d093d4c9-removebg-preview.png'

// project img
import cloth1 from '/assets/image/project/screencapture-blue-criterion-clothing1-vercel-app-2024-09-15-02_10_09.png'
import pizza1 from '/assets/image/project/screencapture-blue-criterion-pizza1-vercel-app-2024-09-15-06_22_54.png'
import mahmud from '/assets/image/project/screencapture-localhost-3000-sustainability-2024-09-19-00_12_57.png'
import industro from '/assets/image/project/screencapture-idustro-react-dev-vercel-app-2024-09-15-06_15_35.png'
import artist from '/assets/image/project/screencapture-artist-website-opal-vercel-app-2024-09-19-00_51_33.png'

// client img
import c1 from "/assets/image/clients/author2.jpg";
import c2 from "/assets/image/clients/author3.jpg";
import c3 from "/assets/image/clients/avata-2-77x77.jpg";
import c4 from "/assets/image/clients/testi-2-77x77.jpg";

const project = [

    {
        name: 'Pizza Store Website',
        url: 'https://blue-criterion-pizza1.vercel.app/',
        git: 'https://github.com/Arif-akib/BlueCriterionPizza1',
        bg:pizza1,
        stack: [
            {
                img:htmlIcon
            },
            {
                img:tailIcon
            },
            {
                img:nuxtIcon
            }
        ]
    },

    {
        name: 'Clothing store website',
        url: 'https://blue-criterion-clothing1.vercel.app/',
        git: 'https://github.com/Arif-akib/BlueCriterionClothing1',
        bg:cloth1,
        stack: [
            {
                img:htmlIcon
            },
            {
                img:tailIcon
            },
            {
                img:nuxtIcon
            }
        ]
    },

    {
        name: 'Industry portfolio website',
        url: 'https://idustro-react-dev.vercel.app/',
        git: 'https://github.com/Arif-akib/Idustro-React-Dev',
        bg:industro,
        stack: [
            {
                img:htmlIcon
            },
            {
                img:tailIcon
            },
            {
                img:reactIcon
            }
        ]
    },

    {
        name: 'Mahmud Garments Website',
        url: 'https://mahmud-nuxt.vercel.app/',
        git: '',
        bg:mahmud,
        stack: [
            {
                img:htmlIcon
            },
            {
                img:tailIcon
            },
            {
                img:nuxtIcon
            }
        ]
    },

    {
        name: 'Suborna Morsheada Artist website',
        url: 'https://artist-website-opal.vercel.app/',
        git: '',
        bg:artist,
        stack: [
            {
                img:htmlIcon
            },
            {
                img:tailIcon
            },
            {
                img:vueIcon
            }
        ]
    },
    
]

const clients = [
    {
        bg: c1,
        heading: "Amy Dasilva",
        des: "Founder & CEO",
        star: 5,
        text: "In this world there are companies that are all business and you know that they do , and then there are companies like Industro.",
        via:'Facebook'
    },
    {
        bg: c2,
        heading: "Jeffery Marshall",
        des: "Engineer",
        star: 4,
        text: "In this world there are companies that are all business and you know that they do , and then there are companies like Industro.",
        via:'Facebook'
    },
    {
        bg: c3,
        heading: "M.Bradbury",
        des: "Business Head",
        star: 4,
        text: "In this world there are companies that are all business and you know that they do , and then there are companies like Industro.",
        via:'Facebook'
    },
    {
        bg: c4,
        heading: "Maria Speier",
        des: "Customer Service",
        star: 5,
        text: "In this world there are companies that are all business and you know that they do , and then there are companies like Industro.",
        via:'Facebook'
    },
];




// Export the arrays
export { project , clients};
