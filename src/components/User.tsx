'use client'

import { userState } from '@/context/userState'
import axios from 'axios'
import { User2 } from 'lucide-react'
import Image from 'next/image'

const User = () => {
  const { user } = userState()

  async function logout() {
    await axios.get('/api/auth/logout')

    window.location.reload()
  }

  return (
    <div>
      <button
        onClick={() => logout()}
        className="flex h-[200px] w-[200px] cursor-pointer flex-col items-center justify-center rounded-full bg-neutral-200 drop-shadow-[1px_1px_4px_black] transition-colors hover:bg-red-300"
      >
        {user && (
          <Image
            src={user.image}
            width={60}
            height={60}
            alt="user image"
            className="h-20 w-20 rounded-full"
          />
        )}
        {!user && <User2 className="h-20 w-20 rounded-full" />}
        <h2 className="px-2 text-xl font-bold">
          {user ? user.name : 'Desconectado'}
        </h2>
      </button>
    </div>
  )
}

export default User
