import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'
import { Text } from '@/components/Text'

export default function About() {
  return (
    <Container className="py-32">
      <div className='max-w-7xl'>
        <Headline>
          About
        </Headline>
        <Text variant='large' className='my-9'>
          As a software engineer with six years of experience, I have developed and designed user-friendly and visually appealing interfaces for various digital products. At Raytion, I’m the lead developer of a component library for search applications. I have a passion for user design systems, animation, and interaction design
        </Text>
      </div>
    </Container>
  )
}
