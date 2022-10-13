import { Hono } from 'hono'
import { Layout } from './components/Layout'
import { Hero } from './components/Hero'

const app = new Hono()

app.get('/', c => c.html(<Layout><Hero/></Layout>))

export default app