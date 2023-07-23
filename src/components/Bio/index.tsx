/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import { bio } from "../../configs"

const Bio = () => {
  const data1 = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data1.site.siteMetadata?.author
  const social = data1.site.siteMetadata?.social

  return (
    <BioStyled>
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../../images/profile-pic.png"
        width={50}
        height={50}
        quality={95}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          <strong>{author.name}</strong>
        </p>
      )}
      <p>{author?.summary || null}</p>
      {bio?.location && <p>{bio?.location}</p>}
      {bio?.email && <p>{bio?.email}</p>}
      {bio?.github && <p>{bio?.github}</p>}
      {bio?.linkedin && <p>{bio?.linkedin}</p>}
    </BioStyled>
  )
}

const BioStyled = styled.div`
  border: 1px dotted green;
`

export default Bio
