import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Welcome Home Next.js Routing</h1>
      <h2>Links</h2>
      <ul className='bg-yellow-300 flex flex-col gap-3'>
        <li><Link href='/blog'>Blog</Link></li>
        <li><Link href='/product'>Product</Link></li>
      </ul>
    </div>
  )
}
