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
    <form
      onSubmit={handleSubmit(onFormSubmit)}
      className="flex w-[90%] max-w-[500px] flex-col gap-6 rounded-xl bg-neutral-100 p-4 drop-shadow-[1px_1px_3px_black]"
    >
      <h3 className="text-3xl font-bold text-black">Faça uma publicação</h3>

      <Input id="title" register={register} label="title" type="text" />

      <Input id="content" register={register} label="content" type="text" />

      <button className="w-[240px] rounded-xl bg-blue-500 p-4 text-2xl font-bold text-white drop-shadow-[1px_1px_1px_black] hover:bg-blue-700">
        Publicar
      </button>
    </form>
  )
}

export default CreatePostForm
