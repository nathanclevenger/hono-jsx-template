import { Dashboard } from '../components/Dashboard'
import { Form } from '../components/Form'
import { Layout } from '../components/Layout'
// import { Steps } from '../components/Steps'

export const App = props => (
  <Layout {...props} >
    <Dashboard>
      {/* <Steps/> */}
      <Form/>
    </Dashboard>
  </Layout>
)