import React from "react"
import { bio } from "../../configs"
import styled from "styled-components"

const Footer = () => {
  const author = bio.author

  return (
    <FooterStyled>
      <div className="left-container">
        <div className="footer-copyright">
          © {new Date().getFullYear()} {author}, Built with{" "}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
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
    padding: 20px;

    > .footer-copyright {
      display: flex;
      flex-direction: row;
    }
  }

  .right-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
  }
`

export default Footer
