import { Container } from '@/components/Container'
import { Link } from '@/components/Link'

export const Header: React.FC = () => (
  <div className="sticky top-0 z-50 after:-z-10 after:content-[''] after:bg-white after:opacity-90 after:absolute after:inset-0">
    <Container>
      <div className='flex justify-between h-16 items-center'>
        <Link href="/">
          Julian Furchert
        </Link>
        <div className='flex gap-5'>
          <Link href="/about">
            About
          </Link>
          <Link href="/resume">
            Resume
          </Link>
        </div>
      </div>
    </Container>
  </div>
)