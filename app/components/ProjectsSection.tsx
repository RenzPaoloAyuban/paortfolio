import type { Project } from "./projects/types"
import ProjectGrid from "./projects/ProjectGrid"

const projects: Project[] = [
  {
    name: "The Keeper",
    year: 2026,
    short: "A meta-horror game about deception and emotional vulnerability, where you're tested not by monsters, but by people.",
    description:
      "A meta-horror experience about trust and emotional vulnerability. Players are evaluated through dialogue and choices rather than combat, with tone and pacing driving the tension.",
    tags: ["Game Dev", "Narrative", "Godot", "Blender", "GDScript"],
    image: "/images/projects/the-keeper.png",
    url: "",
  },
  {
    name: "Rotato",
    year: 2026,
    short: "A dorm management app that automates chore rotation, expense splitting, and community communication.",
    description:
      "Specialized management application for dorm communities — rotating chore schedules, a Potato Status accountability system, badge rewards, shared expense tracking with payment verification, and an announcements feed with reactions and system alerts.",
    tags: ["Expo Go", "Firebase", "Mobile Development"],
    image: "/images/projects/rotato.jpg",
    video: "/images/projects/rotato-vid.mp4",
    url: "",
  },
  {
    name: "Brewlytics",
    year: 2026,
    short: "Business intelligence platform for café operations with inventory, sales analytics, forecasting, and AI-powered chatbot.",
    description:
      "Operations dashboard for café teams: inventory, sales trends, forecasting, and an AI assistant for day-to-day decisions. Emphasis on readable charts and fast access to the numbers that matter.",
    tags: ["Next.js", "React", "Analytics", "Supabase", "AI"],
    image: "/images/projects/brewlytics.png",
    url: "https://brewlytics-monocaf.vercel.app/",
  },
  {
    name: "Hype",
    year: 2025,
    short: "A React-based event ticketing platform with second-hand ticket resale and auction features.",
    description:
      "A full ticketing experience with resale and auction flows for secondary markets. Focused on responsive layouts, clear checkout paths, and interface states that stay readable on mobile.",
    tags: ["React", "Vercel", "UI/UX"],
    image: "/images/projects/hype.png",
    url: "",
  },
  {
    name: "inflow",
    year: 2025,
    short: "A civic-tech misinformation tracking platform with an interactive map of regional spread and a citizen reporting dashboard.",
    description:
      "Built around an interactive map of regional misinformation spread and a citizen reporting dashboard. Designed for clarity under pressure, with flows that help non-technical users submit and explore reports quickly.",
    tags: ["React", "TypeScript", "Supabase", "Civic Tech"],
    image: "/images/projects/inflow.png",
    url: "",
  },
  {
    name: "FlowAction",
    year: 2023,
    short: "A real-time flood monitoring and early warning system designed to enhance community disaster preparedness.",
    description:
      "An IoT-based capstone project powered by a NodeMCU ESP8266 microcontroller and HC-SR04 ultrasonic sensor. Built for self-sustainability with a solar panel and Li-ion battery, featuring LED indicators and a piezo buzzer for localized alerts. Transmits live water level data to a mobile dashboard via Blynk, enabling remote monitoring and early evacuation decisions during typhoons. Awarded Best in Research — Capstone Project, Engineering Tech.",
    tags: ["ESP32", "IoT", "Blynk", "Capstone"],
    image: "/images/projects/flowaction.jpg",
    url: "https://www.facebook.com/photo?fbid=289436920310843&set=pcb.289439300310605",
  },
]

const ProjectsSection = () => {
  return (
    <section className="mt-12">
      <h1 className="text-xl font-bold mb-6">Projects</h1>
      <ProjectGrid projects={projects} />
    </section>
  )
}

export default ProjectsSection
