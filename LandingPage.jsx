import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Benefits } from './components/Benefits'
import { Stats } from './components/Stats'
import { Posts } from './components/Posts'
import { Logos } from './components/Logos'

export const LandingPage = props => (
  <Layout {...props} >
    <Hero {...props} />
    <Stats {...props} />
    <Benefits {...props} />
    <Logos />
    <Features {...props} />
    <Posts {...props} />
  </Layout>
)