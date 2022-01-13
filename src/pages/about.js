import React from 'react'
import Layout from '../components/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'

const About = () => {
    return (
        <Layout>
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
            </main>
        </Layout>
    )
}

export default About
