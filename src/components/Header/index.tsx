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
  padding: 16px 32px;
  align-items: center;
  backdrop-filter: blur(10px);
  width: 100%;
  border: 1px dotted red;
  .header-container {
    display: flex;
    flex-direction: row;

    &.left {
      h1.header-title {
        font-size: 1.8rem;
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
