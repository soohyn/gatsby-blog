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
import { FaGithub, FaLinkedin } from "react-icons/fa"

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
      <div className="profile">
        <div className="image-container">
          <img src={""} alt="title profile image" />
        </div>
        <div className="profile-info-container">
          <p className="author-name">
            <strong>{author.name}</strong>
          </p>
          <p className="author-summary">{author?.summary || null}</p>
        </div>
      </div>
      <div className="separator" />
      <div className="contact-info-container">
        {bio?.location && <p>{bio?.location}</p>}
        {bio?.email && <p>{bio?.email}</p>}
      </div>
    </BioStyled>
  )
}

const BioStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;

  .profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-container {
      display: flex;
      width: 100px;
      height: 100px;
      border-radius: 100%;
      box-shadow: 0 0 1px rgba(0, 0, 0, 0.64);
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .profile-info-container {
      display: flex;
      flex-direction: column;
      text-align: center;
      padding: 12px;

      p.author-summary {
        font-size: var(--fontSize-0);
      }
    }
  }

  .separator {
    height: 1px;
    background-color: #dee2e6;
    border-radius: 0.5px;
  }

  .contact-info-container {
    display: flex;
    flex-direction: column;
    padding: 12px;

    p {
      font-size: var(--fontSize-0);
    }
  }
`

export default Bio
