import React from 'react'
// import insta from '..'
// import fb from '..'
// import tiwtter from '..'

export default function Footer() {
    return (
        <>
            <div className="footerSec">


                <div className="logoSecFoot">
                    <h1>Darpan Enactus</h1>
                    <div className="socialMedia">
                        {/* <img src={insta} alt="" />
                        <img src={fb} alt="" />
                        <img src={tiwtter} alt="" /> */}
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
                        <h4>Phone :</h4>
                        <h6> +91 78348 38443</h6>
                    </div>
                    <div className="email">
                        <h4>E-mail :</h4>
                        <h6>xyzz@gmail.com</h6>
                    </div>
                </div>


            </div>
            <div className="copyright">
                <p>Copyright &copy; 2023 darpanEnactus. All rights reserved.</p>
            </div>

        </>
    )
}