import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>SafeHouse - Home</title>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossOrigin="anonymous"></link>
      </Head>
      <Navbar></Navbar>
      <div className="bg-image">
        <div className="bg-gradient">
          <div className="main-text">
            <h1>Fool, learn, and conquer</h1>
            <h3>Smart honeypots for<br></br> small enterprises</h3>
            <br></br>
            <a href="#prices"><button type="button" className="button btn-danger"><h3>Get SafeHouse</h3></button></a>
            <br></br><br></br>
            <a href="/about"><button type="button" className="button btn-dark"><h3>Learn More</h3></button></a>
          </div>
        </div>
      </div>
      <div className="about-text-container">
        <div className="about-text" style={{top: "40px", position: "relative"}}>
          <h1>Configurable</h1>
          <br></br>
          <h3>Designed to suit multiple use cases</h3>
          <br></br>
          <img src="honeycomb.png" width="200px"></img>
        </div>
        <div className="about-text" style={{top: "40px", position: "relative"}}>
          <h1>Sophisticated</h1>
          <br></br>
          <h3>Uses data to protect from future threats</h3>
          <br></br>
          <img src="data.png" width="200px"></img>
        </div>
        <div className="about-text" style={{top: "40px", position: "relative"}}>
          <h1>Safe</h1>
          <br></br>
          <h3>Isolated and convincing decoys</h3>
          <br></br>
          <img src="safe.png" width="200px"></img>
        </div>
      </div>
      <div className="red-container" style={{background: "rgb(225,75,75)", borderTop: "solid", borderColor: "white", top: "0px"}}>
        <div className="bottom-text">
          <h1>Disclaimer</h1>
          <br></br>
          <h3>This is a placeholder site for a product in development.
            <br></br>There is nothing to purchase nor demo.
            <br></br>In the meantime, check out our blog!
          </h3>
        </div>
      </div>
      <div className="bg-image-two">
        <div className="bg-gradient-two" style={{textAlign: "center"}}>
          <h1 style={{position: "relative", top: "320px", margin: "auto"}}>Recent blog posts</h1>
        </div>
      </div>
      <div className="about-text-container" style={{marginBottom: "40px", marginTop: "-75px"}}>
        <div className="blog-post">
          <br></br>
          <img src="maze.jpg" width="90%" height="200px"></img>
          <h2>Escaping The Cybersecurity Maze: A Guide for Newbies</h2>
          <p><a href="https://devsafehouse.medium.com/escaping-the-cybersecurity-maze-a-guide-for-newbies-29d3323ea5a5">Read this blog post &#8594;</a></p>
        </div>
        <div className="blog-post">
          <br></br>
          <img src="sec.jpg" width="90%" height="200px"></img>
          <h2>Four Ways That Small Businesses are Out of Their Depth on Cybersecurity</h2>
          <p><a href="/">Read this blog post &#8594;</a></p>
        </div>
        <div className="blog-post">
          <br></br>
          <img src="gray.jpg" width="90%" height="200px"></img>
          <h2>Coming soon...</h2><br></br>
        </div>
      </div>
      <div className="bg-image-three" style={{height: "700px", borderTop: "solid", borderColor: "white"}}>
        <div className="bg-gradient-three">
          <a name="prices"></a>
          <div className="main-text">
            <h1>Disclaimer</h1>
            <br></br>
            <h3>There is nothing yet to purchase on this website. 
              <br></br>The prices listed below are subject to change.
            </h3>
          </div>
        </div>
      </div>
      <div className="price-text-container" style={{marginTop:"-350px"}}>
        <div className="product-choice">
          <h1>Basic</h1>
          <div className="price-tag">
            <h1>$XX.XX</h1>
            <p>per instance per month</p>
          </div>
          <ul>
            <li>&#10003; Feature 1</li>
            <li>&#10003; Feature 2</li>
            <li>&#10003; Feature 3</li>
            <li style={{color:"rgb(200,200,200)"}}>&#9587; Feature 4</li>
            <li style={{color:"rgb(200,200,200)"}}>&#9587; Feature 5</li>
            <li style={{color:"rgb(200,200,200)"}}>&#9587; Feature 6</li>
          </ul> 
          <button type="button" className="button btn-dark"><h3>Purchase Now!</h3></button>
        </div>
        <br></br>
        <div className="product-choice">
          <h1>Enterprise</h1>
          <div className="price-tag">
            <h1>$XX.XX</h1>
            <p>per instance per month</p>
          </div>
          <ul>
            <li>&#10003; Feature 1</li>
            <li>&#10003; Feature 2</li>
            <li>&#10003; Feature 3</li>
            <li>&#10003; Feature 4</li>
            <li>&#10003; Feature 5</li>
            <li>&#10003; Feature 6</li>
          </ul> 
          <button type="button" className="button btn-dark"><h3>Purchase Now!</h3></button>
        </div>
      </div>
      <div className="bottom-text">
        <div style={{width:"100%", height: "3px", background: "gray"}}></div>
        <br></br>
        <h1>Get the world's most advanced commercial honeypot</h1>
        <br></br>
        <a href="/about"><button type="button" className="button btn-danger"><h3>Learn More</h3></button></a>
        <br></br><br></br>
        <a href="/"><button type="button" className="button btn-dark"><h3>Read Our Blog</h3></button></a>
        <br></br><br></br><br></br>
        <div style={{width:"100%", height: "3px", background: "gray"}}></div>
        <br></br>
        <a className="navbar-brand" style={{color:"white"}} href="#"><h2>SafeHouse</h2></a>
        <p>Powered by the <a href="https://www.stevens.edu/academics/undergraduate-studies/undergraduate-entrepreneurship-programs/launchpadstevens">Launchpad Program</a> at Stevens</p>
        <img src="launchpad.png" width="100px" height="100px"></img>
        <br></br>
        <br></br>
      </div>
    </div>
  )
}
