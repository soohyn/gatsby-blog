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
  align-items: center;
  width: 100%;
  height: var(--header-height);
  padding: var(--header-vertical-padding) 2rem;
  backdrop-filter: blur(10px);
  position: sticky;
  top: 0;

  .header-container {
    display: flex;
    flex-direction: row;

    &.left {
      h1.header-title {
        font-size: var(--header-title-font-size);
        line-height: var(--header-title-line-height);
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
