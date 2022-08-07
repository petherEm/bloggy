import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div className="h-16 bg-slate-900 text-white flex justify-center items-center">
        <p className="text-xl">Developed by <Link href="https://www.piotrmaciejewski.com" target="_blank"><a className="font-bold text-white">Piotr Maciejewski.</a></Link></p>
    </div>
  )
}

export default Footer