const AboutSection = () => {
  return (
    <section>
        <h1 className='text-xl font-bold'>
            About
        </h1>
        <div className='mt-6 flex flex-col gap-4 text-sm text-coffee-brown/80 leading-relaxed'>
            <p>
                I&apos;m a third-year Computer Science student at Cavite State University, a DOST-SEI scholar, and a full-stack developer who spends too much time thinking about how software can actually mean something to the people using it. I work across the stack — React, Next.js, Node.js, Python, and whatever the project needs — with a tendency to obsess over the details that make interfaces feel right.
            </p>
            <p>
                Outside of code, I&apos;ve been involved in student governance as CSSO Comelec Chairperson, competed in hackathons like DICT OpenGov and AWS Innovation Cup, attended SuperAI 2025 in Singapore, and spent time as an apprentice at DocypherLabs. I also pull shots part-time at Eleonor&apos;s Cafe, which honestly keeps me grounded.
            </p>
            <p>
                My projects range from civic-tech platforms and business intelligence dashboards to mobile apps, a meta-horror game, and an IoT flood monitoring system that won Best in Research — Capstone Project, Engineering Tech — different domains, same intention: build things that are useful, clear, and a little bit considered. Currently exploring AI integration and workflow automation, and always looking for the next problem worth solving.
            </p>
        </div>
    </section>
  )
}

export default AboutSection