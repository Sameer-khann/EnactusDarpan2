import React from 'react'
import logo from '../Assets/logo.png'
import bbd from '../Assets/bbd.png'
import adgitm from '../Assets/adgitm.png'
import insta from '../Assets/insta.png'
import Linkdin from '../Assets/linkdin.png'

export default function Footer() {
    return (
        <>
            <div className="footerSec">


                <div className="logoSecFoot">
                    {/* <h1>Darpan Enactus</h1> */}
                    <div className="socialMedia">
                        <img src={logo} alt="" />
                        <img src={bbd} alt="" />
                        <img src={adgitm} alt="" />
                    </div>
                </div>

                <div className="supportSecFoot">
                    <h1>Features</h1>
                    <h5>Products</h5>
                    <h5>About</h5>
                    <h5>Store</h5>
                </div>

                <div className="ContactUsFoot">
                    <h2>Contact us</h2>
                    <div className="phone">
                        <h4>Address :</h4>
                        <h6>FC-26, Panduk Shila Marg, Zero Pusta Rd, Shastri Park, Shahdara, New Delhi, Delhi 110053</h6>
                    </div>
                    <div className="email">
                        <h4>E-mail :</h4>
                        <h6>xyzz@gmail.com</h6>
                    </div>
                    <div className="SocialMediaHandle">
                        <img src={insta} alt="" />
                        <img src={Linkdin} alt="" />
                    </div>
                </div>


            </div>
            <div className="copyright">
                <p>Copyright &copy; 2023 darpanEnactus. All rights reserved.</p>
            </div>

        </>
    )
}
