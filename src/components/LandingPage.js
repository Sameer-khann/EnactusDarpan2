import React, { useEffect, useState } from 'react'
import phot from "../Assets/Coffee Mug 1 (1).png"
import phot1 from "../Assets/ganesh wo bg 1.png"
import ReviewSection from "../components/ReviewSection.js"
import { Link } from "react-router-dom"
import ContainerLanding from './ContainerLanding'
import firebase from "../../src/firebase"
import { useHistory } from 'react-router-dom/cjs/react-router-dom'





export default function LandingPage() {
    const [products, setProducts] = useState([]);
    const history = useHistory();
    console.log(products)
    useEffect(() => {
        async function getProducts() {
            let arr = [];
            let products = await firebase.firestore().collection("products").get()
            await Promise.all(products.docs.map(async (item) => {
                // console.log(item.data().images[0])
                let images = await firebase.storage().ref(`Products/${item.id}`).list();
                let img = await images.items[0]?.getDownloadURL();
                arr.push({ ...item.data(), url: img, id: item.id });
            }))
            setProducts(arr);
        }
        getProducts();
    }, []);
    return (
        <>
            <div className="Nav">
                <Link to="/" className="Link">
                    <p>Home</p>
                </Link>
                <Link to="/products" className="Link">
                    <p>Products</p>
                </Link>
                <p>About</p>
                <Link to="/ContactPage" className="Link">
                    <p>Contact Us</p>
                </Link>
            </div>
            <div className="catageroy">
                <div className="heading">
                    <h1>Abeer</h1>
                    <p style={{ cursor: "pointer" }}><Link to="/products" className="Link" style={{ color: "black" }}>View More &#8594;</Link></p>
                </div>
                <div className='productCards'>
                    {products.map((product, index) => {
                        if (product.project === "abeer") {
                            return (
                                <div className="cards" onClick={() => history.push("/products/" + product.id)} key={index}>
                                    <div className="CardImg">
                                        <img src={product.url} alt="" />
                                    </div>
                                    <div className="TextCard">
                                        <p className='Name'>{product.project}</p>
                                        <p className='title'>{product.name.split(' ').slice(0, 6).join(' ')}</p>
                                        <p className='price'>₹{product.price}</p>
                                    </div>
                                </div>
                            );
                        } else {
                            return null;
                        }
                    })}
                </div>

            </div>

            <hr />

            <div className="catageroy">
                <div className="heading">
                    <h1>Delara</h1>
                    <p style={{ cursor: "pointer" }}><Link to="/products" className="Link" style={{ color: "black" }}>View More &#8594;</Link></p>
                </div>
                <div className='productCards'>
                    {products
                        .filter(product => product.project === "Delara")
                        .slice(0, 4)
                        .map((product, index) => (
                            <div className="cards" onClick={() => history.push("/products/" + product.id)} key={index}>
                                <div className="CardImg">
                                    <img src={product.url} alt="" />
                                </div>
                                <div className="TextCard">
                                    <p className='Name'>{product.project}</p>
                                    <p className='title'>{product.name.split(' ').slice(0, 4).join(' ')}</p>
                                    <p className='price'>₹{product.price}</p>
                                </div>
                            </div>
                        ))}
                </div>


            </div>

            <hr />

            <div className="catageroy">
                <div className="heading">
                    <h1>Mritkala</h1>
                    <p style={{ cursor: "pointer" }}><Link to="/products" className="Link" style={{ color: "black" }}>View More &#8594;</Link></p>
                </div>
                <div className='productCards'>
                    {products.filter(product => product.project === "mritkala").slice(0, 4).map((product, index) => (
                        <div className="cards" onClick={() => history.push("/products/" + product.id)} key={index}>
                            <div className="CardImg">
                                <img src={product.url} alt="" />
                            </div>
                            <div className="TextCard">
                                <p className='Name'>{product.project}</p>
                                <p className='title'>{product.name.split(' ').slice(0, 6).join(' ')}</p>
                                <p className='price'>₹{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            <hr />

            <div className="catageroy">
                <div className="heading">
                    <h1>Panah</h1>
                    <p style={{ cursor: "pointer" }}><Link to="/products" className="Link" style={{ color: "black" }}>View More &#8594;</Link></p>
                </div>
                <div className='productCards'>
                    {products
                        .filter(product => product.project === "panah")
                        .slice(0, 4)
                        .map((product, index) => (
                            <div className="cards" onClick={() => history.push("/products/" + product.id)} key={index}>
                                <div className="CardImg">
                                    <img src={product.url} alt="" />
                                </div>
                                <div className="TextCard">
                                    <p className='Name'>{product.project}</p>
                                    <p className='title'>{product.name.split(' ').slice(0, 6).join(' ')}</p>
                                    <p className='price'>₹{product.price}</p>
                                </div>
                            </div>
                        ))}
                </div>

            </div>

            <ReviewSection />
            <ContainerLanding />
        </>
    )
}
