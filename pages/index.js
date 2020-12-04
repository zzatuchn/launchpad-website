import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SafeHouse - Home</title>
        <meta charset="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
      </Head>
      <Navbar></Navbar>
      <div className="bg-image">
        <div className="bg-gradient">
          <div className="main-text">
            <h1>Fool, learn, and conquer</h1>
            <h3>Sophisticated intrusion protection<br></br> with honeypots</h3>
            <br></br>
            <a href="/signup"><button type="button" className="button btn-danger"><h3>Request a Consultation</h3></button></a>
            <br></br><br></br>
            <button type="button" className="button btn-dark"><h3>See How SafeHouse Works</h3></button>
          </div>
        </div>
      </div>
      <div className="about-text-container">
        <div className="about-text" style={{top: "40px", position: "relative"}}>
          <h1>Thing 1</h1>
          <br></br>
          <h3>Text text text text text text text text text text text text text text text text text text text text text text text text</h3>
          <br></br>
          <img src="honeycomb.png" width="200px"></img>
        </div>
        <div className="about-text" style={{top: "40px", position: "relative"}}>
          <h1>Thing 2</h1>
          <br></br>
          <h3>Text text text text text text text text text text text text text text text text text text text text text text text text</h3>
          <br></br>
          <img src="data.png" width="200px"></img>
        </div>
        <div className="about-text" style={{top: "40px", position: "relative"}}>
          <h1>Thing 3</h1>
          <br></br>
          <h3>Text text text text text text text text text text text text text text text text text text text text text text text text</h3>
          <br></br>
          <img src="safe.svg" width="200px"></img>
        </div>
      </div>
      <div style={{height: "335px", background: "rgb(225,75,75)", borderTop: "solid", borderColor: "white"}}>
        <div className="bottom-text">
          <h1>Still in development!</h1>
          <br></br>
          <h3>This is a placeholder site!<br></br>There is nothing to try out yet but <br></br>we're working on it!</h3>
        </div>
      </div>
      <div className="bg-image-two">
        <div className="bg-gradient-two">
        </div>
      </div>
      <div className="bottom-text">
        <h1>Be the first to experience the security revolution!</h1>
        <br></br>
        <a href="/signup"><button type="button" className="button btn-danger"><h3>Request a Consultation</h3></button></a>
        <br></br><br></br>
        <button type="button" className="button btn-dark"><h3>See How SafeHouse Works</h3></button>
        <br></br><br></br><br></br>
        <div style={{width:"100%", height: "3px", background: "gray"}}></div>
        <br></br>
        <a className="navbar-brand" style={{color:"rgb(256, 70, 70)"}} href="#"><h2>SafeHouse</h2></a>
      </div>
    </div>
  )
}
