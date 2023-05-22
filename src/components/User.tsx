'use client'

import { getSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const User = () => {
  const [name, setName] = useState<null | string | undefined>('')

  async function get() {
    const session = await getSession()

    setName(session?.user?.name)
  }

  useEffect(() => {
    get()
  }, [])

  return <div>{name}</div>
}

export default User
