'use client'

import { getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

const Button = () => {
  const [isSession, setIsSession] = useState<string | null | undefined>(null)

  const router = useRouter()

  async function sessionCheck() {
    const session = await getSession()

    setIsSession(session?.user?.name)
  }

  useEffect(() => {
    sessionCheck()
  }, [])

  function sigInUser() {
    signIn('google')

    router.push('/post/dashboard')
  }

  return (
    <>
      {!isSession && (
        <button
          className="rounded-xl bg-green-500 p-2 text-4xl font-bold text-white hover:bg-green-700"
          onClick={() => sigInUser()}
        >
          Google
        </button>
      )}
      {isSession && (
        <button
          className="rounded-xl bg-green-500 p-2 text-4xl font-bold text-white hover:bg-green-700"
          onClick={() => router.push('/post/dashboard')}
        >
          Entrar
        </button>
      )}
    </>
  )
}

export default Button
