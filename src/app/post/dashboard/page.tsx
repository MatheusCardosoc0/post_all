import React from 'react'
import { getPosts } from '../../functions/getPosts'

export default async function dashboardPage() {
  const posts = await getPosts()

  return (
    <div className="flex h-screen w-full flex-col items-center">
      {posts?.map((post) => (
        <p key={post.id}>{post.content}</p>
      ))}
    </div>
  )
}
