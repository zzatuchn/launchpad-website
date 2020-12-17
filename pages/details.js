import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Details() {
    return (
      <div>
        <Head>
          <title>SafeHouse - Details</title>
          <meta charset="utf-8"></meta>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
        </Head>
        <Navbar></Navbar>
        <div className="main-text">
            <h1>Safehouse details</h1>
            <h3>Coming soon...</h3>
            <br></br>
            <a href="/"><button type="button" className="button btn-danger"><h3>Return Home</h3></button></a>
        </div>
        
        
      </div>
    )
  }
  