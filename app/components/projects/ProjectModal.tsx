'use client'

import Image from "next/image"
import type { Project } from "./types"

const ProjectModal = ({
  project,
  onClose,
}: {
  project: Project
  onClose: () => void
}) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/40 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="relative bg-white rounded-2xl shadow-xl w-full max-w-4xl flex flex-col sm:flex-row overflow-hidden max-h-[90vh] overflow-y-auto"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Media */}
      <div className="relative w-full sm:w-[460px] shrink-0 bg-coffee-brown/10 h-[220px] sm:h-[360px]">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover"
          />
        )}
      </div>

      {/* Content — right side */}
      <div className="flex flex-col gap-4 p-6 flex-1 min-w-0">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-coffee-brown/40 hover:text-coffee-brown transition-colors"
          aria-label="Close modal"
        >
          ✕
        </button>

        <div className="flex flex-col gap-2 pr-6">
          <h2 className="text-lg font-bold text-coffee-brown">{project.name}</h2>
          <p className="text-sm text-coffee-brown/80 leading-relaxed font-semibold">
            {project.short}
          </p>
          <p className="text-sm text-coffee-brown/60 leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs rounded-md border border-coffee-brown/20 text-coffee-brown/60 bg-coffee-brown/5"
            >
              {tag}
            </span>
          ))}
        </div>

        <button className="mt-auto self-start flex items-center gap-1.5 px-4 py-2 rounded-lg bg-coffee-brown text-cream-white text-sm font-semibold hover:bg-coffee-brown/80 transition-colors">
          Visit project
          <span className="text-base leading-none">↗</span>
        </button>
      </div>
    </div>
  </div>
)

export default ProjectModal
