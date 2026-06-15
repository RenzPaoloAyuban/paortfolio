'use client'

import Image from "next/image"
import { useState, useEffect } from "react"

type GalleryImage = {
  src: string
  alt: string
  label: string
}

const images: GalleryImage[] = [
  { src: "/images/gallery/OpenGov.jpg",               alt: "DICT OpenGov Hackathon 2025", label: "DICT OpenGov Hackathon 2025" },
  { src: "/images/gallery/Flowaction.jpg",             alt: "FlowAction Capstone", label: "FlowAction · Capstone Project" },
  { src: "/images/gallery/SuperAI-1.jpg",             alt: "SuperAI 2025", label: "SuperAI 2025 · Singapore" },
  { src: "/images/gallery/SuperAI-2.jpg",             alt: "SuperAI 2025", label: "SuperAI 2025 · Singapore" },
  { src: "/images/gallery/SuperAI-3.jpg",             alt: "SuperAI 2025", label: "SuperAI 2025 · Singapore" },
  { src: "/images/gallery/AWS Innovation Cup.jpg",    alt: "AWS Innovation Cup 2024", label: "AWS Innovation Cup 2024" },
  { src: "/images/gallery/AWS Innovation Cup-2.jpg",  alt: "AWS Innovation Cup 2024", label: "AWS Innovation Cup 2024" },
  { src: "/images/gallery/C(old) (St)art 2024!.jpg", alt: "C(old) (St)art 2024!", label: "C(old) (St)art 2024!" },
  { src: "/images/gallery/C(old) (St)art 2025!.jpg", alt: "C(old) (St)art 2025!", label: "C(old) (St)art 2025!" },
]

function useVisible() {
  const [visible, setVisible] = useState(3)
  useEffect(() => {
    const update = () => {
      if (window.innerWidth < 640) setVisible(1)
      else if (window.innerWidth < 1024) setVisible(2)
      else setVisible(3)
    }
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])
  return visible
}

const GalleryCarousel = () => {
  const [index, setIndex] = useState(0)
  const [selected, setSelected] = useState<GalleryImage | null>(null)
  const [direction, setDirection] = useState<'left' | 'right'>('right')
  const [animKey, setAnimKey] = useState(0)
  const VISIBLE = useVisible()

  const canPrev = index > 0
  const canNext = index + VISIBLE < images.length

  const prev = () => {
    setDirection('left')
    setAnimKey(k => k + 1)
    setIndex((i) => Math.max(0, i - 1))
  }
  const next = () => {
    setDirection('right')
    setAnimKey(k => k + 1)
    setIndex((i) => Math.min(images.length - VISIBLE, i + 1))
  }

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
        <div
          key={animKey}
          style={{
            animation: `${direction === 'right' ? 'slideInRight' : 'slideInLeft'} 0.25s ease-out both`
          }}
          className="flex gap-3 w-full overflow-hidden"
        >
          {images.slice(index, index + VISIBLE).map((img) => (
            <button
              key={img.src}
              onClick={() => setSelected(img)}
              className="relative flex-1 h-[180px] sm:h-[200px] rounded-xl overflow-hidden bg-coffee-brown/10 group cursor-pointer focus:outline-none"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          style={{ animation: 'fadeIn 0.2s ease-out both' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="relative max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl"
            style={{ animation: 'scaleUp 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) both' }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Blurred background */}
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

            {/* Sharp image */}
            <div className="relative flex items-center justify-center min-h-[50vh] sm:min-h-[70vh]">
              <div className="relative w-full h-[50vh] sm:h-[70vh]">
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
            <div className="absolute bottom-4 right-4 bg-black/50 text-white text-xs sm:text-sm px-3 py-1.5 rounded-lg backdrop-blur-sm">
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