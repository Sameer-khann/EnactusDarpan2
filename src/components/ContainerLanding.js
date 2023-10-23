import React from 'react'
import tasveer from '../Assets/logo.png'

function ContainerLanding() {
  return (
    <>
    {/* <div className="main_header"> Who we are</div> */}
    <div className="main">
        <div className="main_text"><div className="main_header"> Who we are</div>At Enactus, we are on a mission to make a meaningful impact through non-profit entrepreneurship. Our core business, DARPAN, is not just an e-commerce platform; it's a bridge between talented artisans from lower-income communities and consumers who appreciate handcrafted, high-quality products. Through DARPAN, we provide employment opportunities, foster skill development, and support sustainable livelihoods. Every purchase you make on our platform contributes to a brighter future for individuals and their communities. Join us in our journey to create a world where business is a force for good, and together, we can empower change, one business at a time." </div>
        <div className="main_image"><img src = {tasveer} height="300px"/></div>
    </div>
    </>
  )
}

export default ContainerLanding
