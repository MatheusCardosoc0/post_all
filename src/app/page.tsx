import Button from '@/components/Button'
import User from '@/components/User'

export default async function Home() {
  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-12">
      <User />
      <Button />
    </main>
  )
}
