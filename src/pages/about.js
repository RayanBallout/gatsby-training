import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link, graphql } from 'gatsby'
import RecipesList from '../components/RecipesList'
import Seo from '../components/SEO'

const About = ({ data: { allContentfulRecipe: { nodes: recipes } } }) => {
  return (
    <Layout>
      <Seo title="About" />
      <main className="page">
        <section className="about-page">
          <article>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit porro veritatis quas! Doloremque, ullam non.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed odio veniam, aut velit tempore veritatis?</p>
            <Link to='/contact' className='btn'>contact</Link>
          </article>
          <StaticImage
            src='../assets/images/about.jpeg'
            alt='Person pouring salt in bowl'
            className='about-img'
            placeholder='blurred'
          />
        </section>
        <section className="featured-recipes">
          <h5>Look at this Awesomesauce!</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(filter: {featured: {eq: true}}) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
      totalCount
    }
  }
`

export default About
