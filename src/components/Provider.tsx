'use client'
import { registerUser } from '@/actions/registerUser'
import { SessionProvider } from 'next-auth/react'
import { useEffect } from 'react'

interface ProviderProps {
  children: React.ReactNode
}

const Provider: React.FC<ProviderProps> = ({ children }) => {
  useEffect(() => {
    registerUser()
  }, [])

  return <SessionProvider>{children}</SessionProvider>
}

export default Provider
