import React from "react"
import { bio } from "../../configs"
import styled from "styled-components"

const Footer = () => {
  const author = bio.author

  return (
    <FooterStyled>
      © {new Date().getFullYear()} {author}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer``

export default Footer
