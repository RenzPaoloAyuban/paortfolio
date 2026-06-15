const events = [
  { date: "June 2026",     title: "CSSO Comelec Chairperson", sub: "Computer Science Student Organization" },
  { date: "February 2026", title: "Part-Time Barista", sub: "Eleonor's Cafe · Dasmarinas, Cavite" },
  { date: "November 2025", title: "C(old) (St)art 2025! Participant", sub: "Hacklaren" },
  { date: "July 2025",     title: "Apprentice", sub: "DocypherLabs · Kawit, Cavite" },
  { date: "June 2025",     title: "Attended SuperAI 2025", sub: "Marina Bay Sands, Singapore" },
  { date: "June 2025",     title: "CSSO Comelec Commissioner for Records and Documentation", sub: "Computer Science Student Organization" },
  { date: "May 2025",      title: "DICT OpenGov Hackathon 2025 Participant", sub: "Firewall" },
  { date: "December 2024", title: "C(old) (St)art 2024! Participant", sub: "DASHPAYB"},
  { date: "July 2024",     title: "AWS Innovation Cup 2024 Participant", sub: "Cloud Spade" },
  { date: "June 2024",     title: "CSSO Comelec Vice Chairperson", sub: "Computer Science Student Organization" },
  { date: "May 2024",      title: "Senator Candidate for PARKAM", sub: "Central Student Government Elections 2024"},
  { date: "February 2024", title: "Committee on Records and Documentation", sub: "University First Year Student Council" },
  { date: "January 2024",  title: "Vice President for Records and Documentation", sub: "Computer Science Student Organization" },
  { date: "September 2023",title: "BS Computer Science", sub: "Cavite State University Main" },
  { date: "August 2023",   title: "Passed DOST-SEI Undergraduate Scholarship Examination", sub: "RA 7687" },
]

const ExperienceTimeline = () => {
  return (
    <section>
      <h1 className="text-xl font-bold mb-6">Timeline</h1>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-coffee-brown/15" />

        <div className="flex flex-col gap-6">
          {events.map((event, index) => (
            <div key={index} className="relative flex gap-5 pl-7 group">
              {/* Dot */}
              <div className="absolute left-0 top-1.5 size-[15px] rounded-full border-2 border-coffee-brown bg-white shrink-0 transition-colors duration-200 group-hover:bg-coffee-brown" />

              <div className="flex flex-col gap-0.5 transition-transform duration-200 group-hover:translate-x-1">
                <span className="text-xs font-semibold text-coffee-brown/50 uppercase tracking-wider transition-colors duration-200 group-hover:text-coffee-brown/70">
                  {event.date}
                </span>
                <span className="text-sm font-semibold text-coffee-brown leading-snug transition-colors duration-200 group-hover:text-coffee-brown">
                  {event.title}
                </span>
                {event.sub && (
                  <span className="text-xs text-coffee-brown/60 leading-snug transition-colors duration-200 group-hover:text-coffee-brown/80">
                    {event.sub}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceTimeline
