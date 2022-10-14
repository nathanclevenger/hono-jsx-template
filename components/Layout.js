import { html } from 'hono/html'

export const Layout = ({children}) => html`<!doctype html>
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
    
    <link href="https://unpkg.com/prismjs@v1.x/themes/prism.css" rel="stylesheet" />
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
  </head>
  <body>
    ${children}
    <script src="https://unpkg.com/prismjs@v1.x/components/prism-core.min.js"></script>
    <script src="https://unpkg.com/prismjs@v1.x/plugins/autoloader/prism-autoloader.min.js"></script>
  </body>
</html>`
