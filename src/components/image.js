import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = (props) => {
  const data = useStaticQuery(graphql`
    query {
      chicago_skyline: file(relativePath: { eq: "chicago_skyline.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, maxHeight: 450, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      karina_utyuzh_headshot: file(relativePath: { eq: "karina_utyuzh_headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 375, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      safia_ghouse_headshot: file(relativePath: { eq: "safia_ghouse_headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 375, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      christopher_campagna_headshot: file(relativePath: { eq: "christopher_campagna_headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 375, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  console.log(props.photoToUse);
  if(props.photoToUse === "chicago_skyline"){
    return <Img fluid={data.chicago_skyline.childImageSharp.fluid} />
  }
  else if(props.photoToUse === "karina_utyuzh_headshot"){
    return <Img fluid={data.karina_utyuzh_headshot.childImageSharp.fluid} />
  }
  else if(props.photoToUse === "safia_ghouse_headshot"){
    return <Img fluid={data.safia_ghouse_headshot.childImageSharp.fluid} />
  }
  else if(props.photoToUse === "christopher_campagna_headshot"){
    return <Img fluid={data.christopher_campagna_headshot.childImageSharp.fluid} />
  }
  else{
    console.log("default");
    return <Img fluid={data.chicago_skyline.childImageSharp.fluid} />
  }
}

export default Image
