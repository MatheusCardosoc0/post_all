import { Logo } from '@/app/assets'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav
      className="
        fixed
        top-0
        z-20
        flex
        w-full
        justify-between
        bg-blue-400
        p-4
        drop-shadow-[0px_4px_4px_black]
        md:px-20
      "
    >
      <Link
        href={'/post/dashboard'}
        className="
          flex
          items-center  
          rounded-full
          text-xl
          font-bold
          hover:brightness-150
        "
      >
        <Image
          src={Logo}
          alt="logo"
          width={140}
          height={140}
          className="
          h-[80px]
          w-[80px]
        "
        />
        <h1 className="hidden text-2xl font-bold text-white sm:block md:text-3xl">
          PostAll
        </h1>
      </Link>

      <Link
        href={'/post/create'}
        className="
          flex
          items-center
          justify-center
          rounded-2xl
          bg-gradient-to-tr from-cyan-500 via-blue-600 to-teal-400
          px-2
          text-2xl
          font-bold
          text-white
          drop-shadow-[1px_1px_8px_white]
          transition-colors
          hover:brightness-150
        "
      >
        <span>Publicar</span>
      </Link>
    </nav>
  )
}

export default Navbar
