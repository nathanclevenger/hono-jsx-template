import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Features } from './components/Features'
import { Benefits } from './components/Benefits'
import { Stats } from './components/Stats'
import { Posts } from './components/Posts'
import { Logos } from './components/Logos'
import { Pricing } from './components/Pricing'
import { FAQ } from './components/FAQ'
import { FooterLinks } from './components/Footer'
import { CTASimple } from './CTA'

export const LandingPage = props => (
  <Layout {...props} >
    <Hero {...props} />
    <Stats {...props} />
    <Benefits {...props} />
    <Logos {...props} />
    <Features {...props} />
    <Pricing {...props} />
    <FAQ {...props} />
    <Posts {...props} />
    <CTASimple {...props} />
    <FooterLinks {...props} />
  </Layout>
)