"use client"

import { useState, useEffect, useCallback, ReactNode } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface CarouselProps {
  readonly childElements: ReactNode[]
  readonly autoPlayInterval?: number
  readonly showControls?: boolean
}

export default function HeatMapCarousel({ childElements, autoPlayInterval = 5000, showControls = true }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % childElements.length)
  }, [childElements.length])

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + childElements.length) % childElements.length)
  }, [childElements.length])

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      goToNext()
    }, autoPlayInterval)

    return () => clearInterval(interval)
  }, [goToNext, isAutoPlaying, autoPlayInterval])

  const handleControlClick = (callback: () => void) => {
    setIsAutoPlaying(false)
    callback()

    return () => null
  }

  if (childElements.length === 0) {
    return <div className="w-full h-full flex items-center justify-center">No elements provided</div>
  }

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="w-full h-full"
          initial={{ opacity: 0, filter: "blur(8px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.5 }}
        >

          <div

            className="w-full h-full border-0"
          >

            {childElements[currentIndex]}
          </div>
        </motion.div>
      </AnimatePresence>

      {showControls && childElements.length > 1 && (
        <>
          <button
            onClick={() => handleControlClick(goToPrevious)}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => handleControlClick(goToNext)}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {childElements.map((_, index) => (
              <button
                key={index}
                onClick={() => handleControlClick(() => setCurrentIndex(index))}
                className={`w-2.5 h-2.5 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white ${index === currentIndex ? "bg-white" : "bg-white/50"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}
