//import 'bulma/css/bulma.css';
import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'
import CarouselHeader from '../components/CarouselHeader'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  title,
  carousel
}) => (
  <div className="is-fullwidth">
    <CarouselHeader images={carousel} />
    <br/>
    <br/>
    {/* <Header image={image} title={title}></Header> */}
    <div className="container content">
      {/* <h4 className="subtitle is-4 has-text-centered">{subtitle}</h4> */}
      <div className="columns is-centered">
        <div className="column">
          {/* <PageContent className="has-text-centered" content={}></PageContent> */}
        </div>
      </div>
    </div>
  </div>
)

IndexPageTemplate.propTypes = {
  // image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  carousel: PropTypes.arrayOf(PropTypes.string)
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const carousel = frontmatter.carousel.map(i => i.childImageSharp.fluid.src);
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        carousel={carousel}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
query IndexPageTemplate {
  markdownRemark(frontmatter: {templateKey: {eq: "index-page"}}) {
      frontmatter {
        title
        carousel {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`

// image {
//   childImageSharp {
//     fluid(maxWidth: 2048, quality: 100) {
//       ...GatsbyImageSharpFluid
//     }
//   }
// }
