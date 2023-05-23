import { UserProps } from '@/@types/user'
import { create } from 'zustand'

interface UserStateProps {
  user: UserProps
  setUser: (user: UserProps) => void
}

export const userState = create<UserStateProps>((set) => ({
  user: {} as UserProps,
  setUser: (user) => set({ user }),
}))
