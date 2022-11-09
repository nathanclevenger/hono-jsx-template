import { html, raw } from 'hono/html'

import { setup } from 'twind'
import { virtualSheet, getStyleTag, shim } from 'twind/shim/server'
import * as colors from 'twind/colors'

const sheet = virtualSheet()

const sharedOptions = {
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      colors: {
        brand: colors.blue,
      }
    }
  }
}

setup({ ...sharedOptions, sheet })

export const Layout = ({children}) => {
  sheet.reset()
  const body = shim(children)
  const styleTag = getStyleTag(sheet)
  return html`<!doctype html>
<html>
  <head>

    <meta charset="UTF-8" />
    <title>{{ site.name }} - {{ site.title }}</title>

    <meta name="description" content="{{ site.description }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <meta itemprop="name" content="{{ site.name }} - {{ site.title }}" />
    <meta itemprop="description" content="{{ site.description }}" />
    <meta itemprop="image" content="{{ site.image | default: 'https://opengraph.githubassets.com/0b7b051d3a37b58ffe0b3c9abc1f8c179c0e698c70135a53186224ec1b1c7b56/nathanclevenger/ship' }}" />

    <meta property="og:url" content="https://{{ site.name | default: 'landing.page.as' }}" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="{{ site.name }} - {{ site.title }}" />
    <meta property="og:description" content="{{ site.description }}" />
    <meta property="og:image" content="{{ site.image | default: 'https://opengraph.githubassets.com/0b7b051d3a37b58ffe0b3c9abc1f8c179c0e698c70135a53186224ec1b1c7b56/nathanclevenger/ship' }}" />

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="{{ site.name }} - {{ site.title }}" />
    <meta name="twitter:description" content="{{ site.description }}" />
    <meta name="twitter:image" content="{{ site.image | default: 'https://opengraph.githubassets.com/0b7b051d3a37b58ffe0b3c9abc1f8c179c0e698c70135a53186224ec1b1c7b56/nathanclevenger/ship' }}" /></>
    
    ${raw(styleTag)}

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autolinker/prism-autolinker.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/toolbar/prism-toolbar.min.css" />
    <link rel="stylesheet" href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css" />

  </head>
  <body data-instant-allow-external-links>
    ${body}
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/prism.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autoloader/prism-autoloader.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/normalize-whitespace/prism-normalize-whitespace.min.js" ></script>
    <script src="https://cdn.jsdelivr.net/npm/prismjs@1.29.0/plugins/autolinker/prism-autolinker.min.js" ></script>
    <script src="https://instant.page/5.1.1" type="module" integrity="sha384-MWfCL6g1OTGsbSwfuMHc8+8J2u71/LA8dzlIN3ycajckxuZZmF+DNjdm7O6H3PSq" ></script>
  </body>
</html>`
}

{/* 
<script src="https://cdn.tailwindcss.com?plugins=forms,typography,aspect-ratio,line-clamp"></script>
<script>
  tailwind.config = {
    theme: {
      extend: {
        screens: {
          'xs': '475px',
        },
        colors: {
          brand: tailwind.colors.blue,
        }
      }
    }
  }
</script> 
*/}