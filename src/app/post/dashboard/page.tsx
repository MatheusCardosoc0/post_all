'use client'

import React, { useEffect, useState } from 'react'
import PostCard from '@/components/PostCard'
import { getPosts, postProps } from '@/app/functions/getPosts'

export default function DashboardPage() {
  const [posts, setPosts] = useState<postProps[]>([])

  async function PasteData() {
    const response = await getPosts()

    setPosts(response as postProps[])
  }

  useEffect(() => {
    PasteData()
  }, [])

  return (
    <div className="flex h-full w-full flex-col items-center gap-8 pb-20 ">
      {posts ? (
        posts?.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <p className="text-2xl font-bold">Carregando...</p>
      )}
    </div>
  )
}
