import { Container } from '@/components/Container'
import { Link } from '@/components/Link'

const data = [
  { label: 'E-Mail', href: 'mailto:mail@julianfurchert.com' },
  { label: 'Github', href: 'https://github.com/JulianFurchert' },
  { label: 'Twitter', href: 'https://twitter.com/JFurchert' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/julian-furchert/' },
]

export const Footer: React.FC = () => (
  <div className='bg-gray-100'>
    <Container>
      <div className='flex justify-between items-center h-24 max-md:h-20'>
        <div className='flex gap-5'>
          {data.map(entry => (
            <Link key={entry.href} href={entry.href} target="_blank">
              {entry.label}
            </Link>
          ))}
        </div>
        <Link href="https://github.com/JulianFurchert/rebuild-my-website" target="_blank">
          View Source
        </Link>
      </div>
    </Container>
  </div>
)