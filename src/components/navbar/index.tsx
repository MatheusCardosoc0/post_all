import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav
      className="
        fixed
        top-0
        flex
        w-full
        justify-between
        bg-blue-400
        p-4
        drop-shadow-[0px_4px_4px_black]
      "
    >
      <Link href={'/post/dashboard'}>
        <h1>PostAll</h1>
      </Link>

      <Link href={'/post/create'}>
        <span>Publicar</span>
      </Link>
    </nav>
  )
}

export default Navbar
