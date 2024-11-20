//const { Dropdown } = require("react-bootstrap");


// navigationData.js
const navigationLinks = [
  { name: "Home", href: "/" },
  // { name: "Getting-Started", href: "/about" },
  {
    name: "kits",
    href: "#",
    dropdown: [
      { name: "Web Development", href: "/services/web-development" },
      { name: "SEO Optimization", href: "/services/seo-optimization" },
    ],
    images: [
      { text: "Energy", src: "/Beacon.webp", alt: "Image 1" },
      { text: "Security", src: "/Beacon3.webp", alt: "Image 2" },
      { text: "Health", src: "/Lighthouse.webp", alt: "Image 3" },
    ],
    images2: [
      { text: "Energy", src: "/Beacon.webp", alt: "Image 1" },
      { text: "Security", src: "/Beacon3.webp", alt: "Image 2" },
      { text: "Health", src: "/Lighthouse.webp", alt: "Image 3" },
    ],
  },
  {
    name: "Products",
    href: "#",
    dropdown: [
      { name: "Software", href: "/products/software" },
      { name: "Hardware", href: "/products/hardware" },
    ],
    images: [
      { text: "Energy", src: "/Beacon.webp", alt: "Image 1" },
      { text: "Security", src: "/Beacon3.webp", alt: "Image 2" },
      { text: "Health", src: "/Lighthouse.webp", alt: "Image 3" },
    ],
    images2: [
      { text: "Energy", src: "/Beacon.webp", alt: "Image 1" },
      { text: "Security", src: "/Beacon3.webp", alt: "Image 2" },
      { text: "Health", src: "/Lighthouse.webp", alt: "Image 3" },
    ],
  },
  { name: "Documentation", href: "/contact" },
  { name: "Integration", href: "/blog" },
];

export default navigationLinks;