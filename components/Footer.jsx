import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className="h-16 w-full bg-slate-900 text-white flex justify-center items-center absolute bottom-0">
      <p className="text-xl">Developed by </p>
      <a href="https://www.piotrmaciejewski.com" target="_blank">
        <div className="relative h-16 w-16 z-20 cursor-pointer">
          <Image
            src="/white_logo.svg"
            alt="logo"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </a>
    </div>
  )
}

export default Footer
