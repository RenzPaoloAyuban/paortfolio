const certifications = [
  {
    name: "Cyber Threat Management",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/e697f11c-7c22-46f4-be01-fb5a76d1ef8f/public_url", // replace with Credly link
  },
  {
    name: "Introduction to Cybersecurity",
    issuer: "Cisco",
    url: "https://www.credly.com/badges/78e382c4-16ee-4ed6-a775-adc56df7c11c/public_url", // replace with Credly link
  },
]

const CertificationsSection = () => {
  return (
    <section className="mt-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-xl font-bold">Certifications</h1>
        <a
          href="https://www.credly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-coffee-brown/50 hover:text-coffee-brown transition-colors"
        >
          View All ›
        </a>
      </div>

      <div className="flex flex-col gap-3">
        {certifications.map((cert) => (
          <a
            key={cert.name}
            href={cert.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-1 rounded-xl border border-coffee-brown/10 bg-coffee-brown/[0.03] px-5 py-4 hover:bg-coffee-brown/[0.06] transition-colors duration-200"
          >
            <span className="text-sm font-bold text-coffee-brown">{cert.name}</span>
            <span className="text-sm text-coffee-brown/50">{cert.issuer}</span>
          </a>
        ))}
      </div>
    </section>
  )
}

export default CertificationsSection
