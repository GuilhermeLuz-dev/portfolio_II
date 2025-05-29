import React, { useState, useEffect } from 'react'

type SectionRefs = {
  [key: string]: React.RefObject<HTMLElement | null>
}

export const useSectionObserver = (sectionRefs: SectionRefs) => {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entrie) => entrie.isIntersecting)
          .sort((a, b) => a.intersectionRatio - b.intersectionRatio)
        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('id')
          if (id) {
            setActiveSection(id)
          }
        }
      },
      {
        threshold: 0.4,
      }
    )

    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        ref.current.setAttribute('id', id)
        observer.observe(ref.current)
      }
    })
    return () => observer.disconnect()
  }, [sectionRefs])
  return activeSection
}
