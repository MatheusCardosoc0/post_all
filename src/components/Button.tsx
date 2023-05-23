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

    router.push('/dashboard')
  }

  return (
    <>
      {!isSession && (
        <button
          className="text-4xl font-bold bg-green-500 text-white rounded-xl p-2"
          onClick={() => sigInUser()}
        >
          Google
        </button>
      )}
      {isSession && (
        <button
          className="text-4xl font-bold bg-green-500 text-white rounded-xl p-2"
          onClick={() => router.push('/dashboard')}
        >
          Entrar
        </button>
      )}
    </>
  )
}

export default Button
