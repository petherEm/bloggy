import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
  const [open, isSetOpen] = useState(false)

  const openHandler = () => {
    !open ? isSetOpen(true) : isSetOpen(false)
  }

  return (
    <header className="flex items-center justify-between max-w-6xl mx-auto md:p-6 p-2">
      <div>
        <Link href="/">
          <div className="relative h-20 w-20 z-20 cursor-pointer">
            <Image
              src="/white_logo.svg"
              alt="logo"
              layout="fill"
              objectFit="contain"
            />
          </div>

          {/* <h1 className="font-bold text-3xl cursor-pointer">&#60;PM&#62;</h1> */}
        </Link>
      </div>

      <div className="hidden md:inline-flex items-center space-x-5">
        <h3 className="cursor-pointer hover:text-slate-300 hover:border-b-2 hover:border-white">
          Home
        </h3>
        <h3 className="cursor-pointer hover:text-slate-300 hover:border-b-2 hover:border-white">
          About
        </h3>
        <h3 className="cursor-pointer hover:text-slate-300 hover:border-b-2 hover:border-white">
          Portfolio
        </h3>
        <h3 className="cursor-pointer hover:text-slate-300 hover:border-b-2 hover:border-white">
          Contact
        </h3>
      </div>

      {/* Hamburger Menu */}

      <div className="md:hidden">
        <button
          id="menu-btn"
          type="button"
          className={
            open
              ? 'open z-40 block hamburger md:hidden focus:outline-none'
              : 'z-40 block hamburger md:hidden focus:outline-none'
          }
          onClick={openHandler}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          open
            ? 'absolute top-0 bottom-0 left-0 flex md:hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg font-thin text-white uppercase bg-black z-30'
            : 'absolute top-0 bottom-0 left-0 hidden flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-lg font-thin text-white uppercase bg-black'
        }
      >
        <Link href="#">
          <a className="hover:text-pink-500 font-serif">About</a>
        </Link>
        <Link href="#">
          <a className="hover:text-pink-500 font-serif">Portfolio</a>
        </Link>
        <Link href="#">
          <a className="hover:text-pink-500 font-serif">Contact</a>
        </Link>
      </div>
    </header>
  )
}

export default Header
