import { InterfaceSection } from '@/composites/InterfaceSection'
import { AboutSection } from '@/composites/AboutSection'
import { AnimationSection } from '@/composites/AnimationSection'
import { SystemSection } from '@/composites/SystemSection'

export default function Home() {
  return (
    <div>
      <AboutSection />
      <InterfaceSection />
      <SystemSection />
      <AnimationSection />
    </div>
  )
}
