const categories = [
  {
    label: "Frontend",
    items: ["JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS", "SCSS", "Vite"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Python", "Java", "PHP", "Flask", "REST", "MySQL", "PostgreSQL", "MongoDB", "Supabase", "Firebase", "OAuth", "JWT"],
  },
  {
    label: "AI",
    items: ["Gemini", "OpenAI", "Anthropic", "Deepseek"],
  },
  {
    label: "Workflow Automation",
    items: ["n8n", "Zapier", "Airia"],
  },
  {
    label: "Developer Tools",
    items: ["Git", "GitHub", "VS Code", "Cursor", "Kiro", "Amazon Q", "Slack", "JIRA", "Discord", "Teams"],
  },
]

const TechStack = () => {
  return (
    <section className="mt-12">
      <h1 className="text-xl font-bold">Tech Stack</h1>
      <div className="mt-6 flex flex-col gap-4">
        {categories.map((cat) => (
          <div key={cat.label}>
            <h2 className="text-sm font-semibold text-coffee-brown/60 uppercase tracking-wide mb-2">
              {cat.label}
            </h2>
            <div className="flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <span
                  key={item}
                  className="px-2.5 py-1 text-sm rounded-md border border-coffee-brown/20 text-coffee-brown bg-coffee-brown/5 hover:bg-coffee-brown hover:text-cream-white hover:border-coffee-brown transition-colors duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TechStack
