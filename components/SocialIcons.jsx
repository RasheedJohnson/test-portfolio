import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RasheedJohnson" },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/rasheed-j-948a6a312/",
  },
];

const SocialIcons = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.path}
            target="_blank"
            className={iconStyles}
          >
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default SocialIcons;
