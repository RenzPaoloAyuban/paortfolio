'use client'

import Image from "next/image"
import { useState } from "react"

type GalleryImage = {
  src: string
  alt: string
  label: string
}

const images: GalleryImage[] = [
  { src: "/images/gallery/OpenGov.jpg",               alt: "DICT OpenGov Hackathon 2025", label: "DICT OpenGov Hackathon 2025" },
  { src: "/images/gallery/SuperAI-1.jpg",             alt: "SuperAI 2025", label: "SuperAI 2025 · Singapore" },
  { src: "/images/gallery/SuperAI-2.jpg",             alt: "SuperAI 2025", label: "SuperAI 2025 · Singapore" },
  { src: "/images/gallery/SuperAI-3.jpg",             alt: "SuperAI 2025", label: "SuperAI 2025 · Singapore" },
  { src: "/images/gallery/AWS Innovation Cup.jpg",    alt: "AWS Innovation Cup 2024", label: "AWS Innovation Cup 2024" },
  { src: "/images/gallery/AWS Innovation Cup-2.jpg",  alt: "AWS Innovation Cup 2024", label: "AWS Innovation Cup 2024" },
  { src: "/images/gallery/C(old) (St)art 2024!.jpg", alt: "C(old) (St)art 2024!", label: "C(old) (St)art 2024!" },
  { src: "/images/gallery/C(old) (St)art 2025!.jpg", alt: "C(old) (St)art 2025!", label: "C(old) (St)art 2025!" },
]

const VISIBLE = 3

const GalleryCarousel = () => {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<GalleryImage | null>(null)

  const canPrev = index > 0
  const canNext = index + VISIBLE < images.length

  const prev = () => setIndex((i) => Math.max(0, i - 1))
  const next = () => setIndex((i) => Math.min(images.length - VISIBLE, i + 1))

  return (
    <>
      <div className="relative flex items-center gap-3">
        {/* Prev button */}
        <button
          onClick={prev}
          disabled={!canPrev}
          aria-label="Previous"
          className="absolute left-0 z-10 -translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border border-coffee-brown/15 shadow-sm text-coffee-brown disabled:opacity-20 hover:bg-coffee-brown/5 transition-colors"
        >
          ‹
        </button>

        {/* Images */}
        <div className="flex gap-3 w-full overflow-hidden">
          {images.slice(index, index + VISIBLE).map((img) => (
            <button
              key={img.src}
              onClick={() => setSelected(img)}
              className="relative flex-1 h-[200px] rounded-xl overflow-hidden bg-coffee-brown/10 group cursor-pointer focus:outline-none"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              {/* Label bottom-right */}
              <span className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-md backdrop-blur-sm leading-snug max-w-[80%] text-right">
                {img.label}
              </span>
            </button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={next}
          disabled={!canNext}
          aria-label="Next"
          className="absolute right-0 z-10 translate-x-1/2 flex items-center justify-center w-8 h-8 rounded-full bg-white border border-coffee-brown/15 shadow-sm text-coffee-brown disabled:opacity-20 hover:bg-coffee-brown/5 transition-colors"
        >
          ›
        </button>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Blurred background — same image stretched */}
            <div className="absolute inset-0">
              <Image
                src={selected.src}
                alt=""
                fill
                className="object-cover blur-xl scale-110 brightness-50"
                sizes="100vw"
                aria-hidden="true"
              />
            </div>

            {/* Sharp image centered on top */}
            <div className="relative flex items-center justify-center min-h-[70vh]">
              <div className="relative w-full h-[70vh]">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
            </div>

            {/* Label */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white text-sm px-3 py-1.5 rounded-lg backdrop-blur-sm">
              {selected.label}
            </div>
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors backdrop-blur-sm"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryCarousel
