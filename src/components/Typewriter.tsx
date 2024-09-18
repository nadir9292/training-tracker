import React, { useState, useEffect } from 'react'

type Props = { text: any; delay: any; style: any }

const Typewriter = ({ text, delay, style }: Readonly<Props>) => {
  const [currentText, setCurrentText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + text[currentIndex])
        setCurrentIndex((prevIndex) => prevIndex + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, delay, text])

  return (
    <div>
      <span className={style}>{currentText}</span>
    </div>
  )
}

export default Typewriter
