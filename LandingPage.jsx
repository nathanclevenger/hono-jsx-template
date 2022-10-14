import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Benefits } from './components/Benefits'

export const LandingPage = props => (
  <Layout {...props} >
    <Hero {...props} />
    <Benefits {...props} />
    <Features {...props} />
  </Layout>
)