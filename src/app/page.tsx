import Button from '@/components/Button'
import User from '@/components/User'

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <User />
      <Button />
    </main>
  )
}
