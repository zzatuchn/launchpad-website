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
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossOrigin="anonymous"></script>
      </Head>
      <Navbar></Navbar>
      <div className="bg-image-four">
        <div className="bg-gradient-four">
          <div className="main-text" style={{textAlign: "center"}}>
            <h1>About SafeHouse</h1>
          </div>
          <div className="about-cards">
            <div className="about-card">
              <a data-bs-toggle="collapse" href="#questionOne" role="button" aria-expanded="false" aria-controls="collapseExample">
                <div style={{color: "white", display: "inline"}}>
                  <h2>What is SafeHouse?</h2>
                  <p>[expand]</p>
                </div>
              </a>
              <div className="collapse" id="questionOne">
                <div className="">
                  <h3>
                    We believe that <tt>small businesses are underappreciated</tt> by the big cyber companies.
                    No one has the time to configure a complicated and expensive set of tools and analyze reams of data. 
                    We are creating an affordable, simple and proactive cybersecurity solution that will alleviate small businesses
                    of their security woes.
                  </h3>
                  <br></br>
                  <h3>
                    <tt>SafeHouse</tt> is a suite of hyper-secure, affordable variable-interaction honeypots 
                    and honeypot IDS's that help protect production systems, aimed at small enterprises.
                  </h3>
                  <br></br>
                </div>
              </div>
            </div>
            <div style={{width:"100%", height: "3px", background: "white"}}></div>
            <br></br>
            <div className="about-card">
              <a data-bs-toggle="collapse" href="#questionTwo" role="button" aria-expanded="false" aria-controls="collapseExample">
                <div style={{color: "white", display: "inline"}}>
                  <h2>What is a honeypot?</h2>
                  <p>[expand]</p>
                </div>
              </a>
              <div className="collapse" id="questionTwo">
                <div className="">
                  <h3>
                      <tt>Honeypots</tt> are an often overlooked cybersecurity measure and a powerful
                      research tool.
                      A honeypot is a decory system or service intentionally left vulnerable to hackers. 
                      The goal of a honeypot is to collect data from intruders and divert their attention
                      from the main infrastructure, which is easy because
                      any connection to the honeypot is considered hostile.
                    </h3>
                    <br></br>
                    <h3> 
                      Honeypots range in complexity from intercepting packets to emulating services 
                      to imitating fully-fledged components in the organization's infrastructure.
                      Successful honeypots appear convincing to hackers and collect useful data
                      while staying isolated from the rest of the infrastructure.
                    </h3>
                    <br></br>
                </div>
              </div>
            </div>
            <div style={{width:"100%", height: "3px", background: "white"}}></div>
            <br></br>
            <div className="about-card">
              <a data-bs-toggle="collapse" href="#questionThree" role="button" aria-expanded="false" aria-controls="collapseExample">
                <div style={{color: "white", display: "inline"}}>
                  <h2>How are honeypots used?</h2>
                  <p>[expand]</p>
                </div>
              </a>
              <div className="collapse" id="questionThree">
                <div className="">
                  <h3>
                    Honeypots have two main purposes: diverting hackers and collecting data.
                  </h3>
                  <br></br>
                  <h3>
                    <tt>Production honeypots</tt> are used as a security
                    measure by corporations. They are meant to fool hackers into thinking they've infiltrated
                    the company's production systems when they are only interacting with a decoy.
                    The company can enact security measures on the
                    production system during an attack,
                    in case the hacker realizes he's been duped.
                    These <tt>low-interaction</tt> honeypots do not collect a lot of data and only emulate services frequently requested
                    by hackers. 
                  </h3>
                  <br></br>
                  <h3>
                    <tt>Research honeypots</tt> are used by universities, governments and the military to 
                    reveal the motives and tactics of the hackers. As such, they collect as much
                    information as possible and emulate entire computers. In contrast to 
                    production honeypots, these <tt>high-interaction</tt> honeypots are difficult to 
                    maintain and set up.
                  </h3>
                
                  <br></br>
                </div>
              </div>
            </div>
            <div style={{width:"100%", height: "3px", background: "white"}}></div>
            <br></br>
            <div className="about-card">
              <a data-bs-toggle="collapse" href="#questionFour" role="button" aria-expanded="false" aria-controls="collapseExample">
                <div style={{color: "white", display: "inline"}}>
                  <h2>Why are honeypots great for cybersec?</h2>
                  <p>[expand]</p>
                </div>
              </a>
              <div className="collapse" id="questionFour">
                <div className="">
                  <h3>
                    Intrusion Detection and Prevention Systems offer a <tt>defensive</tt> approach to cybersec.
                    They become useful once an attack happens. If a hacker slips past these systems, the company's
                    infrastructure is irreversibly compromised. 
                  </h3>
                  <br></br>
                  <h3>
                    In contrast, honeypots are a <tt>offensive</tt> security measure. They stop hackers before they
                    even approach the production system and collect data to prevent them from getting any closer.
                  </h3>
                  <br></br>
                </div>
              </div>
            </div>
            <div style={{width:"100%", height: "3px", background: "white"}}></div>
            <br></br>
            <div className="about-card">
              <a data-bs-toggle="collapse" href="#questionFive" role="button" aria-expanded="false" aria-controls="collapseExample">
                <div style={{color: "white", display: "inline"}}>
                  <h2>Why SafeHouse?</h2>
                  <p>[expand]</p>
                </div>
              </a>
              <div className="collapse" id="questionFive">
                <div className="">
                  <h3>
                    SafeHouse has all of the features of typical honeypot software.
                  </h3>
                  <br></br>
                  <h3>
                    The key difference is that we host <tt>secure, convincing honeypots</tt> on our own servers.
                    Malicious requests to your infrastructure can be proxied to our managed honeypots.
                  </h3>
                  <br></br>
                  <h3>
                    This model <tt>eliminates the security risks and maintenance costs</tt> associated with high-interaction 
                    honeypots. With SafeHouse, companies can leverage the benefits of both low and high
                    interaction honeypots without any downsides.
                  </h3>
                  <br></br>
                  <h3>
                    We also use <tt>synthetic data</tt> to make the honeypots as convincing as real systems.
                  </h3>
                  <br></br>
                </div>
              </div>
            </div>
            <div style={{width:"100%", height: "3px", background: "white"}}></div>
            <br></br>
            <div className="about-card">
              <a data-bs-toggle="collapse" href="#questionSix" role="button" aria-expanded="false" aria-controls="collapseExample">
                <div style={{color: "white", display: "inline"}}>
                  <h2>When will SafeHouse be ready to use?</h2>
                  <p>[expand]</p>
                </div>
              </a>
              <div className="collapse" id="questionSix">
                <div className="">
                  <h3>
                    SafeHouse is currently in the early stages of development. 
                    We do not know exactly when it will be ready for release but we suspect that 
                    there will be an alpha by <tt>Fall 2021</tt> at the latest. 
                    Until then, we will post continual updates to our blog and social media.
                  </h3>
                  <br></br>
                </div>
              </div>
            </div>
          </div>
          <div className="bottom-text" style={{top: "200px"}}>
            <br></br>
            <a href="/#prices"><button type="button" className="button btn-danger"><h3>Get SafeHouse</h3></button></a>
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
      </div>
    </div>
  )
}
  