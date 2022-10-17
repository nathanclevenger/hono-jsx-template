import { Dashboard } from '../components/Dashboard'
import { Form } from '../components/Form'
import { Layout } from '../components/Layout'

export const App = props => (
  <Layout {...props} >
    <Dashboard>
      <Form />
    </Dashboard>
  </Layout>
)