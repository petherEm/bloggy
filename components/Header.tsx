import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Header = () => {
  const [open, isSetOpen] = useState(false)

  const router = useRouter()

  const openHandler = () => {
    !open ? isSetOpen(true) : isSetOpen(false)
  }

  return (
    <div className="">
      <header className="flex items-center justify-between max-w-6xl mx-auto md:p-6 p-2 sticky top-0 z-40">
        <div className="">
          <div
            onClick={() => router.push('/')}
            className="cursor-pointer"
          >
            <p className="text-4xl font-bold text-white">
              payIntel<span className="text-[#f44b4b]">.</span>
            </p>
            {/* <Image
              src="/white_logo.svg"
              alt="logo"
              layout="fill"
              objectFit="contain"
            /> */}
          </div>
        </div>

        <div className="hidden md:inline-flex items-center space-x-5">
          <li className="text-xl font-bold list-none cursor-pointer border-b-2 border-transparent hover:border-[#e71010] transition-all duration-300">
            Home
          </li>
          <li className="text-xl font-bold list-none cursor-pointer border-b-2 border-transparent hover:border-[#e71010] transition-all duration-300">
            About
          </li>
          <li
            onClick={() => router.push('/paymentsnews')}
            className="text-xl font-bold list-none cursor-pointer border-b-2 border-transparent hover:border-[#e71010] transition-all duration-300"
          >
            News
          </li>
          <li className="text-xl font-bold list-none cursor-pointer border-b-2 border-transparent hover:border-[#e71010] transition-all duration-300">
            Programming
          </li>
          <li
            // onClick={() => router.push("/cryptonews")}
            className="text-xl font-bold italic list-none cursor-pointer border-b-2 border-transparent hover:border-[#e71010] transition-all duration-300"
          >
            Blockchain
          </li>
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
    </div>
  )
}

export default Header
