import Head from 'next/head'
import { Footer, Heroku, HighlightPanel } from '../components'

export default function Home() {

return (
  <div>
    <Head>
      <title>Muhammad Hafizh Maulana | Cermati.com Front-end Developer Entry Test</title>
    </Head>
    <Heroku />
    <HighlightPanel />
    <Footer />
  </div>
)
}
