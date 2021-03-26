import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
    return (
      <div>
        <Head>
          <title>SafeHouse - Home</title>
          <meta charSet="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
        </Head>
        <Navbar></Navbar>
        <div className="about-text-2">
          <br></br>
          <br></br>
          <h1>About Safehouse</h1>
          <br></br>
          <h2>What is Safehouse?</h2>
          <br></br>
          <h4>Safehouse is a honeypot that can capture and analyze all kinds of traffic.</h4>
          <br></br>
          <h2>What is a Honeypot?</h2>
          <h4>A honeypot is a decoy computer purposely left vulnerable to hackers.</h4>
          <br></br>
        </div>
      </div>
    )
  }
  