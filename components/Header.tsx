import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className="flex items-center justify-between max-w-6xl mx-auto p-6">
      <div>
        <Link href="/">
          <h1 className="font-bold text-3xl cursor-pointer">&#60;PM&#62;</h1>
        </Link>
      </div>

      <div className="hidden md:inline-flex items-center space-x-5">
        <h3 className="cursor-pointer hover:text-slate-300">Home</h3>
        <h3 className="cursor-pointer hover:text-slate-300">About</h3>
        <h3 className="cursor-pointer hover:text-slate-300">Contact</h3>
      </div>
    </header>
  )
}

export default Header
