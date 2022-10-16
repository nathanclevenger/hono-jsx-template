import { Hono } from 'hono'
import { NotFound } from './components/404'
import { Dashboard } from './components/Dashboard'
import { Form } from './components/Form'
import { getContext } from './context'
import { LandingPage } from './LandingPage'

const app = new Hono()

app.use('*', getContext)
app.get('/', c => c.html(<LandingPage />))
app.get('/app', c => c.html(<Dashboard />))
app.get('/api', c => c.json({ hello: 'world' }))
app.get('/form', c => c.html(<Form />))
app.all('*', c => c.html(<NotFound />))

export default app