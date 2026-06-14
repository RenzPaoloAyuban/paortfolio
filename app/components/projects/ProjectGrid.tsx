'use client'

import Image from "next/image"
import { useState } from "react"
import type { Project } from "./types"
import ProjectModal from "./ProjectModal"

const ProjectCard = ({
  project,
  onClick,
}: {
  project: Project
  onClick: () => void
}) => (
  <div
    onClick={onClick}
    className="flex flex-row gap-4 rounded-xl border border-coffee-brown/10 bg-coffee-brown/[0.03] p-4 hover:bg-coffee-brown/[0.06] transition-colors duration-200 cursor-pointer"
  >
    <div className="relative w-[120px] h-[80px] shrink-0 rounded-lg overflow-hidden bg-coffee-brown/10">
      <Image src={project.image} alt={project.name} fill className="object-cover" />
    </div>
    <div className="flex flex-col justify-between gap-2 min-w-0">
      <div>
        <h3 className="text-sm font-bold text-coffee-brown">{project.name}</h3>
        <p className="text-sm text-coffee-brown/70 mt-1 leading-snug">{project.short}</p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded-md border border-coffee-brown/20 text-coffee-brown/60 bg-coffee-brown/5"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
)

const ProjectGrid = ({ projects }: { projects: Project[] }) => {
  const [selected, setSelected] = useState<Project | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
            onClick={() => setSelected(project)}
          />
        ))}
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}

export default ProjectGrid
