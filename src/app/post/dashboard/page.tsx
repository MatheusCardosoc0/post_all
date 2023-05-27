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
      {posts.length === 0 && (
        <div className="mt-48 h-28 w-28 animate-spin rounded-full border-b-[6px] border-r-[6px] border-t-[6px] border-blue-400 bg-transparent" />
      )}
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
