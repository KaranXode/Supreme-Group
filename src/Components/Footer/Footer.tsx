
import logo from "../../assets/icons/supremeLogo.svg";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerData = {
    Applications: [
      { name: "Apparel", to: "/apparel" },
      { name: "Automotive", to: "/automotive" },
      { name: "Filtration", to: "/filtration" },
      { name: "Customised Solutions", to: "/customised-solutions" },
    ],
    Company: [
      { name: "Innovation", to: "/innovation" },
      { name: "Global Competency", to: "/global-competency" },
      { name: "About Us", to: "/about-us" },
      { name: " Contact Us", to: "/contact-us" },
    ],
    More: [
      { name: "Careers", to: "/careers" },
      { name: "Privacy Policy", to: "/privacy-policy" },
      { name: "Terms and Conditions", to: "/terms-conditions" },
    ],
    "Follow Us": [
      {
        name: "Twitter",
        to: "https://twitter.com/",
        external: true,
      },
      {
        name: "LinkedIn",
        to: "https://www.linkedin.com/",
        external: true,
      },
      {
        name: "Instagram",
        to: "https://instagram.com/",
        external: true,
      },
      {
        name: "Medium",
        to: "https://medium.com/",
        external: true,
      },
    ],
  };

  return (
    <footer className="text-black footer-bg bg-no-repeat bg-cover bg-right-bottom border-t border-opacity-10 border-gray">
      <div className="max-w-screen-lg mx-auto py-10 px-3">
        <div>
          <Link to="/">
            <img
              src={logo}
              alt="Supreme Group logo"
              className="h-10 md:h-12 cursor-pointer"
            />
          </Link>

          <div className="grid grid-cols-2 md:grid-cols-4 md:pr-10 lg:gap-20 sm:gap-10 gap-4 2xl:mt-10 mt-8">
            {Object.entries(footerData).map(([section, links]) => (
              <ul key={section} className="text-black list-none">
                <li className="sm:mb-5 mb-3 font-semibold uppercase text-opacity-90">
                  {section}
                </li>
                <div className="grid sm:gap-5 gap-3 ">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          to={link.to}
                          className="xl:text-base text-sm text-black block whitespace-nowrap text-opacity-70 hover:text-opacity-100 focus:outline-none underline-offset-4 focus:text-opacity-100"
                        >
                          {link.name}
                        </Link>
                      )}
                    </li>
                  ))}
                </div>
              </ul>
            ))}
          </div>
        </div>
        <div className="mt-10 text-sm text-black text-center md:text-left flex flex-col md:flex-row justify-between gap-2">
          <span>©2024. All Rights Reserved.</span>
          <span>Supreme House, 110, 16th Road, Chembur, Mumbai – 400071.</span>
        </div>
      </div>
    </footer>
  );
}
