import { Hono } from 'hono'
import { NotFound } from './components/404'
import { getContext } from './context'
import { App } from './pages/App'
import { Interview } from './pages/Interview'
import { LandingPage } from './pages/LandingPage'

const app = new Hono()

app.use('*', getContext)
app.get('/', c => c.html(<LandingPage/>))
app.get('/app', c => c.html(<App/>))
app.get('/api', c => c.json({ hello: 'world', success: true }))
app.get('/interview', c => c.html(<Interview/>))
app.all('*', c => c.html(<NotFound/>))

export default app