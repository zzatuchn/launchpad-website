import Head from 'next/head'
import Navbar from '../components/navbar'

export default function Signup() {
    return (
        <div>
            <Head>
                <title>SafeHouse - Get Safehouse</title>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
            </Head>
            <Navbar></Navbar>
            <div className="bg-image-three" style={{height: "700px"}}>
                <div className="bg-gradient-three">
                    <div className="main-text">
                        <h1>Disclaimer</h1>
                        <br></br>
                        <h3>This is a placeholder site for a product in development.
                            <br></br>There is nothing to purchase nor demo.
                            <br></br>In the meantime, check out our blog!
                        </h3>
                    </div>
                </div>
                <div className="about-text-container" style={{marginTop:"-300px"}}>
                    <div className="product-choice">
                        <h1>Safehouse Basic</h1>
                        <div className="price-tag">
                            <h1>$24.95</h1>
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
                    <div className="product-choice">
                        <h1>Safehouse Enterprise</h1>
                        <div className="price-tag">
                            <h1>$49.95</h1>
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
            </div>
            <div className="bottom-text" style={{marginTop:"120px"}}>
                <div style={{width:"100%", height: "3px", background: "gray"}}></div>
                <br></br>
                <h1>Get the world's most advanced commercial honeypot</h1>
                <br></br>
                <a href="/"><button type="button" className="button btn-danger"><h3>Read Our Blog</h3></button></a>
                <br></br><br></br>
                <a href="/"><button type="button" className="button btn-dark"><h3>Back to Homepage</h3></button></a>
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