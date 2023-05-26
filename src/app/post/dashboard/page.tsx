import React from 'react'
import PostCard from '@/components/PostCard'

export default async function dashboardPage() {
  const posts: any[] = await fetch(
    'https://node-deploy-k49o.onrender.com/posts',
    {
      next: {
        revalidate: 3,
      },
    },
  )

  return (
    <div className="flex h-full w-full flex-col items-center gap-8 pb-20 ">
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}
