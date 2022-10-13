/** @jsx jsx */
/** @jsxFrag  Fragment */
import { Hono } from 'hono'
import { jsx } from 'hono/jsx'

import { Layout } from './components/Layout'
import { Hero } from './components/Hero'

const app = new Hono()



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
  // const messages = ['Good Morning', 'Good Evening', 'Good Night']
  // return c.html(Page(<Top messages={messages} />))

  return c.html(<Layout><Hero/></Layout>)
})

export default app