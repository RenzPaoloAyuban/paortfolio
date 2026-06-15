import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa6"

const socials = [
  { icon: FaFacebook,  href: "https://www.facebook.com/renzuoooo/",                     label: "Facebook" },
  { icon: FaInstagram, href: "https://www.instagram.com/renzu_uo_o/",                   label: "Instagram" },
  { icon: FaLinkedin,  href: "https://www.linkedin.com/in/renz-paolo-ayuban-b6212321a", label: "LinkedIn" },
  { icon: FaGithub,    href: "https://github.com/RenzPaoloAyuban",                      label: "GitHub" },
]

const SocialSection = () => {
  return (
    <section className="mt-12">
      <h1 className="text-xl font-bold mb-4">Social Links</h1>
      <div className="flex flex-col">
        {socials.map(({ icon: Icon, href, label }, i) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-3 py-3 text-coffee-brown hover:text-coffee-brown/60 transition-colors duration-200 ${i < socials.length - 1 ? 'border-b border-coffee-brown/10' : ''}`}
          >
            <Icon size={22} className="shrink-0" />
            <span className="text-sm font-semibold">{label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default SocialSection
