import React, {Component} from 'react'
import {extractCritical} from 'emotion-server'

import webpack from './webpack.config.js'

const siteRoot = 'https://stars.jwc.in.th'

class Document extends Component {
  render() {
    const {Html, Head, Body, children, renderMeta} = this.props

    return (
      <Html>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <style dangerouslySetInnerHTML={{__html: renderMeta.css}} />
          <link
            href="https://fonts.googleapis.com/css?family=Maitree:300,400,500"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            type="text/css"
            charSet="UTF-8"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
          />

          <link
            rel="stylesheet"
            type="text/css"
            href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
          />
        </Head>
        <Body>{children}</Body>
      </Html>
    )
  }
}

export default {
  webpack,
  siteRoot,
  getSiteProps: () => ({
    title: 'ปิ่นโต อร่อยคำโต',
    siteRoot,
  }),
  getRoutes: async () => [
    {
      path: '/',
      component: 'src/routes/landing',
    },
    {
      is404: true,
      component: 'src/routes/404',
    },
  ],
  renderToHtml: (render, Comp, meta) => {
    const html = render(<Comp />)
    meta.css = extractCritical(html).css
    return html
  },
  Document,
}
