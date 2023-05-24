import Navbar from '@/components/navbar'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <div className="mt-20">{children}</div>
    </>
  )
}
