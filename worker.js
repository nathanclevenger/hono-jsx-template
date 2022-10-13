import { Hono } from 'hono'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { getContext } from './context'

const app = new Hono()

app.use('*', getContext)
app.get('/', c => c.html(<Layout><Hero/></Layout>))
app.get('/api', c => c.json({ hello: 'world' }))

export default app