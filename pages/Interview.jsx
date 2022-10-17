import { Dashboard } from '../components/Dashboard'
import { Form } from '../components/Form'
import { Layout } from '../components/Layout'
import { Steps } from '../components/Steps'

export const Interview = props => (
  <Layout {...props} >
    <div class="mx-auto max-w-lg flex flex-col py-12 gap-y-16">
      <Steps/>
      <Form/>
    </div>
  </Layout>
)