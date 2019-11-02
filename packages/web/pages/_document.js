import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

// To render styles on the server-side (for styled-components)
class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html lang="en">
        <Head>{this.props.styleTags}</Head>

        <body>
          <noscript>
            <div
              style={{
                width: '900px',
                margin: '20% auto',
                textAlign: 'center',
              }}
            >
              <h2>
                It's pity that you wanna live in a{' '}
                <span style={{ color: 'red' }}>world without JavaScript!</span>{' '}
                🌎
              </h2>
            </div>
          </noscript>

          <Main />
          <NextScript />

          <script src="/static/prebuilt/web/assets/jquery/jquery.min.js"></script>
          <script src="/static/prebuilt/popper/popper.min.js"></script>
          <script src="/static/prebuilt/tether/tether.min.js"></script>
          <script src="/static/prebuilt/bootstrap/js/bootstrap.min.js"></script>
          <script src="/static/prebuilt/social-likes/social-likes.js"></script>
          <script src="/static/prebuilt/dropdown/js/script.min.js"></script>
          <script src="/static/prebuilt/touch-swipe/jquery.touch-swipe.min.js"></script>
          <script src="/static/prebuilt/as-pie-progress/jquery-as-pie-progress.min.js"></script>
          <script src="/static/prebuilt/smooth-scroll/smooth-scroll.js"></script>
          <script src="/static/prebuilt/jarallax/jarallax.min.js"></script>
          <script src="/static/prebuilt/theme/js/script.js"></script>
          <script src="/static/prebuilt/formoid/formoid.min.js"></script>
        </body>
      </html>
    )
  }
}

export default MyDocument
