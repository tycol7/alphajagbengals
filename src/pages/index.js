import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Gallery from "../components/gallery"
import SimpleReactLightbox from 'simple-react-lightbox'
import Contact from "../components/contact"
import { GatsbySeo } from 'gatsby-plugin-next-seo'

export default function Home(props) {
  return (
    <>
      <GatsbySeo
        title = 'Alpha Jag Bengals'
        description = 'Bengal cat breeding in Shoalhaven, New South Wales'b 
        />
    <header id="header">
    <div className="header-content">
        <h1>Alpha Jag Bengals</h1>
        <nav>
            <a href="#about">About</a>
            <a href="#photos">Photos</a>
            <a href="#contact">Contact</a>
            <a href="https://facebook.com/alphajagbengalcats" aria-label="facebook" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="social-icon" d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
            <a href="https://instagram.com/alphajag_bengals" aria-label="instagram" rel="noreferrer" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path className="social-icon" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
        </nav>
    </div>
</header>
        
        <section id="about">
          <div className="hero-wrapper">
          <Img fluid={props.data.hero.childImageSharp.fluid} />
          </div>
            <div>
                <h2>About Us</h2>
                <p>At Alpha Jag Bengals, we take pride in our small cattery breeding program. Located in the Shoalhaven region, we were introduced to bengal cats and began breeding them in 2011 using our experience with other breeds. We have totally fallen in love with these cats—not surprising, as they are such characters!</p>

                <p>The bengal cat is a hybrid between a domestic queen and Asian Leopard cat. They resemble their wild ancestors, but their character is one of a domesticated cat. Personally, we find them very dog-like in nature.</p>

                <p>We focus on improving the breed, specifically coat patterns and temperment. We also love the different range of colours bengals carry in their genetic make, as we discovered by DNA testing. We are able to create the charcoal colour, just one of our exciting discoveries.</p>

                <p>Our kittens are well-raised with children, dogs, and lots of noise, so they are not shy. We socialise them well while maintaining their wild ancestors’ looks and domesticated personalities. We aim for that great, loving pet that can rule your heart and soul. Most imporantly, we focus on raising healthy and well-socialised bengals!</p>
            </div>
        </section>

        <section id="photos">
        <SimpleReactLightbox>
            <Gallery/>
        </SimpleReactLightbox>
        </section>
    <div className="full-width">
      <div className="container">
        <section id="contact">
            <Contact/>
        </section>

        <footer>
            <a href="#top">Top</a>
            <p>&copy; Alpha Jag Bengals 2020</p>
        </footer>
      </div>
    </div>
    </>
  )
}

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

export const pageQuery = graphql`
  query {
    hero: file(relativePath: { eq: "hero.jpg" }) {
      ...fluidImage
    }
  }
`