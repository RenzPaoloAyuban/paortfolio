import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6"

const socials = [
  { icon: FaFacebook,  href: "https://www.facebook.com/renzuoooo/",                     label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/renzu_uo_o/",                   label: "Instagram" },
  { icon: FaLinkedin,  href: "https://www.linkedin.com/in/renz-paolo-ayuban-b6212321a", label: "LinkedIn" },
  { icon: FaGithub,    href: "https://github.com/RenzPaoloAyuban",                      label: "GitHub" },
]

const SocialLinks = () => {
  return (
    <div className='flex flex-row sm:flex-col gap-3 items-center justify-center'>
      {socials.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className='text-coffee-brown/40 hover:text-coffee-brown transition-colors duration-200'
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
