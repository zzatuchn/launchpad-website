import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SafeHouse</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
      </Head>
      <Navbar></Navbar>
      <div className="home-bg-image">
        <div className="bg-gradient">
          <div className="main-text">
            <h1>Fool, learn, and conquer</h1>
            <h3>Sophisticated intrusion protection with honeypots</h3>
            <br></br>
            <button type="button" class="button btn-danger"><h3>Request a Consultation</h3></button>
            <br></br><br></br>
            <button type="button" class="button btn-dark"><h3>See How SafeHouse Works</h3></button>
          </div>
        </div>
      </div>
      <div className="main-text">
        <h1>Catch hackers in the act</h1>
        <h3>We intall smart honeypots that learn as well as protect</h3>
        <br></br><br></br>
      </div>


    </div>
  )
}
