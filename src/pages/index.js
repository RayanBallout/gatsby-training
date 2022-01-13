import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image";


const Home = () => {
  return (
    <Layout>
      <main className="page">
        <header className="hero">
          <StaticImage
            src="../assets/images/main.jpeg"
            alt="Flour and eggs"
            className="hero-img"
            placeholder="tracedSVG"
            layout="fullWidth"
          />
          <div className="hero-container">
            <div className="hero-text">
              <h1>Simple recipes</h1>
              <h4>No fluff, just recipes</h4>
            </div>
          </div>
        </header>
      </main>
    </Layout>
  )
}

export default Home;
