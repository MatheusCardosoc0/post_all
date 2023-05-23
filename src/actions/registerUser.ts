import { api } from '@/lib/api'
import { getSession } from 'next-auth/react'

export const registerUser = async () => {
  const session = await getSession()

  try {
    await api.post('/register', {
      name: session?.user?.name,
      image: session?.user?.image,
      email: session?.user?.email,
    })
  } catch (error) {
    console.log(error)
  }
}
