import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to Homestead Manager</h1>
      <nav>
        <ul>
          <li><Link href="/animals">Animals</Link></li>
          <li><Link href="/pastures">Pastures</Link></li>
          <li><Link href="/feeding">Feeding</Link></li>
        </ul>
      </nav>
    </main>
  )
}