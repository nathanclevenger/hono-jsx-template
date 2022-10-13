/** @jsx jsx */
/** @jsxFrag  Fragment */
import { Hono } from 'hono'
import { jsx } from 'hono/jsx'

const app = new Hono()

const Layout = ({children}) => {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}

const Top = ({messages}) => {
  return (
    <Layout>
      <h1>Hello Hono!</h1>
      <ul>
        {messages.map((message) => {
          return <li>{message}!!</li>
        })}
      </ul>
    </Layout>
  )
}

app.get('/', c => {
  const messages = ['Good Morning', 'Good Evening', 'Good Night']
  return c.html(<Top messages={messages} />)
})

export default app