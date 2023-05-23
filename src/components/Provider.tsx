'use client'
import { UserProps } from '@/@types/user'
import { registerUser } from '@/actions/registerUser'
import { userState } from '@/context/userState'
import { SessionProvider, getSession } from 'next-auth/react'
import { useEffect } from 'react'

interface ProviderProps {
  children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const { setUser } = userState()

  async function ChechSession() {
    const session = await getSession()

    setUser(session?.user as UserProps)
  }

  useEffect(() => {
    registerUser()
    ChechSession()
  }, [])

  return <SessionProvider>{children}</SessionProvider>
}

export default Provider
