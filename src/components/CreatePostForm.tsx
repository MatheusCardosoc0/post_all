'use client'

import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import Input from './Input'
import { api } from '@/lib/api'
import { userState } from '@/context/userState'
import { useRouter } from 'next/navigation'

const schema = z.object({
  title: z.string(),
  content: z.string(),
})

type FormProps = z.infer<typeof schema>

const CreatePostForm = () => {
  const { handleSubmit, register } = useForm<FormProps>({
    mode: 'all',
    reValidateMode: 'onChange',
    resolver: zodResolver(schema),
  })

  const router = useRouter()

  const { user } = userState()

  async function onFormSubmit(data: FormProps) {
    try {
      await api.post('/posts', {
        title: data.title,
        content: data.content,
        imageUrl: '',
        email: user.email,
      })

      router.push('/post/dashboard')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onFormSubmit)}>
      <Input id="title" register={register} label="title" type="text" />

      <Input id="content" register={register} label="content" type="text" />

      <button>Publicar</button>
    </form>
  )
}

export default CreatePostForm
