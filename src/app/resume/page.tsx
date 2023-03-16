import { Container } from '@/components/Container'
import { Headline } from '@/components/Headline'
import { Text } from '@/components/Text'
import { Divider } from '@/components/Divider'
import { List, ListItem } from '@/components/List'

export default function Home() {
  return (
    <Container className="py-32">
      <div className='max-w-7xl'>
        <Headline>
          Julian Furchert
        </Headline>
        <Text variant='large' className='my-9'>
          As a software engineer with six years of experience, I have developed and designed user-friendly and visually appealing interfaces for various digital products. At Raytion, I’m the lead developer of a component library for search applications. I have a passion for user design systems, animation, and interaction design
        </Text>
      </div>

      <Headline variant="overline" as="h2" className='mt-16 mb-2'>
        Skills
      </Headline>
      <Divider className='mb-8' />
      <div className='grid grid-cols-3'>
        <div>
          <Headline variant="small" as="h3">
            Languages & Libraries
          </Headline>
          <List>
            <ListItem>HTML</ListItem>
            <ListItem>CSS</ListItem>
            <ListItem>JavaScript</ListItem>
            <ListItem>React</ListItem>
            <ListItem>Next.js</ListItem>
            <ListItem>Gatsby</ListItem>
            <ListItem>Tailwind</ListItem>
            <ListItem>Emotion</ListItem>
          </List>
        </div>
        <div>
          <Headline variant="small" as="h3">
            Applications & Tools
          </Headline>
          <List>
            <ListItem>Illustrator</ListItem>
            <ListItem>Photoshop</ListItem>
            <ListItem>Sketch</ListItem>
            <ListItem>Figma</ListItem>
            <ListItem>Framer</ListItem>
            <ListItem>Storybook</ListItem>
            <ListItem>Gitlab</ListItem>
            <ListItem>Jenkins</ListItem>
          </List>
        </div>
        <div>
          <Headline variant="small" as="h3">
            Platforms
          </Headline>
          <List>
            <ListItem>WordPress</ListItem>
            <ListItem>Prismic</ListItem>
            <ListItem>Contentful</ListItem>
            <ListItem>Vercel</ListItem>
            <ListItem>Sharepoint</ListItem>
          </List>
        </div>
      </div>

      <Headline variant="overline" as="h2" className='mt-16 mb-2'>
        Education
      </Headline>
      <Divider className='mb-8' />
      <div className='grid grid-cols-3'>
        <div>
          <Headline as="h3" variant="medium">
            Hochschule Düsseldorf
          </Headline>
          <Text variant='medium' as="span">
            2009 – 2013
          </Text>
        </div>
        <div>
          <Headline as="span" variant="small">
            B.A. Communications Design
          </Headline>
        </div>
        <div>
          <Headline as="h4" variant="small">
            Relevant Courses
          </Headline>
          <List>
            <ListItem>Typography</ListItem>
            <ListItem>UI Design</ListItem>
            <ListItem>Design Systeme</ListItem>
            <ListItem>Design Systeme</ListItem>
            <ListItem>Frontend Devlopment</ListItem>
          </List>
        </div>
      </div>

      <Headline variant="overline" as="h2" className='mt-16 mb-2'>
        Work
      </Headline>
      <Divider className='mb-8' />
      <div className='grid grid-cols-3'>
        <div className='col-span-1'>
          <Headline as="h3" variant="medium">
            Raytion
          </Headline>
          <Text variant='medium' as="span">
            20019 – Present
          </Text>
        </div>
        <div className='col-span-2'>
          <Headline as="h4" variant="small">
            Software Engineer
          </Headline>
          <List>
            <ListItem>
              Designed and developed a component library for search applications using React, Typescript, Emotion
            </ListItem>
            <ListItem>
              Implemented accessibility, responsiveness, and performance best practices for the components           
            </ListItem>
            <ListItem>
              Documented and tested the components using Gatsby, Storybook and Jest            
            </ListItem>
            <ListItem>
              Collaborated with other developers and designers to ensure consistency and quality of the library            
            </ListItem>
          </List>
        </div>
      </div>

      <Divider className='my-8' />
      <div className='grid grid-cols-3'>
        <div className='col-span-1'>
          <Headline as="h3" variant="medium">
            Freelance
          </Headline>
          <Text variant='medium' as="span">
            20018 – 2020
          </Text>
        </div>
        <div className='col-span-2'>
          <Headline as="h4" variant="small">
            Web developer
          </Headline>
          <List>
            <ListItem>
              Created user-friendly and visually appealing websites for various digital products using HTML, CSS and JavaScript            </ListItem>
            <ListItem>
              Used creative programming techniques to add animations and interactions to the websites            
            </ListItem>
            <ListItem>
              Optimized the websites for SEO, speed, and cross-browser compatibility           
            </ListItem>
            <ListItem>
              Worked closely with clients to understand their requirements and deliver solutions that met their expectations
            </ListItem>
          </List>
        </div>
      </div>

      <Divider className='my-8' />
      <div className='grid grid-cols-3'>
        <div className='col-span-1'>
          <Headline as="h3" variant="medium">
            Denkwerk
          </Headline>
          <Text variant='medium' as="span">
            20018 – 2020
          </Text>
        </div>
        <div className='col-span-2'>
          <Headline as="h4" variant="small">
            UI Designer
          </Headline>
          <List>
            <ListItem>
              Created user-friendly and visually appealing websites for various digital products using HTML, CSS and JavaScript            </ListItem>
            <ListItem>
              Used creative programming techniques to add animations and interactions to the websites            
            </ListItem>
            <ListItem>
              Optimized the websites for SEO, speed, and cross-browser compatibility           
            </ListItem>
            <ListItem>
              Worked closely with clients to understand their requirements and deliver solutions that met their expectations
            </ListItem>
          </List>
        </div>
      </div>
    </Container>
  )
}
