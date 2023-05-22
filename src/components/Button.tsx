'use client'

import { signIn } from 'next-auth/react'
import React from 'react'

const Button = () => {
  return (
    <button
      className="text-4xl font-bold bg-green-500 text-white rounded-xl p-2"
      onClick={() => signIn('google')}
    >
      Google
    </button>
  )
}

export default Button
