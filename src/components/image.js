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
      chicago_skyline: file(relativePath: { eq: "chicago_skyline_1.png" }) {
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
      safia_ghouse_headshot: file(relativePath: { eq: "safia_ghouse_headshot.jpeg" }) {
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
      deekshita_jaligama_headshot: file(relativePath: { eq: "deekshitha_jaligama_headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 375, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      david_robinson_headshot: file(relativePath: { eq: "david_robinson_headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 375, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      arvid_haque_headshot: file(relativePath: { eq: "arvid_haque_headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 375, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      william_wale_headshot: file(relativePath: { eq: "william_wale_headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 375, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      alima_abdirova_headshot: file(relativePath: { eq: "alima_abdirova_headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 375, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      adit_bhagat_headshot: file(relativePath: { eq: "adit_bhagat_headshot.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 375, maxHeight: 375, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      accenture_logo: file(relativePath: { eq: "accenture_logo.png" }) {
        childImageSharp {
          fixed(width: 100, height: 27) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      deloitte_logo: file(relativePath: { eq: "Deloitte-1024x296.jpg" }) {
        childImageSharp {
          fixed(width: 100, height: 27) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      silverCrest_logo: file(relativePath: { eq: "silvercrest_solutions_logo.png" }) {
        childImageSharp {
          fixed(width: 100, height: 27) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      weiss_scholarship_logo: file(relativePath: { eq: "weiss_scholarship_logo.png" }) {
        childImageSharp {
          fixed(width: 110, height: 40) {
            ...GatsbyImageSharpFixed
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
  else if(props.photoToUse === "deekshita_jaligama_headshot"){
    return <Img fluid={data.deekshita_jaligama_headshot.childImageSharp.fluid} />
  }
  else if(props.photoToUse === "david_robinson_headshot"){
    return <Img fluid={data.david_robinson_headshot.childImageSharp.fluid} />
  }
  else if(props.photoToUse === "arvid_haque_headshot"){
    return <Img fluid={data.arvid_haque_headshot.childImageSharp.fluid} />
  }
  else if(props.photoToUse === "william_wale_headshot"){
    return <Img fluid={data.william_wale_headshot.childImageSharp.fluid} />
  }
  else if(props.photoToUse === "alima_abdirova_headshot"){
    return <Img fluid={data.alima_abdirova_headshot.childImageSharp.fluid} />
  }
  else if(props.photoToUse === "adit_bhagat_headshot"){
    return <Img fluid={data.adit_bhagat_headshot.childImageSharp.fluid} />
  }
  else if(props.photoToUse === "accenture_logo"){
    return <Img fixed={data.accenture_logo.childImageSharp.fixed} />
  }
  else if(props.photoToUse === "deloitte_logo"){
    return <Img fixed={data.deloitte_logo.childImageSharp.fixed} />
  }
  else if(props.photoToUse === "silverCrest_logo"){
    return <Img fixed={data.silverCrest_logo.childImageSharp.fixed} />
  }
  else if(props.photoToUse === "weiss_scholarship_logo"){
    return <Img fixed={data.weiss_scholarship_logo.childImageSharp.fixed} />
  }
  else{
    console.log("default");
    return <Img fluid={data.chicago_skyline.childImageSharp.fluid} />
  }
}

export default Image
