import { UserProps } from '@/@types/user'
import { api } from '@/lib/api'

export type postProps = {
  id: string
  title: string
  content: string
  imageUrl: string
  createdAt: string
  user: UserProps
}

export async function getPosts() {
  try {
    const response = await api.get('/posts')

    return response.data as postProps[]
  } catch (error) {
    console.log(error)
  }
}
