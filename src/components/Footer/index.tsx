import React from "react"
import { bio } from "../../configs"
import styled from "styled-components"

const Footer = () => {
  const author = bio.author

  return (
    <FooterStyled>
      <div className="left-container">
        {" "}
        © {new Date().getFullYear()} {author}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </div>

      <div className="right-container"></div>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  display: flex;
  flex-direction: row;

  .left-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }

  .right-container {
  }
`

export default Footer
