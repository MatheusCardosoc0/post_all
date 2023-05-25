import React from 'react'
import { getPosts } from '../../functions/getPosts'
import PostCard from '@/components/PostCard'

export default async function dashboardPage() {
  const posts = await getPosts()

  return (
    <div className="flex h-full w-full flex-col items-center gap-8 pb-20 ">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
