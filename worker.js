import { Hono } from 'hono'
import { getContext } from './context'
import { LandingPage } from './LandingPage'

const app = new Hono()

app.use('*', getContext)
app.get('/', c => c.html(<LandingPage />))
app.get('/api', c => c.json({ hello: 'world' }))

export default app