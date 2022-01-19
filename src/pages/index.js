import React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image";
import AllRecipes from "../components/AllRecipes";
import Seo from "../components/SEO";

const Home = () => {
  return (
    <Layout>
      <Seo title="Home" description="This is homepage" />
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
        <AllRecipes />
      </main>

    </Layout>
  )
}

export default Home;
