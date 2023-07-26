import { Link } from "gatsby"
import data from "gatsby-config"
import React from "react"
import styled from "styled-components"

interface HeaderProps {
  title: string
}

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderStyled>
      <div className="header-container left">
        <Link to="/">
          <h1 className="header-title">{title}</h1>
        </Link>
      </div>
      <div className="header-container center"></div>

      <div className="header-container right"></div>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  flex-direction: row;
  padding: 16px 20px;
  align-items: center;

  .header-container {
    display: flex;
    flex-direction: row;

    &.left {
      h1.header-title {
        font-size: 2em;
        font-weight: 700;
        color: #495057;
        padding: 0px;
        margin: 0px;
      }
    }

    &.center {
      display: flex;
      flex: 1;
    }
  }
`

export default Header
