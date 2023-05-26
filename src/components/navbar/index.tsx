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
      "
    >
      <Link
        href={'/post/dashboard'}
        className="rounded-full bg-white p-2 text-xl font-bold hover:bg-green-400"
      >
        <h1>PostAll</h1>
      </Link>

      <Link
        href={'/post/create'}
        className="rounded-full bg-white p-2 text-2xl font-bold hover:bg-green-400"
      >
        <span>Publicar</span>
      </Link>
    </nav>
  )
}

export default Navbar
