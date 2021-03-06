import Head from 'next/head'
import Navbar from '../components/navbar'
import SignupBox from '../components/signupbox'

export default function Signup() {
    return (
        <div>
            <Head>
                <title>SafeHouse - Sign Up</title>
                <meta charSet="utf-8"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"></meta>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"></link>
            </Head>
            <Navbar></Navbar>
            <div className="bg-image" style={{height: "700px"}}>
                <div className="bg-gradient">
                    <SignupBox></SignupBox>

                </div>
            </div>
        </div>
    )
}